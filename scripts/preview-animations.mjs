#!/usr/bin/env node
/**
 * Preview all Minecraft companion animations in a continuous loop.
 * Run: node scripts/preview-animations.mjs
 * Stop: Ctrl+C
 */

import { POOL } from '../dist/pool.js'
import { SPRITES } from '../dist/sprites.js'
import { invertSprite, defaultAnimation, renderStatusLine } from 'claude-companion-core/statusline'

const FRAME_MS = 300
const COMPANION_DISPLAY_MS = 3000
const LINES = 5 // 3 sprite + 1 separator + 1 info

function clearLines(n) {
  for (let i = 0; i < n; i++) {
    process.stdout.write('\x1b[1A\x1b[2K')
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function previewCompanion(entry) {
  const sprite = SPRITES[entry.id]
  if (!sprite) return

  const animation = defaultAnimation(sprite)
  const startTime = Date.now()

  // Print header
  process.stdout.write(`\x1b[36m[${entry.rarity.toUpperCase()}]\x1b[0m ${entry.name} (${entry.categories.join(', ')})\n`)

  // Print initial frame
  const state = {
    companionName: entry.name,
    quip: `${entry.name} is showing off`,
    category: 'idle',
    timestamp: startTime,
    shiny: false,
    rarity: entry.rarity,
    animation,
    idleQuip: `${entry.name} is just vibing`,
  }

  const initialOutput = renderStatusLine(state, { now: startTime })
  process.stdout.write(initialOutput + '\n')

  // Animate for COMPANION_DISPLAY_MS
  while (Date.now() - startTime < COMPANION_DISPLAY_MS) {
    await sleep(FRAME_MS)
    // Clear the 3 sprite lines
    clearLines(3)
    const output = renderStatusLine(state, { now: Date.now() })
    process.stdout.write(output + '\n')
  }

  // Clear all lines (header + 3 sprite lines)
  clearLines(4)
}

async function main() {
  process.stdout.write('\x1b[2J\x1b[H') // clear screen
  process.stdout.write('\x1b[1mMinecraft Companion Animation Preview\x1b[0m\n')
  process.stdout.write('Press Ctrl+C to exit\n\n')

  while (true) {
    for (const entry of POOL) {
      await previewCompanion(entry)
    }
  }
}

process.on('SIGINT', () => {
  process.stdout.write('\n\x1b[0m')
  process.exit(0)
})

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
