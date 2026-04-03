#!/usr/bin/env node
/**
 * Minecraft companion statusline script.
 * Reads state file and renders 5-line animated sprite display.
 * Handles variable-height sprites (core's renderStatusLine assumes 3 lines).
 */

import { readState } from 'claude-companion-core/statusline'

const STATE_FILE = '/tmp/claude-companion-minecraft.json'
const STATE_TTL_MS = 300000 // 5 minutes

const state = readState(STATE_FILE, STATE_TTL_MS)

if (!state) {
  process.stdout.write('Minecraft Companion\n\n\n\n\n')
  process.exit(0)
}

const now = Date.now()
const elapsed = now - state.timestamp
const { animation } = state

// Select frame
let frame
if (animation.durationMs > 0 && elapsed < animation.durationMs && animation.frames.length > 1) {
  const frameIndex = Math.floor(elapsed / animation.intervalMs) % animation.frames.length
  frame = animation.frames[frameIndex] ?? animation.frames[0]
} else {
  frame = animation.frames[0]
}

// Select quip
const quip = (animation.durationMs > 0 && elapsed < animation.durationMs)
  ? state.quip
  : (state.idleQuip ?? '')

// Render: sprite left, name+quip right, aligned to first two lines
const lines = frame ?? []
for (let i = 0; i < 5; i++) {
  const spriteLine = lines[i] ?? ''
  let text = ''
  if (i === 0) text = `  ${state.companionName}`
  if (i === 1) text = `  ${quip}`
  process.stdout.write(`${spriteLine}${text}\n`)
}
