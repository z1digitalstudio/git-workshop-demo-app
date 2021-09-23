#!/usr/bin/env bash

if [[ "$CI" == "true" ]]; then
  exit 0
fi

dir="$(dirname "$0")"

cp "$dir/pre-commit" ".git/hooks"
