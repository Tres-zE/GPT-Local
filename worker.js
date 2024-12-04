// import {
//   MLCEngineWorkerHandler,
//   MLCEngine,
// } from 'https://esm.run/@mlc-ai/web-llm';

// const engine = new MLCEngine();
// const handler = new MLCEngineWorkerHandler(engine);

// onmessage = (msg) => {
//   handler.onmessage(msg);
// };

import { WebWorkerMLCEngineHandler } from 'https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.46/+esm';

const handler = new WebWorkerMLCEngineHandler();

self.onmessage = (msg) => {
  handler.onmessage(msg);
};
