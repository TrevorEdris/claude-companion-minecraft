import { roll, DEFAULT_RARITY_WEIGHTS } from 'claude-companion-core'
import type { HookConfig } from 'claude-companion-core/hooks'
import { POOL } from './pool.js'
import { SPRITES } from './sprites.js'
import { QUIP_POOL } from './quips.js'
import { buildPrompt } from './prompt.js'

const CONFIG_NAME = 'claude-companion-minecraft'
const STATE_FILE = '/tmp/claude-companion-minecraft.json'
const SESSION_TTL_MS = 30 * 60 * 1000
const SHINY_THRESHOLD = 1 / 512

export function getConfig(): HookConfig {
  const companion = roll({
    configName: CONFIG_NAME,
    salt: 'minecraft',
    shinyThreshold: SHINY_THRESHOLD,
    rarityWeights: DEFAULT_RARITY_WEIGHTS,
    pool: POOL,
  })

  const sprite = SPRITES[companion.entry.id] ?? ['⠀⠀⠀', '⠀⠀⠀', '⠀⠀⠀']

  return {
    companionName: companion.entry.name,
    categories: companion.entry.categories,
    renderSprite: () => null,
    stateFileName: 'minecraft-session-shown.json',
    sessionTtlMs: SESSION_TTL_MS,
    quipPool: QUIP_POOL,
    buildPrompt,
    probabilities: {
      sessionStart: 1.0,
      idle: 0.3,
      testResult: 0.8,
      commit: 0.7,
      push: 0.9,
      danger: 1.0,
      stopIdle: 0.2,
    },
    outputMode: 'statusline',
    statuslineStateFile: STATE_FILE,
    statuslineSprite: sprite,
  }
}
