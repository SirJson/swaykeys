import { html } from "https://deno.land/x/html/mod.ts";

const HTMLHead = html`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sway key bindings</title>
    <style>
    /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
    html,
    body,
    p,
    ol,
    ul,
    li,
    dl,
    dt,
    dd,
    blockquote,
    figure,
    fieldset,
    legend,
    textarea,
    pre,
    iframe,
    hr,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
        padding: 0
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
        font-weight: normal
    }

    ul {
        list-style: none
    }

    button,
    input,
    select {
        margin: 0
    }

    html {
        box-sizing: border-box
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit
    }

    img,
    video {
        height: auto;
        max-width: 100%
    }

    iframe {
        border: 0
    }

    table {
        border-collapse: collapse;
        border-spacing: 0
    }

    td,
    th {
        padding: 0
    }
</style>
    <style>
        :root {
            --background-color: #13212A;
            --alt-back: #0a1116;
            --sidewidth: 1rem;
            --text-color: #e7e1d4;
            --text-color-muted: #AAAFAC;
            --color1: #FE7F2D;
            --color2: #B33F62;
            --color3: #619B8A;
            --roweven: #13212A;
            --rowodd: #192C38;
            --rowline: #242A2E;
            --alt: #B79076;
            --row-height: 3rem;
        }

        body {
            padding: 0;
            margin: 0 auto;
            overflow: scroll;
            width: 100%;
            background: var(--background-color);
            font-family: system-ui, Source Sans Pro, Inter, Fira Sans, Noto Sans, Verdana, 'Segoe UI', sans-serif;
            font-size: 14px;
            color: var(--text-color);

        }

        h1 {
            font-size: 32px;
            padding: 1rem;
            border-bottom: #242A2E solid 2px;
        }

        .bindingContainer {
            display: grid;
            grid-template-columns: 2fr 1fr 2fr;
            grid-template-rows: auto;
            row-gap: 0.25rem;
            align-items: center;
            justify-content: center;
            background: var(--roweven);
            overflow-y: auto;
            padding: var(--sidewidth);
        }

        .bindingContainer>div:nth-child(6n + 1),
        .bindingContainer>div:nth-child(6n + 2),
        .bindingContainer>div:nth-child(6n + 3) {
            background: var(--rowodd);
        }

        .bindingContainer>div {
            height: var(--row-height);
            line-height: var(--row-height);
            overflow-y: auto;
        }

        .cmd {
            font-style: italic;
            color: var(--text-color-muted);
        }

        .binding {
            font-weight: 600;
            color: var(--color2);
        }

        .args {
            font-family: monospace;
            color: var(--color1);
            background-color: var(--alt-back) !important;
            overflow: auto;
            padding-left: 4px;
        }
    </style>
</head>
`;

const HTMLFooter = `
</html>
`;

async function swayConfig(): Promise<string[]> {
    let output: string[] = [];
    const p = Deno.run({
        cmd: ["swaymsg", "-t", "get_config"],
        stdout: "piped",
        stderr: "piped",
    });

    const { code } = await p.status();

    var decoder = new TextDecoder();

    // Reading the outputs closes their pipes
    const rawOutput = await p.output();
    const rawError = await p.stderrOutput();

    if (code === 0) {
        const json = JSON.parse(decoder.decode(rawOutput));
        output = json.config.split("\n");
    } else {
        const errorString = decoder.decode(rawError);
        console.error(errorString);
    }
    return output;
}

function bindingToHTML(bindingData: string[]): string {
    return html`
    <div class='bindingData'>${bindingData[0]}</div>
    <div class='cmd'>${bindingData[1]}</div>
    <div class='args' readonly>${bindingData[2]}</div>
    `;
}

function buildHTMLBody(htmlGroups: string[]): string {
    return html`
  <body>
  <h1>Sway key bindings</h1>
  <div class="bindingContainer">
	${htmlGroups.join("\n")}
  </div>
</body>`;
}

function buildDocument(htmlGroups: string[]): string {
    return HTMLHead + buildHTMLBody(htmlGroups) + HTMLFooter;
}

function parseKeybinding(
    line: string,
    variables: Map<string, string>,
): [string, string, string] {
    const bindingPattern =
        /^(?<keyword>bindsym)\s+(?<binding>[$\w+]+)\s+(?<cmd>exec|focus|move|reload|floating|split|workspace\w*?)\s*(?<argument>[\w'-/\\$\s\d\."]+)?[;]?.*$/mgui;
    const varPattern = /\$\w+/gui;
    const varsNeeded = [...line.matchAll(varPattern)];
    let resolved: string = line;
    for (let v of varsNeeded) {
        resolved = resolved.replace(v[0], variables.get(v[0]) ?? "?");
    }
    let m;
    while ((m = bindingPattern.exec(resolved)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === bindingPattern.lastIndex) {
            bindingPattern.lastIndex++;
        }
        if (!m.groups) continue;

        return [
            m.groups["binding"].replace("Mod4", "Super").replace("Mod1", "Alt"),
            m.groups["cmd"],
            (m.groups["argument"] ?? '').replace('--no-startup-id', ''),
        ];
    }
    return ["", "", ""];
}

function parseVariable(line: string): [string, string] {
    const setPattern =
        /^(?<keyword>set)\s+(?<key>[$]\w+)\s+(?<value>[\w'-/\\$\s\d\.~"]+)$/mgui;
    let m;
    while ((m = setPattern.exec(line)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === setPattern.lastIndex) {
            setPattern.lastIndex++;
        }
        if (!m.groups) continue;
        return [m.groups["key"], m.groups["value"]];

    }
    return ["", ""];
}

async function resolveKeyBindings(configLines: string[]): Promise<string> {
    let stateDict = new Map<string, string>();
    stateDict.set("$HOME", Deno.env.get("HOME") ?? "~");
    stateDict.set("$CWD", Deno.env.get("CWD") ?? ".");
    let htmlGroups: string[] = [];
    for (const line of configLines) {
        if (line.startsWith("#")) continue;
        if (line.trim().startsWith("set")) {
            const kv = parseVariable(line);
            if (kv[0].length <= 0) continue;
            stateDict.set(kv[0], kv[1]);
        } else if (line.trim().startsWith("bindsym")) {
            const binding = parseKeybinding(line, stateDict);
            if (binding[0].length <= 0) continue;
            htmlGroups.push(bindingToHTML(binding).trim());
        }
    }
    return buildDocument(htmlGroups);
}

async function main() {
    const swaycfg = await swayConfig();
    const doc = await resolveKeyBindings(swaycfg);
    const out = await Deno.makeTempFile({ prefix: "swaykb" });
    await Deno.writeFile(out, new TextEncoder().encode(doc));
    const p = Deno.run({
        cmd: [
            "zenity",
            "--text-info",
            "--width=1024",
            "--height=768",
            "--html",
            "--filename",
            out,
        ],
    });

    const { code } = await p.status();
    console.log(code);
    await Deno.remove(out);
}
main();
