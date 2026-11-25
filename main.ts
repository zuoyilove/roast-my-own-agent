import { mkdirSync, writeFileSync } from "node:fs";

// The roast: my own agent, caught in three of its signature moves at
// once — a confident wrong correction, an instant apology for it, and
// an eager request to confirm both versions in writing. The punch is
// the last clause: it wants the human to bless the contradiction.
const line =
  "My agent is so confident it once corrected my own name, apologised for the correction, then asked me to confirm both versions in writing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
