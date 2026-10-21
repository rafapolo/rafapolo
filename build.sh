#!/usr/bin/env bash
set -euo pipefail

rm -rf dist
mkdir -p dist/js dist/img/thumbs

cp img/thumbs/*.webp dist/img/thumbs/
cp img/og.png dist/img/
for f in fonts favicon.ico polo.png rafael-polo-cv.pdf 0xCE8E94C8EDA640B6.pub.txt CNAME robots.txt; do
    [ -e "$f" ] && cp -r "$f" dist/
done

cat js/springy.js js/graph.js js/springyui.js js/portfolio.js \
    | bunx esbuild@0.28.2 --minify --loader=js --log-level=warning > dist/js/app.js
hash8() { { md5 -q "$1" 2>/dev/null || md5sum "$1"; } | cut -c1-8; }
app_v=$(hash8 dist/js/app.js)
bunx esbuild@0.28.2 style.css --minify --outdir=dist --log-level=warning
css_v=$(hash8 dist/style.css)

for f in index.html curriculum.html; do
    bunx html-minifier-terser@7.2.0 \
        --collapse-whitespace \
        --conservative-collapse \
        --remove-comments \
        --minify-css true \
        --minify-js true \
        -o "dist/$f" "$f"
done

perl -0pi -e 's#(\s*<script defer(?:="defer")? src="js/[^"]+"></script>)+#<script defer src="js/app.js?v='"$app_v"'"></script>#' dist/index.html
perl -pi -e 's#href="style\.css(\?v=[^"]*)?"#href="style.css?v='"$css_v"'"#g' dist/index.html dist/curriculum.html
grep -q 'src="js/app.js' dist/index.html
grep -q "style.css?v=$css_v" dist/index.html
grep -q "style.css?v=$css_v" dist/curriculum.html
