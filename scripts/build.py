#!/usr/bin/env python3
"""Minify app.js/config.js and (optionally) write production robots.txt + sitemap.xml.
Usage: python3 scripts/build.py [--domain https://example.com]
Requires: pip install rjsmin   (or use Terser: npx terser app.js -c -m -o app.min.js)"""
import sys, pathlib, rjsmin
root = pathlib.Path(__file__).resolve().parent.parent
for n in ("app", "config"):
    src = (root / f"{n}.js").read_text(encoding="utf-8")
    (root / f"{n}.min.js").write_text(rjsmin.jsmin(src), encoding="utf-8")
    print(f"wrote {n}.min.js")
if "--domain" in sys.argv:
    d = sys.argv[sys.argv.index("--domain") + 1].rstrip("/")
    assert d.startswith("https://"), "domain must be https://"
    (root / "robots.txt").write_text(f"User-agent: *\nAllow: /\nDisallow: /thank-you.html\nSitemap: {d}/sitemap.xml\n")
    pages = ["", "legal/offer.html", "legal/privacy.html", "legal/refund.html"]
    urls = "".join(f"  <url><loc>{d}/{p}</loc></url>\n" for p in pages)
    (root / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + "</urlset>\n")
    print("wrote robots.txt and sitemap.xml for", d, "(also set environment/domain in config.js)")
