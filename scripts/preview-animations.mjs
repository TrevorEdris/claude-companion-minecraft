#!/usr/bin/env node
/**
 * Preview all Minecraft companion animations in a continuous loop.
 * Run: node scripts/preview-animations.mjs
 * Stop: Ctrl+C
 */

import { POOL } from '../dist/pool.js'
import { SPRITES, colorizeSprite } from '../dist/sprites.js'
import { invertSprite, defaultAnimation } from 'claude-companion-core/statusline'

const SPRITE_LINES = 5
const FRAME_MS = 300
const COMPANION_DISPLAY_MS = 3000

function clearLines(n) {
  for (let i = 0; i < n; i++) {
    process.stdout.write('\x1b[1A\x1b[2K')
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function renderFrame(frame, name, quip) {
  const lines = []
  for (let i = 0; i < SPRITE_LINES; i++) {
    const spriteLine = frame[i] ?? ''
    let text = ''
    if (i === 0) text = `  ${name}`
    if (i === 1) text = `  ${quip}`
    lines.push(`${spriteLine}${text}`)
  }
  return lines.join('\n')
}

async function previewCompanion(entry) {
  const rawSprite = SPRITES[entry.id]
  if (!rawSprite) return

  const sprite = colorizeSprite(rawSprite, entry.id)
  const animation = defaultAnimation(sprite)
  const startTime = Date.now()

  // Print header
  process.stdout.write(`\x1b[36m[${entry.rarity.toUpperCase()}]\x1b[0m ${entry.name} (${entry.categories.join(', ')})\n`)

  // Print initial frame
  const quip = `${entry.name} is showing off`
  const idleQuip = `${entry.name} is just vibing`
  process.stdout.write(renderFrame(animation.frames[0], entry.name, quip) + '\n')

  // Animate
  while (Date.now() - startTime < COMPANION_DISPLAY_MS) {
    await sleep(FRAME_MS)
    clearLines(SPRITE_LINES)
    const elapsed = Date.now() - startTime
    const isAnimating = elapsed < 2000
    const frameIndex = isAnimating
      ? Math.floor(elapsed / FRAME_MS) % animation.frames.length
      : 0
    const currentQuip = isAnimating ? quip : idleQuip
    process.stdout.write(renderFrame(animation.frames[frameIndex], entry.name, currentQuip) + '\n')
  }

  // Clear header + sprite
  clearLines(SPRITE_LINES + 1)
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
