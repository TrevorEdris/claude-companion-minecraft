#!/usr/bin/env node
import { readState, renderStatusLine } from 'claude-companion-core/statusline'

const STATE_FILE = '/tmp/claude-companion-minecraft.json'
const STATE_TTL_MS = 300000 // 5 minutes

const state = readState(STATE_FILE, STATE_TTL_MS)
const output = renderStatusLine(state, { fallback: 'Minecraft Companion' })
process.stdout.write(output + '\n')
