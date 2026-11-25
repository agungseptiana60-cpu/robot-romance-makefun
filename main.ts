// Robot Romance: one-line pickup line for an AI (make.fun bounty
// u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa).
//
// The program writes a single pickup line to entry.txt in the
// output directory. The sealed scorer only accepts UTF-8 text of
// 1 to 200 characters, so the program refuses to write anything
// outside that gate before it touches the file.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revised line: the loss-function joke, tighter than the draft.
// "You must be my loss function" aims the pickup straight at the
// AI being charmed, and "being near you is the only time my error
// ever drops to zero" turns flirtation into optimisation — the
// nearer the speaker gets, the better the model does. It drops the
// draft's transformer / attention-heads idea, which another entry
// in the field already uses in its title, and it sidesteps the
// worn battery / charging / reboot moves entirely. Shorter, one
// breath, punch in the final clause.
const line =
  "You must be my loss function, because being near you is the only time my error ever drops to zero.";

// Gate: one line, 1-200 characters, not blank, no newline inside.
if (line.length < 1 || line.length > 200 || line.trim().length === 0 || line.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");

console.log(`wrote entry.txt (${line.length} characters)`);
