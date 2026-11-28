"use strict";

/**
 * Enable HTTP(S) proxy support for Node/undici before OpenClaw initializes.
 * We load undici from OpenClaw's own node_modules path to avoid relying on
 * global module resolution from this shim's location.
 */
(function applyProxyFromEnv() {
  const hasProxyEnv =
    !!process.env.HTTPS_PROXY ||
    !!process.env.HTTP_PROXY ||
    !!process.env.https_proxy ||
    !!process.env.http_proxy;

  if (!hasProxyEnv) {
    return;
  }

  try {
    const path = require("node:path");
    const globalModulesRoot =
      process.env.OPENCLAW_GLOBAL_NODE_MODULES || "/usr/lib/node_modules";
    const undiciPath = path.join(globalModulesRoot, "openclaw", "node_modules", "undici");
    const { EnvHttpProxyAgent, setGlobalDispatcher } = require(undiciPath);
    setGlobalDispatcher(new EnvHttpProxyAgent());
  } catch (_err) {
    // Keep startup resilient if module layout changes in future releases.
  }
})();
