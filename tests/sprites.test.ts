import { describe, it, expect } from 'vitest'
import { SPRITES } from '../src/sprites.js'
import { POOL } from '../src/pool.js'

describe('SPRITES', () => {
  it('has a sprite for every pool entry', () => {
    for (const entry of POOL) {
      expect(SPRITES[entry.id], `Missing sprite for ${entry.name} (id=${entry.id})`).toBeDefined()
    }
  })

  it('every sprite has exactly 3 lines', () => {
    for (const [id, sprite] of Object.entries(SPRITES)) {
      expect(sprite, `Sprite ${id} should have 3 lines`).toHaveLength(3)
    }
  })

  it('every line is exactly 3 characters', () => {
    for (const [id, sprite] of Object.entries(SPRITES)) {
      for (let i = 0; i < sprite.length; i++) {
        expect(
          [...sprite[i]!].length,
          `Sprite ${id} line ${i} should be 3 chars, got ${[...sprite[i]!].length}: "${sprite[i]}"`,
        ).toBe(3)
      }
    }
  })
})
