import { describe, it, expect } from 'vitest'
import { POOL } from '../src/pool.js'

describe('POOL', () => {
  it('has 20 entries', () => {
    expect(POOL).toHaveLength(20)
  })

  it('has unique IDs', () => {
    const ids = POOL.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('has valid rarities', () => {
    const valid = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythical']
    for (const entry of POOL) {
      expect(valid).toContain(entry.rarity)
    }
  })

  it('has non-empty categories on every entry', () => {
    for (const entry of POOL) {
      expect(entry.categories.length).toBeGreaterThan(0)
    }
  })

  it('has entries for each rarity tier', () => {
    const rarities = new Set(POOL.map((e) => e.rarity))
    expect(rarities).toContain('common')
    expect(rarities).toContain('uncommon')
    expect(rarities).toContain('rare')
    expect(rarities).toContain('epic')
    expect(rarities).toContain('legendary')
    expect(rarities).toContain('mythical')
  })

  it('has non-empty names', () => {
    for (const entry of POOL) {
      expect(entry.name.length).toBeGreaterThan(0)
    }
  })
})
