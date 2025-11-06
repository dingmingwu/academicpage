import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const startAt = Date.now();
let count = 0;
const pageview = defineEventHandler(() => ({
  pageview: count++,
  startAt
}));

export { pageview as default };
//# sourceMappingURL=pageview.mjs.map
