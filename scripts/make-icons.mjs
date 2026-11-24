// Generates favicon, touch icons, manifest icons and the social share image.
// Run: node scripts/make-icons.mjs   (fonts in scripts/fonts are converted from @fontsource files)
import { Resvg } from "@resvg/resvg-js";
import pngToIco from "png-to-ico";
import { writeFileSync } from "node:fs";

const fonts = ["scripts/fonts/BigShoulders-900.ttf", "scripts/fonts/InstrumentSerif-Italic.ttf", "scripts/fonts/DMMono-500.ttf"];
const BLUE = "#2b3dff", PAPER = "#ecebe6", INK = "#0e0e0e";

const mark = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
<rect width="64" height="64" rx="14" fill="${BLUE}"/>
<g fill="none" stroke="${PAPER}" stroke-linejoin="miter" stroke-miterlimit="4">
<path d="M9 17 L18.5 49 L28 17" stroke-width="8"/>
<path d="M35 49 V17 L44 37 L53 17 V49" stroke-width="7"/></g></svg>`;

writeFileSync("public/favicon.svg", mark(64));

const png = (svg, w, opts = {}) =>
  new Resvg(svg, { fitTo: { mode: "width", value: w }, font: { fontFiles: fonts, loadSystemFonts: false, defaultFontFamily: "DM Mono" }, ...opts }).render().asPng();

const p16 = png(mark(64), 16), p32 = png(mark(64), 32), p48 = png(mark(64), 48);
writeFileSync("public/favicon.ico", await pngToIco([p16, p32, p48]));
writeFileSync("public/icon-192.png", png(mark(64), 192));
writeFileSync("public/icon-512.png", png(mark(64), 512));
// Apple touch icon: full bleed (iOS rounds it), no transparent corners.
const touch = mark(64).replace('rx="14"', 'rx="0"');
writeFileSync("public/apple-touch-icon.png", png(touch, 180));

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="${PAPER}"/>
<text x="60" y="318" font-family="Big Shoulders Display" font-weight="900" font-size="300" fill="${INK}" textLength="640" lengthAdjust="spacingAndGlyphs">VANSH</text>
<text x="60" y="560" font-family="Big Shoulders Display" font-weight="900" font-size="300" fill="none" stroke="${INK}" stroke-width="3" textLength="640" lengthAdjust="spacingAndGlyphs">MEHTA</text>
<circle cx="1010" cy="150" r="92" fill="${BLUE}"/>
<text x="1010" y="140" text-anchor="middle" font-family="DM Mono" font-size="17" fill="${PAPER}">backend</text>
<text x="1010" y="162" text-anchor="middle" font-family="DM Mono" font-size="17" fill="${PAPER}">engineer</text>
<text x="1010" y="184" text-anchor="middle" font-family="DM Mono" font-size="17" fill="${PAPER}">at Jio</text>
<text x="740" y="330" font-family="Instrument Serif" font-style="italic" font-size="50" fill="${INK}">Systems for 100K+</text>
<text x="740" y="388" font-family="Instrument Serif" font-style="italic" font-size="50" fill="${INK}">enterprise users.</text>
<text x="740" y="446" font-family="Instrument Serif" font-style="italic" font-size="50" fill="${INK}">Built to stay up.</text>
<rect x="740" y="490" width="400" height="2" fill="${INK}"/>
<text x="740" y="525" font-family="DM Mono" font-size="22" fill="${INK}">-40% failed orders  -60% incident time</text>
<text x="740" y="560" font-family="DM Mono" font-size="22" fill="${BLUE}">vanshkmehta.dev</text>
</svg>`;
writeFileSync("public/og.png", png(og, 1200));
console.log("icons written");
