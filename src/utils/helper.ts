import { createRequire } from "module";

export const useRequire = createRequire(import.meta.url);
