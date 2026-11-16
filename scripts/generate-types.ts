import fs from "node:fs";
import path from "node:path";

const source = fs.readFileSync(path.join(process.cwd(), "prisma", "contract.d.ts"), "utf-8");

const matches = [...source.matchAll(/type unbound_([A-Za-z0-9_]+)/g)];
const modelNames = [...new Set(matches.map((m) => m[1]))];

const output = `// AUTO-GENERATED - DO NOT EDIT
import { Models } from './contract.d';

type Prettify<T> = {
  [K in keyof T as K extends symbol ? never : K]: T[K];
} & {};

${modelNames.map((name) => `export type ${name} = Prettify<Models.unbound_${name}>;`).join("\n")}
`;

fs.writeFileSync(path.join(process.cwd(), "prisma", "types.ts"), output);
