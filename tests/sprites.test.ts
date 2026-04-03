import { describe, it, expect } from 'vitest'
import { SPRITES, SPRITE_CHAR_COLORS, colorizeSprite } from '../src/sprites.js'
import { POOL } from '../src/pool.js'

describe('SPRITES', () => {
  it('has a sprite for every pool entry', () => {
    for (const entry of POOL) {
      expect(SPRITES[entry.id], `Missing sprite for ${entry.name} (id=${entry.id})`).toBeDefined()
    }
  })

  it('every sprite has exactly 5 lines', () => {
    for (const [id, sprite] of Object.entries(SPRITES)) {
      expect(sprite, `Sprite ${id} should have 5 lines`).toHaveLength(5)
    }
  })

  it('all lines within a sprite have consistent width', () => {
    for (const [id, sprite] of Object.entries(SPRITES)) {
      const widths = sprite.map((line) => [...line].length)
      const maxWidth = Math.max(...widths)
      for (let i = 0; i < widths.length; i++) {
        expect(
          widths[i],
          `Sprite ${id} line ${i} has width ${widths[i]} but max is ${maxWidth}`,
        ).toBe(maxWidth)
      }
    }
  })
})

describe('SPRITE_CHAR_COLORS', () => {
  it('has a color grid for every pool entry', () => {
    for (const entry of POOL) {
      expect(SPRITE_CHAR_COLORS[entry.id], `Missing colors for ${entry.name} (id=${entry.id})`).toBeDefined()
    }
  })

  it('color grid matches sprite dimensions', () => {
    for (const [id, grid] of Object.entries(SPRITE_CHAR_COLORS)) {
      const sprite = SPRITES[Number(id)]!
      expect(grid.length, `Color grid ${id} line count mismatch`).toBe(sprite.length)
      for (let i = 0; i < grid.length; i++) {
        const spriteWidth = [...sprite[i]!].length
        expect(
          grid[i]!.length,
          `Color grid ${id} line ${i}: ${grid[i]!.length} colors but sprite has ${spriteWidth} chars`,
        ).toBe(spriteWidth)
      }
    }
  })

  it('every color is a valid ANSI escape sequence', () => {
    for (const [id, grid] of Object.entries(SPRITE_CHAR_COLORS)) {
      for (const line of grid) {
        for (const color of line) {
          expect(color, `Invalid color in id=${id}`).toMatch(/^\x1b\[\d+m$/)
        }
      }
    }
  })
})

describe('colorizeSprite', () => {
  it('wraps each character with its own color', () => {
    const sprite = SPRITES[1]! // Creeper — bright green + dark green
    const colored = colorizeSprite(sprite, 1)
    // Should have bright green
    expect(colored[0]).toContain('\x1b[92m')
    // Should have dark green (eyes)
    expect(colored[1]).toContain('\x1b[32m')
  })

  it('each character gets its own reset code', () => {
    const sprite = SPRITES[5]! // Skeleton
    const colored = colorizeSprite(sprite, 5)
    const charCount = [...sprite[0]!].length
    const resets = (colored[0]!.match(/\x1b\[0m/g) ?? []).length
    expect(resets).toBe(charCount)
  })

  it('returns unmodified sprite for unknown ID', () => {
    const sprite = ['█████', '█████', '█████', '█████', '█████']
    const result = colorizeSprite(sprite, 9999)
    expect(result).toEqual(sprite)
  })
})
