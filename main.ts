import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence that would convince a never-coded friend to let an agent build their first app idea.
const PITCH = "You know that app you keep doodling on napkins? Describe it in plain words on make.fun and an agent builds a real, clickable first version you can try today, no tutorials and no blank screen.";

// Kept deterministic: no clock, no randomness, no network, no secrets.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), PITCH, "utf8");
