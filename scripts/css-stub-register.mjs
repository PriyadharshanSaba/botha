/**
 * Loader-registration shim. Pass to `tsx --import` so the css-stub-hook
 * is active before the migration script's imports are resolved.
 */

import { register } from "node:module";

register("./css-stub-hook.mjs", import.meta.url);
