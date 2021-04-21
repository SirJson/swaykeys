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
	/**
	 * Minified by jsDelivr using clean-css v4.2.3.
	 * Original file: /npm/holiday.css@0.9.5/dist/holiday.css
	 *
	 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
	 */
	/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */
	*,::after,::before{box-sizing:border-box}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}abbr{cursor:help}[type=button],[type=color],[type=file],[type=range],[type=reset],[type=submit],button,label>[type=checkbox]:enabled,label>[type=radio]:enabled,summary{cursor:pointer}[readonly]{cursor:default}:disabled,[type=checkbox][id]:disabled+[for],[type=radio][id]:disabled+[for]{cursor:not-allowed}:root{--max-body-width:48rem}html{height:100%;line-height:1.4}h1,h2,h3{line-height:1.15}body{display:flex;flex-direction:column;width:calc(100% - 1rem);max-width:var(--max-body-width);min-height:100%;margin:0 auto;overflow-wrap:break-word}main{flex-grow:1}img{max-width:100%;max-height:100vh}table{display:block;overflow-x:auto}pre{padding:1rem;margin-top:1rem!important;margin-bottom:1rem!important;overflow-x:auto;line-height:1.15}code{padding:.25rem}pre code{padding:unset}kbd{display:inline-flex;align-items:center;justify-content:center;min-width:1.5rem;max-width:calc(100% - .1rem * 2);min-height:1.5rem;padding:0 .25rem;margin:0 .1rem;overflow:hidden}kbd kbd{min-width:unset;min-height:unset;padding:0;margin:0}kbd kbd:not(:first-child){padding-left:.25rem}kbd kbd:not(:last-child){padding-right:.25rem}iframe{width:100%;border:none}dialog{max-height:calc(100% - 1rem);overflow-y:auto;border:none}audio,embed,object,video{width:100%}[type=range],meter,progress{display:block;width:100%;height:2.25rem}[type=color]{height:2.25rem;vertical-align:top}[type=button],[type=reset],[type=submit],button,details,td,th{padding:.5rem}[type=email],[type=hidden],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=url],input:not([type]){display:block;width:100%;height:2.25rem;padding:.5rem}[type=file]{display:block;width:100%;height:2.25rem;padding-top:.35rem}[type=date],[type=datetime-local],[type=month],[type=time],[type=week]{display:block;width:100%;height:2.25rem;padding:.4rem .5rem}output{display:block;width:100%}textarea{display:block;width:100%;min-height:8em;padding:.5rem}select{display:block;width:100%;min-height:2.25rem;padding:.45rem .5rem}summary{padding:.5rem;margin:-.5rem}[type=image]{vertical-align:bottom}fieldset{padding:.75rem}label>[type=color]{margin-left:.25rem}label{display:flex;flex-wrap:wrap;align-items:center;width:100%;margin-top:1rem}legend+label{margin-top:0}[type=checkbox]+label,[type=radio]+label{display:inline-flex;width:unset;vertical-align:text-bottom}blockquote>p:first-child,fieldset>label:first-child{margin-top:0}label>[type=checkbox],label>[type=radio]{min-height:1rem;margin-right:.25rem}blockquote{padding:1rem 2rem;margin-right:0;margin-left:0}blockquote>p:last-child{margin-bottom:0}footer{margin-top:1rem}body>header,figure>figcaption{text-align:center}body>footer{padding-bottom:1rem;text-align:center}figure{margin-right:0;margin-left:0;text-align:center}figure>*{text-align:initial}dt{font-weight:700}dd{margin-bottom:1rem}li{margin-top:.5rem;margin-bottom:.5rem}picture{position:relative;left:calc(-50vw + 50%);display:block;width:100vw;text-align:center}.hljs{padding:1rem!important;margin:-1rem}@media (max-width:50rem){table{width:calc(100% + 1rem);margin-left:-.5rem}video{width:calc(100% + 1rem);max-height:100vh;margin-left:-.5rem}pre{width:calc(100% + 1rem);padding-right:.5rem!important;padding-left:.5rem!important;margin-left:-.5rem!important}.hljs{padding-right:.5rem!important;padding-left:.5rem!important;margin:-1rem -.5rem}}@media (hover:hover){body{overflow-x:hidden}nav{display:flex;background-color:var(--background-color);border-bottom:var(--border-width) solid var(--border-color)}body>nav{position:relative;left:calc(-50vw + 50%);width:100vw}nav ul{padding-left:0}body>nav>ul{width:calc(var(--max-body-width) + 2rem);padding-right:.5rem;padding-left:.5rem;margin:.5rem auto}nav ul li{position:relative;display:inline-block}nav>ul>li{padding:.5rem;margin:0}nav ul li a{text-decoration:none;white-space:nowrap}nav ul li ul{position:absolute;left:-9999px;z-index:1;min-width:calc(100% + var(--border-width) * 2);padding:.25rem .5rem;margin-top:.5rem;margin-left:calc(-.5rem - var(--border-width));background-color:var(--background-color);border:var(--border-width) solid var(--border-color);border-radius:var(--border-radius)}nav ul li ul li{width:100%}nav ul li ul li ul{min-width:calc(100% + 1rem + var(--border-width) * 2);margin-top:.75rem}nav :focus~ul,nav :focus~ul ul,nav ul li:hover ul,nav ul ul:focus-within{left:initial}nav li>:not(ul):not(a):not(:only-child){cursor:default}nav li>:not(ul):not(:only-child)::after{content:" ▾"}}@media not all and (hover:hover){nav{position:relative;left:calc(-50vw + 50%);width:100vw;padding-top:2rem;background-image:url('data:image/svg+xml;utf8,<svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="%23363636" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>');background-repeat:no-repeat;background-position:top;border-bottom:var(--border-width) solid var(--border-color)}nav>*{display:none}nav:hover>ul{display:inherit}nav:hover>:not(ul){display:unset}@media (prefers-color-scheme:dark){nav{background-image:url('data:image/svg+xml;utf8,<svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="%23fff" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>')}}}:root{color-scheme:light dark;--border-color:#dbdbdb;--border-hover-color:#b5b5b5;--background-color:#fff;--highlighted-background-color:#f5f5f5;--text-color:#363636;--danger-color:#f14668;--danger-text-color:#fff;--danger-hover-color:#f03a5f;--success-color:#48c774;--success-text-color:#fff;--success-hover-color:#3ec46d;--danger-text-background-color:#fde0e6;--success-text-background-color:#effaf3;--border-radius:0.25rem;--border-width:1px;--code-text-color:#f14668;--code-background-color:#f5f5f5;--link-color:#3273dc;--link-visited-color:#b86bff;--link-hover-color:#363636;--link-active-color:#363636}@media (prefers-color-scheme:dark){:root{--border-color:#5f6267;--border-hover-color:#bcbebd;--background-color:#202124;--highlighted-background-color:#292b2e;--text-color:#fff;--danger-color:#770018;--danger-text-color:#fff;--danger-hover-color:#6b0015;--success-color:#006624;--success-text-color:#fff;--success-hover-color:#006122;--danger-text-background-color:#770018;--success-text-background-color:#006624;--code-text-color:#f1a0b0;--code-background-color:#292b2e;--link-color:#90b3ed;--link-visited-color:#cb93ff;--link-hover-color:#fff;--link-active-color:#fff}input::-webkit-calendar-picker-indicator{filter:invert()}}input{border-radius:var(--border-radius)}body{color:var(--text-color);background-color:var(--background-color)}pre{background-color:var(--code-background-color);border-radius:0!important}code{color:var(--code-text-color);background-color:var(--code-background-color)}pre code{background-color:inherit}a,a code{color:var(--link-color);text-decoration:none}a:visited,a:visited code{color:var(--link-visited-color)}a:hover,a:hover code{color:var(--link-hover-color)}a:active,a:active code{color:var(--link-active-color)}button,dialog,select,textarea{color:var(--text-color);background-color:var(--background-color);border:var(--border-width) solid var(--border-color);border-radius:var(--border-radius)}details,fieldset{border:var(--border-width) solid var(--border-color);border-radius:var(--border-radius)}summary{margin:calc(-.5rem - var(--border-width));border:var(--border-width) solid transparent;border-radius:var(--border-radius)}[type=button],[type=color],[type=date],[type=datetime-local],[type=email],[type=hidden],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],input:not([type]){color:var(--text-color);background-color:var(--background-color);border:var(--border-width) solid var(--border-color)}[type=reset]{color:var(--danger-text-color);background-color:var(--danger-color);border:var(--border-width) solid transparent}[type=submit],button:not([type]){color:var(--success-text-color);background-color:var(--success-color);border:var(--border-width) solid transparent}[type=date]:disabled,[type=datetime-local]:disabled,[type=email]:disabled,[type=hidden]:disabled,[type=month]:disabled,[type=number]:disabled,[type=password]:disabled,[type=search]:disabled,[type=tel]:disabled,[type=text]:disabled,[type=time]:disabled,[type=url]:disabled,[type=week]:disabled,input:not([type]):disabled,select:disabled,textarea:disabled{background-color:var(--highlighted-background-color)}[type=date]:enabled,[type=datetime-local]:enabled,[type=month]:enabled,[type=time]:enabled,[type=week]:enabled,select:enabled{background-color:var(--background-color)}[type=button]:focus,[type=color]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=email]:focus,[type=hidden]:focus,[type=image]:focus,[type=month]:focus,[type=number]:focus,[type=password]:focus,[type=reset]:focus,[type=search]:focus,[type=submit]:focus,[type=tel]:focus,[type=text]:focus,[type=time]:focus,[type=url]:focus,[type=week]:focus,button:focus,button:not([type]):focus,input:not([type]):focus,select:focus,summary:focus,textarea:focus{border-color:var(--border-hover-color);outline:0;box-shadow:0 0 .2rem .01rem var(--border-hover-color)}[type=image]:enabled:hover{filter:brightness(95%)}[type=button]:enabled:hover,[type=color]:enabled:hover,[type=date]:enabled:hover,[type=datetime-local]:enabled:hover,[type=email]:enabled:hover,[type=hidden]:enabled:hover,[type=month]:enabled:hover,[type=number]:enabled:hover,[type=password]:enabled:hover,[type=range]:enabled:hover,[type=search]:enabled:hover,[type=tel]:enabled:hover,[type=text]:enabled:hover,[type=time]:enabled:hover,[type=url]:enabled:hover,[type=week]:enabled:hover,button:enabled:hover,input:not([type]):enabled:hover,select:enabled:hover,summary:hover,textarea:enabled:hover{border-color:var(--border-hover-color)}[type=reset]:enabled:hover{background-color:var(--danger-hover-color);border-color:transparent}[type=submit]:enabled:hover,button:not([type]):enabled:hover{background-color:var(--success-hover-color);border-color:transparent}table{border-collapse:collapse}caption{font-weight:700}thead{border-bottom:calc(var(--border-width) * 2) solid var(--border-color)}tfoot{border-top:calc(var(--border-width) * 2) solid var(--border-color)}tbody>tr:not(:first-child),tfoot>tr:not(:first-child),thead>tr:not(:first-child){border-top:var(--border-width) solid var(--border-color)}tbody>tr:nth-child(even),tfoot>tr:nth-child(even),thead>tr:nth-child(even){background-color:var(--highlighted-background-color)}kbd{background-color:var(--highlighted-background-color);border:var(--border-width) solid var(--border-hover-color);border-radius:var(--border-radius);box-shadow:inset 0 0 0 .2rem var(--background-color)}kbd kbd{border:unset;border-radius:0;box-shadow:inset 0 -.2rem 0 0 var(--background-color),inset 0 .2rem 0 0 var(--background-color)}[open] summary{margin-bottom:.5rem}del{background-color:var(--danger-text-background-color)}ins{text-decoration:none;background-color:var(--success-text-background-color)}blockquote{background-color:var(--highlighted-background-color);border-left:.5rem solid var(--border-color)}body>footer{padding-top:1rem;border-top:var(--border-width) solid var(--border-color)}hr{border-color:var(--border-color);border-style:solid;border-width:var(--border-width) 0 0}:disabled,[type=checkbox][id]:disabled+[for],[type=radio][id]:disabled+[for]{opacity:.5}:invalid:not(form){border-color:var(--danger-color);border-style:solid;border-width:var(--border-width)}:disabled :disabled{opacity:unset}:invalid:not([type=checkbox]):focus{border-color:var(--danger-hover-color);outline:0;box-shadow:0 0 .2rem .05rem var(--danger-hover-color)}:invalid:not([type=checkbox]):not(:focus){box-shadow:none}:invalid:not(form):enabled:hover{border-color:var(--danger-hover-color)}
	/*# sourceMappingURL=/sm/c318f1692696973a35cd394b397e63961a4f9dd9f93d36c20848fb1f79a70a94.map */
	</style>
	<style>
	  :root {
		--max-body-width: 100%;
		--background-color: #13212A;
		--sidewidth: 2rem;
		--text-color: #FFF9EC;
		--text-color-muted: #AAAFAC;
		--color1: #FE7F2D;
		--color2: #B33F62;
		--color3: #619B8A;
		--roweven: #13212A;
		--rowodd: #192C38;
		--rowline: #242A2E;
		--alt: #B79076;
	  }

	  body {
		padding: 0;

	  }

	  .bindingContainer {
		display: grid;
		grid-template-columns: 2fr 1fr 2fr;
		grid-template-rows: auto;
		row-gap: 8px;
		align-items: stretch;
		justify-content: stretch;
		line-height: 20px;
		background: var(--roweven);
	  }

	  .bindingContainer>div:nth-child(6n + 1),
	  .bindingContainer>div:nth-child(6n + 2),
	  .bindingContainer>div:nth-child(6n + 3) {
		background: var(--rowodd);
		border-bottom: #242A2E solid 1px;
		border-top: #242A2E solid 1px;
	  }


	  .cmd {
		font-style: italic;
		color: var(--text-color-muted);
	  }

	  .binding {
		padding-left: var(--sidewidth);
		font-weight: 600;
	   color: var(--color2);
	  }

	  .args {
		font-family: monospace;
		padding-right: var(--sidewidth);
		color: var(--color1);
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

function bindingToHTML(binding: string[]): string {
    return html`
	<div class='binding'>${binding[0]}</div>
	<div class='cmd'>${binding[1]}</div>
	<div class='args'>${binding[2]}</div>
	`;
}

function buildHTMLBody(htmlGroups: string[]): string {
    return html`
  <body>
  <h3>Sway key bindings</h3>
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
    const regex =
        /^(?<keyword>bindsym)\s+(?<binding>[$\w+]+)\s+(?<cmd>exec|focus|move|split|workspace\w*?)\s+(?<argument>[\w'-/\\$\s]+)[;]?.*$/mgui;
    const varPattern = /\$\w+/gui;
    const varsNeeded = [...line.matchAll(varPattern)];
    let resolved: string = line;
    for (let v of varsNeeded) {
        resolved = resolved.replace(v[0], variables.get(v[0]) ?? "?");
    }
    let m;
    while ((m = regex.exec(resolved)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        if (!m.groups) continue;

        return [
            m.groups["binding"].replace("Mod4", "Super").replace("Mod1", "Alt"),
            m.groups["cmd"],
            m.groups["argument"],
        ];
    }
    return ["", "", ""];
}

function parseVariable(line: string): [string, string] {
    const regex =
        /^(?<keyword>set)\s+(?<key>[$]\w+)\s(?<value>[\w'-/\\$\s]+)$/mgui;
    let m;
    while ((m = regex.exec(line)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        if (!m.groups) continue;
        return [m.groups["key"], m.groups["value"]];
    }
    return ["", ""];
}

async function resolveKeyBindings(configLines: string[]): Promise<string> {
    let stateDict = new Map<string, string>();
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