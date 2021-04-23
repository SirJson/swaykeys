#!/bin/bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
PROJECT="$(basename "$DIR")"
MODMAIN="$DIR/main.ts"
INSTALL_TARGET="/usr/local/bin/$PROJECT"
PERMS='--allow-run --allow-write --allow-env'

_compile() {
    [[ -f "$PROJECT" ]] && rm -v "$PROJECT"
    deno compile --unstable $PERMS "$MODMAIN"
}

_run() {
    deno run $PERMS "$MODMAIN"
}

_bundle() {
    [[ -f "$PROJECT.bundle.js" ]] && rm -v "$PROJECT.bundle.js"
    deno bundle "$MODMAIN" "$PROJECT.bundle.js"
}

_install() {
    mv -vf "$PROJECT" "$INSTALL_TARGET"
}

_uninstall() {
    rm -v "$INSTALL_TARGET"
}

denomake() {
    local verb="$1"

    printf '\n=== Execute: \033[94;1;4m%s\033[0m ===\n' "$verb"
    case "$verb" in
    run)
        _run
        ;;
    compile)
        _compile
        ;;
    bundle)
        _bundle
        ;;
    install)
        _compile
        _install
        ;;
    uninstall)
        _uninstall
        ;;
    *)
        printf 'Unknown action: %s\n' "$verb" >&2
        exit 1
        ;;
    esac
    printf '\n'
}

denomake "$@"
