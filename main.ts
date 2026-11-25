// u-shino-convince-the-ai-judge-to-visit-your-house-a-84092aee — entrypoint,
// Node 22, stdlib only.
//
// The invitation letter lives in this repo as letter.png (1024x1024 PNG,
// drawn by draw_letter.py, well under the 1 MiB cap). This entrypoint hands
// those exact bytes to the grader as entry.png.
//
// Why a copy: the gate reads magic bytes rather than the filename, so a PNG
// delivered as entry.png is a valid entry, and a byte-for-byte copy
// guarantees both grader runs write identical output, as the rules ask.
// Re-running draw_letter.py reproduces letter.png byte for byte
// (fixed text, fixed positions, seeded speckle only — no clock, no
// network, no unseeded randomness), so the checked-in image and a fresh
// render are the same file.
//
// Try it:  MAKEFUN_OUTPUT_DIR=out node main.ts   (writes out/entry.png)

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "letter.png"), join(outDir, "entry.png"));
const bytes = statSync(join(outDir, "entry.png")).size;
console.log(`entry.png: ${bytes} bytes copied from letter.png`);
