import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mkdtempSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

describe('getConfig', () => {
  let tempHome: string

  beforeEach(() => {
    tempHome = mkdtempSync(join(tmpdir(), 'ccm-config-'))
    process.env.HOME = tempHome
  })

  afterEach(() => {
    rmSync(tempHome, { recursive: true, force: true })
    delete process.env.HOME
  })

  it('returns a valid HookConfig', async () => {
    const { getConfig } = await import('../src/config.js')
    const config = getConfig()
    expect(config.companionName).toBeTruthy()
    expect(config.categories.length).toBeGreaterThan(0)
    expect(config.quipPool).toBeDefined()
    expect(config.buildPrompt).toBeTypeOf('function')
  })

  it('uses statusline output mode', async () => {
    const { getConfig } = await import('../src/config.js')
    const config = getConfig()
    expect(config.outputMode).toBe('statusline')
  })

  it('has a 3-line statusline sprite', async () => {
    const { getConfig } = await import('../src/config.js')
    const config = getConfig()
    expect(config.statuslineSprite).toBeDefined()
    expect(config.statuslineSprite).toHaveLength(5)
  })

  it('has a statusline state file path', async () => {
    const { getConfig } = await import('../src/config.js')
    const config = getConfig()
    expect(config.statuslineStateFile).toContain('minecraft')
  })
})
