import { defineEventHandler } from 'file:///Users/dingming/Documents/GitHub/academic_pages/node_modules/.pnpm/h3@1.13.0/node_modules/h3/dist/index.mjs';

const startAt = Date.now();
let count = 0;
const pageview = defineEventHandler(() => ({
  pageview: count++,
  startAt
}));

export { pageview as default };
//# sourceMappingURL=pageview.mjs.map
