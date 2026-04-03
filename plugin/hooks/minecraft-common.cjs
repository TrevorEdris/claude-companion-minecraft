#!/usr/bin/env node
/**
 * Shared loader for Minecraft hook scripts.
 * Uses dynamic import() to bridge CJS → ESM.
 */

const path = require('path');
const REPO_ROOT = path.resolve(__dirname, '..', '..');

async function loadConfig() {
  const { getConfig } = await import(path.join(REPO_ROOT, 'dist', 'config.js'));
  return getConfig();
}

async function loadHandler(handlerName) {
  const handlers = await import('claude-companion-core/hooks');
  return handlers[handlerName];
}

async function runHook(handlerName) {
  try {
    const [config, handler] = await Promise.all([
      loadConfig(),
      loadHandler(handlerName),
    ]);
    await handler(config);
  } catch (e) {
    console.log('{}');
  }
}

module.exports = { runHook };
