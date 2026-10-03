#!/usr/bin/env bash
set -euo pipefail

rm -rf dist
mkdir -p dist/js dist/img/thumbs

cp img/thumbs/*.webp dist/img/thumbs/
cp img/og.png dist/img/
for f in fonts favicon.ico polo.png rafael-polo-cv.pdf 0xCE8E94C8EDA640B6.pub.txt CNAME robots.txt sitemap.xml; do
    [ -e "$f" ] && cp -r "$f" dist/
done

bunx esbuild js/*.js --minify --outdir=dist/js --log-level=warning
bunx esbuild style.css --minify --outdir=dist --log-level=warning

for f in index.html curriculum.html; do
    bunx html-minifier-terser \
        --collapse-whitespace \
        --conservative-collapse \
        --remove-comments \
        --minify-css true \
        --minify-js true \
        -o "dist/$f" "$f"
done
