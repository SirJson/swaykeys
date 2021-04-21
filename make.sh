#!/bin/bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
denomake() {
    local verb="$1"
    local project
    project="$(basename "$DIR")"
    printf '\n=== Running: \033[94;1;4m%s\033[0m ===\n' "$verb"
    case "$verb" in
    run)
        deno run --allow-run --allow-write "$DIR/main.ts"
        ;;
    build)
        deno bundle main.ts "$project.bundle.js"
        ;;
    *)
        printf 'Unknown verb: %s\n' "$verb" >&2
        exit 1
        ;;
    esac
    printf '\n'
}

denomake "$@"
