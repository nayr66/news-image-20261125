import { copyFileSync, mkdirSync } from "node:fs";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), `${out}/entry.png`);
