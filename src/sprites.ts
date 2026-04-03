// Minecraft companion sprites using mixed Unicode characters.
// 5 lines tall, variable width. Based on canonical Minecraft textures.
// Uses block elements, box drawing, geometric shapes, and braille.

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

// Per-character color grids, parallel to SPRITES (same dimensions)
export const SPRITE_CHAR_COLORS: Record<number, string[][]> = {
  // Creeper — green body, black eyes/mouth
  1: [
    [BG, BG, G,  BG, BG, BG],
    [BG, G,  G,  BG, G,  G ],
    [BG, BG, G,  G,  BG, BG],
    [BG, G,  G,  G,  G,  BG],
    [BG, G,  BG, BG, G,  BG],
  ],
  // Pig — pink body, lighter snout
  2: [
    [BM, BM, BM, BM, BM],
    [BM, M,  BM, M,  BM],
    [BM, BM, BM, BM, BM],
    [M,  BM, BM, BM, M ],
    [M,  BM, M,  BM, M ],
  ],
  // Chicken — white body, red comb, yellow beak, orange legs
  3: [
    [BR, BR, BW, BR, BR],
    [BW, GR, BW, GR, BW],
    [BW, BW, BY, BW, BW],
    [BW, BW, BW, BW, BW],
    [BY, BY, GR, BY, BY],
  ],
  // Zombie — green head, blue shirt, dark eyes
  4: [
    [G,  G,  G,  G,  G ],
    [G,  GR, G,  GR, G ],
    [G,  G,  G,  G,  G ],
    [BL, BL, BL, BL, BL],
    [GR, GR, GR, GR, GR],
  ],
  // Skeleton — white skull, dark eyes, bow
  5: [
    [BW, BW, BW, BW, BW],
    [BW, GR, BW, GR, BW],
    [BW, GR, GR, GR, BW],
    [BW, BW, BW, BW, BW],
    [GR, GR, BW, GR, GR],
  ],
  // Cow — white+brown, dark nose
  6: [
    [W,  Y,  BW, Y,  W ],
    [BW, GR, BW, GR, BW],
    [BW, BW, BW, BW, BW],
    [GR, BW, GR, BW, GR],
    [Y,  Y,  GR, Y,  Y ],
  ],
  // Dirt Block — green grass top, brown dirt body
  7: [
    [BG, G,  BG, G,  BG],
    [G,  BG, G,  BG, G ],
    [Y,  Y,  Y,  Y,  Y ],
    [Y,  GR, Y,  GR, Y ],
    [GR, Y,  GR, Y,  GR],
  ],
  // Wooden Sword — brown handle, gray blade
  8: [
    [GR, GR, GR, GR, BW],
    [GR, GR, GR, BW, GR],
    [GR, GR, BW, GR, GR],
    [Y,  BW, Y,  GR, GR],
    [GR, Y,  GR, GR, GR],
  ],
  // Spider — red eyes on black, wide legs (9 wide)
  9: [
    [GR, RD, GR, GR, GR, GR, GR, RD, GR],
    [GR, RD, GR, GR, GR, GR, GR, RD, GR],
    [RD, GR, GR, GR, GR, GR, GR, GR, RD],
    [GR, RD, GR, GR, GR, GR, GR, RD, GR],
    [RD, RD, GR, RD, GR, RD, GR, RD, RD],
  ],
  // Iron Golem — white iron, green vine, dark eyes
  10: [
    [BW, BW, BW, BW, BW, BW],
    [BW, RD, BW, BW, RD, BW],
    [BW, BW, BW, BW, BW, BW],
    [BW, BW, BW, BW, BW, BW],
    [GR, BW, BW, BW, BW, GR],
  ],
  // Wolf — gray/white, pointy ears (8 wide)
  11: [
    [GR, GR, W,  W,  W,  W,  GR, GR],
    [W,  GR, W,  W,  W,  W,  GR, W ],
    [W,  W,  W,  BW, BW, W,  W,  W ],
    [W,  W,  W,  W,  W,  W,  W,  W ],
    [GR, GR, GR, GR, GR, GR, GR, GR],
  ],
  // Iron Sword — white blade, brown handle
  12: [
    [GR, GR, GR, GR, BW],
    [GR, GR, GR, BW, GR],
    [GR, GR, BW, GR, GR],
    [Y,  BW, Y,  GR, GR],
    [GR, Y,  GR, GR, GR],
  ],
  // TNT — red block, white label
  13: [
    [BR, BR, BR, BR, BR],
    [BR, BW, BW, BW, BR],
    [BR, BW, BR, BW, BR],
    [BR, BW, BW, BW, BR],
    [BR, BR, BR, BR, BR],
  ],
  // Enderman — black body, purple eyes
  14: [
    [M,  M,  M,  M,  M ],
    [M,  M,  M,  M,  M ],
    [BM, BM, M,  BM, BM],
    [M,  M,  M,  M,  M ],
    [M,  GR, M,  GR, M ],
  ],
  // Blaze — yellow/orange floating with rods (7 wide)
  15: [
    [BY, GR, BY, BY, BY, GR, BY],
    [GR, BY, BY, BY, BY, BY, GR],
    [BY, GR, BY, BY, BY, GR, BY],
    [GR, BY, BY, BY, BY, BY, GR],
    [BY, GR, BY, BY, BY, GR, BY],
  ],
  // Diamond Sword — cyan blade, brown handle
  16: [
    [GR, GR, GR, GR, BC],
    [GR, GR, GR, BC, GR],
    [GR, GR, BC, GR, GR],
    [Y,  BC, Y,  GR, GR],
    [GR, Y,  GR, GR, GR],
  ],
  // Wither Skeleton — dark gray, sword
  17: [
    [GR, GR, GR, GR, GR],
    [GR, W,  GR, W,  GR],
    [GR, GR, GR, GR, GR],
    [GR, GR, GR, GR, GR],
    [GR, GR, GR, GR, GR],
  ],
  // Warden — dark teal, sculk highlights, horns (8 wide)
  18: [
    [C,  GR, C,  C,  C,  C,  GR, C ],
    [C,  C,  C,  C,  C,  C,  C,  C ],
    [C,  C,  BC, BC, BC, BC, C,  C ],
    [C,  C,  BC, BC, BC, BC, C,  C ],
    [C,  C,  C,  C,  C,  C,  C,  C ],
  ],
  // Ender Dragon — purple body, gray wings (9 wide)
  19: [
    [GR, GR, M,  M,  M,  M,  M,  GR, GR],
    [GR, M,  M,  M,  BM, M,  M,  M,  GR],
    [M,  M,  M,  M,  M,  M,  M,  M,  M ],
    [GR, M,  M,  GR, M,  GR, M,  M,  GR],
    [GR, GR, GR, GR, M,  GR, GR, GR, GR],
  ],
  // Dragon Egg — dark purple speckled
  20: [
    [GR, M,  M,  M,  GR],
    [M,  M,  BM, M,  M ],
    [M,  BM, M,  BM, M ],
    [M,  M,  BM, M,  M ],
    [GR, M,  M,  M,  GR],
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
  // Creeper — canonical face: green with dark eyes and frown
  // Based on 8x8 texture: 2x2 eyes, centered nose, 4-wide mouth with fangs
  1: [
    '▓░▓▓░▓',
    '▓█▓▓█▓',
    '▓▓██▓▓',
    '▓████▓',
    '▓█░░█▓',
  ],
  // Pig — pink round face with protruding snout, dark eyes
  2: [
    '▄███▄',
    '█░█░█',
    '█▓▓▓█',
    '▐███▌',
    '▐█▒█▌',
  ],
  // Chicken — red comb on top, white body, yellow beak, legs
  3: [
    '░░▓░░',
    '█░█░█',
    '█████',
    '▐███▌',
    '╨╨ ╨╨',
  ],
  // Zombie — green face, dark hollow eyes, blue shirt below
  4: [
    '█████',
    '█▒█▒█',
    '█████',
    '▓▓▓▓▓',
    '▀▀ ▀▀',
  ],
  // Skeleton — white skull, large dark eye sockets, jaw
  5: [
    '█████',
    '█▒█▒█',
    '█▒▒▒█',
    '█████',
    '▀▀█▀▀',
  ],
  // Cow — white/brown patched face, dark nose
  6: [
    '▐▓█▓▌',
    '█▒█▒█',
    '█████',
    '▒█▒█▒',
    '╨╨ ╨╨',
  ],
  // Dirt Block — green grass layer on top, brown dirt below with texture
  7: [
    '░▓░▓░',
    '▓░▓░▓',
    '▓▓▓▓▓',
    '▓▒▓▒▓',
    '▒▓▒▓▒',
  ],
  // Wooden Sword — diagonal blade pointing upper-right
  8: [
    '    ◆',
    '   ╱ ',
    '  ╱  ',
    '─╪─  ',
    ' ╱   ',
  ],
  // Spider — wide body, red eyes, sprawling legs
  9: [
    ' ╲ ▄▄▄ ╱ ',
    ' ╱██▓██╲ ',
    '╱ █████ ╲',
    ' ╲▀▀▀▀▀╱ ',
    '╱╲ ╱ ╲ ╱╲',
  ],
  // Iron Golem — massive iron body, small red eyes, vine
  10: [
    '██████',
    '█░██░█',
    '██████',
    '▐████▌',
    '▀████▀',
  ],
  // Wolf — pointed ears, white/gray fur, snout
  11: [
    '▲▲████▲▲',
    '█▒████▒█',
    '████████',
    '▐██████▌',
    '▀▀▀▀▀▀▀▀',
  ],
  // Iron Sword — straight blade, crossguard (same shape, different color)
  12: [
    '    △',
    '   ╱ ',
    '  ╱  ',
    '─╪─  ',
    ' ╱   ',
  ],
  // TNT — red block with white TNT label
  13: [
    '█████',
    '█▓▓▓█',
    '█▓█▓█',
    '█▓▓▓█',
    '█████',
  ],
  // Enderman — tall dark body, glowing purple eyes
  14: [
    '█████',
    '█████',
    '▓▓█▓▓',
    '█████',
    '█ █ █',
  ],
  // Blaze — floating fire creature with rods
  15: [
    '│ ▓▓▓ │',
    ' ▐███▌ ',
    '│ ▓▓▓ │',
    ' ▐███▌ ',
    '│ ▓▓▓ │',
  ],
  // Diamond Sword — diamond blade, crossguard
  16: [
    '    ◆',
    '   ╱ ',
    '  ╱  ',
    '─╪─  ',
    ' ╱   ',
  ],
  // Wither Skeleton — dark skeletal figure
  17: [
    '█████',
    '█░█░█',
    '█████',
    '▐███▌',
    '▀ █ ▀',
  ],
  // Warden — wide dark mass with sculk horns and chest glow
  18: [
    '▓ ████ ▓',
    '████████',
    '██▓▓▓▓██',
    '██░░░░██',
    '████████',
  ],
  // Ender Dragon — wings spread, horned head
  19: [
    '  ▄███▄  ',
    ' ██▓█▓██ ',
    '▟███████▙',
    ' ██ ██ ██',
    '   ▐██▌  ',
  ],
  // Dragon Egg — speckled dark purple oval
  20: [
    ' ▄▓▄ ',
    '▐█▓█▌',
    '█▓█▓█',
    '▐█▓█▌',
    ' ▀▓▀ ',
  ],
}
