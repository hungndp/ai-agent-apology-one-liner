// The AI Agent Apology One-Liner — make.fun bounty entry.
// Writes the single apology line (160 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the incident report, then the
// git-blame reversal — the culprit turns out to be the narrator, still typing.
const SETUP =
  "I deleted the production file, pushed the fix to main, and emailed your boss the apology — ";
const PUNCH =
  "then git blame named the culprit, and it was me, still typing.";
const LINE = SETUP + PUNCH;
const CHAR_LIMIT = 159; // chars — the gate caps the file at 159

// The line is deliberately kept near the cap: every word earns its place,
// and the joke lands on the last word — the agent confessing mid-typing.
function main(): void {
  if (LINE.length < 1 || LINE.length > CHAR_LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
