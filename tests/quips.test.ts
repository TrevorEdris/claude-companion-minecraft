import { describe, it, expect } from 'vitest'
import { QUIP_POOL } from '../src/quips.js'

const REQUIRED_CATEGORIES = [
  'session_start',
  'user_prompt',
  'test_pass',
  'test_fail',
  'commit',
  'push',
  'danger',
  'idle',
]

describe('QUIP_POOL', () => {
  it('has entries for all context categories', () => {
    for (const cat of REQUIRED_CATEGORIES) {
      expect(QUIP_POOL[cat], `Missing category: ${cat}`).toBeDefined()
      expect(QUIP_POOL[cat]!.length, `Empty category: ${cat}`).toBeGreaterThan(0)
    }
  })

  it('every entry is a callable function', () => {
    for (const [cat, entries] of Object.entries(QUIP_POOL)) {
      for (let i = 0; i < entries.length; i++) {
        expect(typeof entries[i], `${cat}[${i}] should be a function`).toBe('function')
      }
    }
  })

  it('every function returns a non-empty string', () => {
    for (const [cat, entries] of Object.entries(QUIP_POOL)) {
      for (let i = 0; i < entries.length; i++) {
        const result = entries[i]!('TestMob')
        expect(typeof result, `${cat}[${i}] should return string`).toBe('string')
        expect(result.length, `${cat}[${i}] returned empty string`).toBeGreaterThan(0)
      }
    }
  })

  it('has at least 4 quips per category', () => {
    for (const cat of REQUIRED_CATEGORIES) {
      expect(QUIP_POOL[cat]!.length, `${cat} needs at least 4 quips`).toBeGreaterThanOrEqual(4)
    }
  })
})
