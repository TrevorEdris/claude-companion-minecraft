import type { QuipPool } from 'claude-companion-core'

export const QUIP_POOL: QuipPool = {
  session_start: [
    (name) => `${name} spawns into the session`,
    (name) => `${name} joined the world`,
    (name) => `${name} is ready to mine some code`,
    (name) => `A wild ${name} appears at dawn`,
    (name) => `${name} loads in... chunk by chunk`,
  ],
  user_prompt: [
    (name) => `${name} watches you craft a prompt`,
    (name) => `${name} perks up`,
    (name) => `${name} tilts head curiously`,
    (name) => `${name} inches closer to the terminal`,
  ],
  test_pass: [
    (name) => `${name} found diamonds in that test suite`,
    (name) => `All green — ${name} does the pig dance`,
    (name) => `${name} enchants the results with Efficiency V`,
    (name) => `Achievement unlocked, says ${name}`,
    (name) => `${name} places a torch in celebration`,
  ],
  test_fail: [
    (name) => `${name} fell into lava`,
    (name) => `Ssssomething went wrong, hisses ${name}`,
    (name) => `${name} took explosion damage from that test`,
    (name) => `${name} respawns and tries again`,
    (name) => `That test was a creeper in disguise`,
  ],
  commit: [
    (name) => `${name} stores the loot in an ender chest`,
    (name) => `Saved to world, says ${name}`,
    (name) => `${name} places that commit in an item frame`,
    (name) => `${name} nods approvingly at the diff`,
  ],
  push: [
    (name) => `${name} launches it through a nether portal`,
    (name) => `${name} fires it from a dispenser`,
    (name) => `Off to the server, says ${name}`,
    (name) => `${name} watches it fly like a trident`,
  ],
  danger: [
    (name) => `${name} hears a fuse ignite`,
    (name) => `${name} backs away from the TNT`,
    (name) => `${name} hides behind bedrock`,
    (name) => `That's a bold move, thinks ${name}`,
  ],
  idle: [
    (name) => `${name} is just vibing in peaceful mode`,
    (name) => `${name} stares at the void`,
    (name) => `${name} punches a tree out of boredom`,
    (name) => `${name} digs straight down (don't worry)`,
    (name) => `${name} is AFK`,
    (name) => `${name} places a crafting table and waits`,
  ],
}
