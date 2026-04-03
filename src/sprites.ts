// Minecraft mob face sprites using mixed Unicode characters.
// 5 lines tall, variable width. Based on canonical 8x8 face textures.
// Each sprite is JUST the face — the most recognizable part of each mob.

const RS = '\x1b[0m' // reset

// Color palette
const G = '\x1b[32m'   // green
const BG = '\x1b[92m'  // bright green
const RD = '\x1b[31m'  // red
const BR = '\x1b[91m'  // bright red
const Y = '\x1b[33m'   // yellow (brown)
const BY = '\x1b[93m'  // bright yellow
const BL = '\x1b[34m'  // blue
const M = '\x1b[35m'   // magenta
const BM = '\x1b[95m'  // bright magenta (pink)
const C = '\x1b[36m'   // cyan
const BC = '\x1b[96m'  // bright cyan
const W = '\x1b[37m'   // white
const BW = '\x1b[97m'  // bright white
const GR = '\x1b[90m'  // gray

// Per-character color grids, parallel to SPRITES
export const SPRITE_CHAR_COLORS: Record<number, string[][]> = {
  // Creeper — green face, dark green eyes/mouth
  1: [
    [BG, G,  BG, BG, G,  BG],
    [BG, G,  BG, BG, G,  BG],
    [BG, BG, G,  G,  BG, BG],
    [BG, G,  G,  G,  G,  BG],
    [BG, G,  BG, BG, G,  BG],
  ],
  // Pig — pink face, darker snout area
  2: [
    [BM, BM, BM, BM, BM, BM],
    [BM, M,  BM, BM, M,  BM],
    [BM, BM, BM, BM, BM, BM],
    [BM, M,  BM, BM, M,  BM],
    [BM, M,  M,  M,  M,  BM],
  ],
  // Chicken — white face, red comb, yellow beak
  3: [
    [W,  BR, BR, BR, W ],
    [BW, GR, BW, GR, BW],
    [BW, BW, BW, BW, BW],
    [BW, BW, BY, BW, BW],
    [BW, BW, BW, BW, BW],
  ],
  // Zombie — dark green face, dark eye sockets
  4: [
    [G,  G,  G,  G,  G,  G ],
    [G,  GR, G,  G,  GR, G ],
    [G,  G,  G,  G,  G,  G ],
    [G,  G,  GR, GR, G,  G ],
    [G,  GR, GR, GR, GR, G ],
  ],
  // Skeleton — white skull, large dark eye sockets
  5: [
    [BW, BW, BW, BW, BW, BW],
    [BW, GR, GR, GR, GR, BW],
    [BW, GR, BW, BW, GR, BW],
    [BW, BW, GR, GR, BW, BW],
    [BW, GR, BW, BW, GR, BW],
  ],
  // Cow — white face, brown patches, gray muzzle
  6: [
    [BW, Y,  BW, BW, Y,  BW],
    [BW, GR, BW, BW, GR, BW],
    [BW, BW, BW, BW, BW, BW],
    [GR, GR, GR, GR, GR, GR],
    [GR, GR, W,  W,  GR, GR],
  ],
  // Sheep — white wool framing pink face
  7: [
    [BW, BW, BW, BW, BW, BW],
    [BW, GR, BM, BM, GR, BW],
    [BW, BM, BM, BM, BM, BW],
    [BW, BM, BM, BM, BM, BW],
    [BW, BW, BW, BW, BW, BW],
  ],
  // Slime — translucent green, simple face
  8: [
    [BG, BG, BG, BG, BG, BG],
    [BG, G,  BG, BG, G,  BG],
    [BG, BG, BG, BG, BG, BG],
    [BG, BG, BG, BG, BG, BG],
    [BG, G,  G,  G,  G,  BG],
  ],
  // Spider — wide dark face, multiple red eyes
  9: [
    [GR, GR, GR, GR, GR, GR, GR, GR],
    [GR, BR, RD, GR, GR, RD, BR, GR],
    [GR, RD, BR, GR, GR, BR, RD, GR],
    [GR, GR, GR, GR, GR, GR, GR, GR],
    [GR, GR, GR, GR, GR, GR, GR, GR],
  ],
  // Wolf — gray/white face, pointed ears, dark nose
  10: [
    [GR, GR, W,  W,  W,  W,  GR, GR],
    [W,  W,  GR, W,  W,  GR, W,  W ],
    [W,  W,  W,  W,  W,  W,  W,  W ],
    [W,  W,  W,  GR, GR, W,  W,  W ],
    [W,  W,  W,  GR, GR, W,  W,  W ],
  ],
  // Villager — tan face, BIG nose, unibrow
  11: [
    [Y,  Y,  Y,  Y,  Y,  Y ],
    [Y,  GR, GR, GR, GR, Y ],
    [Y,  G,  Y,  Y,  G,  Y ],
    [Y,  Y,  GR, GR, Y,  Y ],
    [Y,  Y,  GR, GR, Y,  Y ],
  ],
  // Bee — yellow/black stripes, large dark eyes
  12: [
    [BY, BY, BY, BY, BY, BY],
    [BY, GR, GR, GR, GR, BY],
    [GR, GR, GR, GR, GR, GR],
    [BY, BY, BY, BY, BY, BY],
    [BY, BY, BY, BY, BY, BY],
  ],
  // Witch — purple hat, villager-like face, wart
  13: [
    [M,  M,  M,  M,  M ],
    [GR, GR, GR, GR, GR],
    [GR, G,  GR, G,  GR],
    [GR, GR, BG, GR, GR],
    [GR, GR, GR, GR, GR],
  ],
  // Iron Golem — large iron face, red eyes, big nose, vine crack
  14: [
    [BW, BW, BW, BW, BW, BW, BW],
    [BW, BR, BW, BW, BW, BR, BW],
    [BW, BW, BW, BW, BW, BW, BW],
    [BW, BW, GR, GR, GR, BW, BW],
    [BW, G,  BW, BW, BW, BW, BW],
  ],
  // Enderman — all dark, bright purple eye line
  15: [
    [M,  M,  M,  M,  M,  M ],
    [M,  M,  M,  M,  M,  M ],
    [BM, BM, M,  M,  BM, BM],
    [M,  M,  M,  M,  M,  M ],
    [M,  M,  M,  M,  M,  M ],
  ],
  // Blaze — yellow/orange face, dark eyes
  16: [
    [BY, BY, BY, BY, BY],
    [BY, Y,  BY, Y,  BY],
    [BY, BY, BY, BY, BY],
    [BY, BY, BY, BY, BY],
    [BY, BY, BY, BY, BY],
  ],
  // Ghast — white face, closed sad eyes, frown
  17: [
    [BW, BW, BW, BW, BW, BW, BW],
    [BW, BW, BW, BW, BW, BW, BW],
    [BW, GR, BW, BW, BW, GR, BW],
    [BW, GR, BW, BW, BW, GR, BW],
    [BW, BW, BW, GR, BW, BW, BW],
  ],
  // Wither Skeleton — dark gray skull, glowing eyes
  18: [
    [GR, GR, GR, GR, GR, GR],
    [GR, BW, GR, GR, BW, GR],
    [GR, GR, GR, GR, GR, GR],
    [GR, GR, GR, GR, GR, GR],
    [GR, BW, GR, GR, BW, GR],
  ],
  // Warden — dark teal, sculk horns, no eyes, chest glow
  19: [
    [C,  GR, C,  C,  C,  C,  GR, C ],
    [C,  C,  C,  C,  C,  C,  C,  C ],
    [C,  C,  C,  C,  C,  C,  C,  C ],
    [C,  C,  BC, BC, BC, BC, C,  C ],
    [C,  C,  C,  C,  C,  C,  C,  C ],
  ],
  // Ender Dragon — purple face, horns, glowing eyes
  20: [
    [GR, M,  M,  M,  M,  M,  GR],
    [M,  BM, M,  M,  M,  BM, M ],
    [M,  M,  M,  M,  M,  M,  M ],
    [M,  M,  M,  M,  M,  M,  M ],
    [GR, M,  M,  M,  M,  M,  GR],
  ],
}

export function colorizeSprite(sprite: string[], companionId: number): string[] {
  const colors = SPRITE_CHAR_COLORS[companionId]
  if (!colors) return sprite
  return sprite.map((line, lineIdx) => {
    const chars = [...line]
    const lineColors = colors[lineIdx] ?? []
    return chars.map((ch, i) => {
      const color = lineColors[i]
      return color ? `${color}${ch}${RS}` : ch
    }).join('')
  })
}

export const SPRITES: Record<number, string[]> = {
  // Creeper — canonical face: eyes, nose bridge, mouth, fang trails
  1: [
    '▓░▓▓░▓',
    '▓█▓▓█▓',
    '▓▓██▓▓',
    '▓████▓',
    '▓█░░█▓',
  ],
  // Pig — square face, small eyes, protruding rectangular snout
  2: [
    '██████',
    '██░██░',
    '██████',
    '█▐██▌█',
    '█▐▒▒▌█',
  ],
  // Chicken — red comb on top, small eyes, beak below
  3: [
    '░▓▓▓░',
    '█░█░█',
    '█████',
    '██▼██',
    '█████',
  ],
  // Zombie — dark green skin, sunken dark eyes, mouth
  4: [
    '██████',
    '█▒██▒█',
    '██████',
    '██▒▒██',
    '█▒▒▒▒█',
  ],
  // Skeleton — white skull, large dark eye sockets, teeth
  5: [
    '██████',
    '█▓▓▓▓█',
    '█▓██▓█',
    '██▓▓██',
    '█▓██▓█',
  ],
  // Cow — white face, brown around eyes, gray muzzle/nostrils
  6: [
    '█▓██▓█',
    '█▒██▒█',
    '██████',
    '▒▒▒▒▒▒',
    '▒▒░░▒▒',
  ],
  // Sheep — fluffy white wool framing pink inner face
  7: [
    '░░░░░░',
    '░▒██▒░',
    '░████░',
    '░████░',
    '░░░░░░',
  ],
  // Slime — translucent green cube, simple eyes + wide mouth
  8: [
    '▓▓▓▓▓▓',
    '▓█▓▓█▓',
    '▓▓▓▓▓▓',
    '▓▓▓▓▓▓',
    '▓████▓',
  ],
  // Spider — wide dark face, two rows of red eyes
  9: [
    '▒▒▒▒▒▒▒▒',
    '▒█░▒▒░█▒',
    '▒░█▒▒█░▒',
    '▒▒▒▒▒▒▒▒',
    '▒▒▒▒▒▒▒▒',
  ],
  // Wolf — pointed ears, gray/white face, dark nose
  10: [
    '▲▲████▲▲',
    '██▒██▒██',
    '████████',
    '███▓▓███',
    '███▓▓███',
  ],
  // Villager — tan skin, thick unibrow, green eyes, BIG nose
  11: [
    '██████',
    '█▓▓▓▓█',
    '█░██░█',
    '██▓▓██',
    '██▓▓██',
  ],
  // Bee — yellow face, black stripe, large compound eyes
  12: [
    '██████',
    '█▓▓▓▓█',
    '▓▓▓▓▓▓',
    '██████',
    '██████',
  ],
  // Witch — purple hat point, gray skin, green eyes, nose wart
  13: [
    '▄███▄',
    '▒▒▒▒▒',
    '▒░█░▒',
    '▒▒▓▒▒',
    '▒▒▒▒▒',
  ],
  // Iron Golem — large iron face, red eyes, big nose, vine crack
  14: [
    '███████',
    '█░███░█',
    '███████',
    '██▓▓▓██',
    '█░█████',
  ],
  // Enderman — all dark, single bright purple eye line
  15: [
    '██████',
    '██████',
    '▓▓██▓▓',
    '██████',
    '██████',
  ],
  // Blaze — yellow/orange face, dark eyes, fiery
  16: [
    '█████',
    '█░█░█',
    '█████',
    '█████',
    '█████',
  ],
  // Ghast — large white face, teardrop eyes, small frown
  17: [
    '███████',
    '███████',
    '█▒███▒█',
    '█▒███▒█',
    '███▒███',
  ],
  // Wither Skeleton — dark skull, glowing white eyes, teeth
  18: [
    '██████',
    '█░██░█',
    '██████',
    '██████',
    '█░██░█',
  ],
  // Warden — dark teal, sculk horns, eyeless, glowing chest
  19: [
    '█ ████ █',
    '████████',
    '████████',
    '██▓▓▓▓██',
    '████████',
  ],
  // Ender Dragon — purple face with horns and glowing eyes
  20: [
    '▐█████▌',
    '█▓███▓█',
    '███████',
    '███████',
    '▐█████▌',
  ],
}
