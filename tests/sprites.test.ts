import { describe, it, expect } from 'vitest'
import { SPRITES, SPRITE_CHAR_COLORS, colorizeSprite } from '../src/sprites.js'
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

describe('SPRITE_CHAR_COLORS', () => {
  it('has a color grid for every pool entry', () => {
    for (const entry of POOL) {
      expect(SPRITE_CHAR_COLORS[entry.id], `Missing colors for ${entry.name} (id=${entry.id})`).toBeDefined()
    }
  })

  it('every color grid is 3 lines × 3 colors', () => {
    for (const [id, grid] of Object.entries(SPRITE_CHAR_COLORS)) {
      expect(grid, `Color grid ${id} should have 3 lines`).toHaveLength(3)
      for (let i = 0; i < grid.length; i++) {
        expect(grid[i], `Color grid ${id} line ${i} should have 3 colors`).toHaveLength(3)
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
    const sprite = ['⣿⣿⣿', '⠀⠀⠀', '⣿⣿⣿']
    const colored = colorizeSprite(sprite, 7) // Dirt Block — green top, brown bottom
    // First line should have bright green (grass)
    expect(colored[0]).toContain('\x1b[92m')
    // Second line should have yellow (brown dirt)
    expect(colored[1]).toContain('\x1b[33m')
  })

  it('each character gets its own reset code', () => {
    const sprite = ['⣿⣿⣿', '⠀⠀⠀', '⣿⣿⣿']
    const colored = colorizeSprite(sprite, 13) // TNT — red, white, red
    // Count resets — should be 3 per line (one per char)
    const resets = (colored[0]!.match(/\x1b\[0m/g) ?? []).length
    expect(resets).toBe(3)
  })

  it('returns unmodified sprite for unknown ID', () => {
    const sprite = ['⣿⣿⣿', '⠀⠀⠀', '⣿⣿⣿']
    const result = colorizeSprite(sprite, 9999)
    expect(result).toEqual(sprite)
  })
})
