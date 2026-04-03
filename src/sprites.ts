// Hand-crafted 3×3 sprites for Minecraft companions.
// Mixes braille, block elements, box drawing, and geometric shapes.
// Braille chars flash during animation; structural chars stay stable.

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

// Per-character color grid: 3 lines × 3 colors, parallel to SPRITES
export const SPRITE_CHAR_COLORS: Record<number, string[][]> = {
  1:  [[BG, BG, BG], [BG, G,  BG], [G,  G,  G ]],   // Creeper — bright green, dark eyes
  2:  [[BM, BM, BM], [BM, BM, BM], [BM, BM, BM]],   // Pig — pink
  3:  [[W,  BW, W ], [W,  BW, W ], [BY, BY, BY]],    // Chicken — white body, yellow legs
  4:  [[G,  G,  G ], [BL, BL, BL], [GR, GR, GR]],    // Zombie — green head, blue shirt, gray legs
  5:  [[BW, BW, BW], [Y,  BW, Y ], [GR, GR, GR]],    // Skeleton — white bones, brown bow
  6:  [[W,  Y,  W ], [BW, Y,  BW], [Y,  Y,  Y ]],    // Cow — white+brown patches
  7:  [[BG, BG, BG], [Y,  Y,  Y ], [Y,  Y,  Y ]],    // Dirt Block — green grass, brown dirt
  8:  [[GR, GR, GR], [GR, GR, GR], [Y,  Y,  Y ]],    // Wooden Sword — gray blade, brown handle
  9:  [[RD, RD, RD], [BR, BR, BR], [RD, RD, RD]],    // Spider — dark red, bright red eyes
  10: [[BW, BW, BW], [BW, G,  BW], [BW, BW, BW]],    // Iron Golem — iron, green vine
  11: [[GR, W,  GR], [W,  BW, W ], [W,  W,  W ]],    // Wolf — gray ears, white body
  12: [[BW, BW, BW], [BW, BW, BW], [Y,  Y,  Y ]],    // Iron Sword — white blade, brown handle
  13: [[BR, BR, BR], [BW, BR, BW], [BR, BR, BR]],    // TNT — red, white label
  14: [[M,  M,  M ], [M,  BM, M ], [M,  M,  M ]],    // Enderman — purple, pink eyes
  15: [[BY, BY, BY], [Y,  BY, Y ], [BY, BY, BY]],     // Blaze — yellow/orange fire
  16: [[BC, BC, BC], [BC, BC, BC], [Y,  Y,  Y ]],     // Diamond Sword — cyan blade, brown handle
  17: [[GR, GR, W ], [GR, GR, GR], [GR, GR, GR]],    // Wither Skeleton — gray, white sword
  18: [[C,  C,  C ], [C,  BC, C ], [C,  C,  C ]],     // Warden — teal, bright sculk
  19: [[GR, M,  GR], [M,  M,  M ], [M,  M,  M ]],    // Ender Dragon — gray wings, purple body
  20: [[M,  M,  M ], [M,  BM, M ], [M,  M,  M ]],    // Dragon Egg — purple, pink speckle
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
  // Creeper — THE iconic face: shaded sides, dark eyes, split legs
  1: [
    '▓░▓',
    '▓█▓',
    '▀ ▀',
  ],
  // Pig — round pink body with snout
  2: [
    '▗█▖',
    '█◘█',
    '▝▀▘',
  ],
  // Chicken — small bird with beak
  3: [
    ' ▲ ',
    '▐█▌',
    ' ╨ ',
  ],
  // Zombie — humanoid, arms stretched forward
  4: [
    '▄█▄',
    '═█═',
    ' ╫ ',
  ],
  // Skeleton — thin bony figure with bow
  5: [
    ' ○ ',
    '┤█╱',
    ' ╫ ',
  ],
  // Cow — wide body with horns
  6: [
    '╲█╱',
    '▓█▓',
    '╨ ╨',
  ],
  // Dirt Block — grass top, dirt layers
  7: [
    '▓▓▓',
    '▒▒▒',
    '░░░',
  ],
  // Wooden Sword — angled blade with crossguard
  8: [
    ' ◇ ',
    ' │ ',
    ' ╪ ',
  ],
  // Spider — wide low body with legs
  9: [
    '╲▄╱',
    '●█●',
    '╱ ╲',
  ],
  // Iron Golem — massive top, narrow base
  10: [
    '███',
    '▐█▌',
    ' █ ',
  ],
  // Wolf — pointed ears, body, legs
  11: [
    '▲▄ ',
    '██▌',
    '╨ ╨',
  ],
  // Iron Sword — straight blade, crossguard
  12: [
    ' △ ',
    ' │ ',
    ' ╪ ',
  ],
  // TNT — striped block with label
  13: [
    '█▓█',
    '░█░',
    '█▓█',
  ],
  // Enderman — tall thin dark figure
  14: [
    '┌█┐',
    ' █ ',
    ' ╨ ',
  ],
  // Blaze — floating rods around core
  15: [
    '╱█╲',
    '⣿█⣿',
    '╲█╱',
  ],
  // Diamond Sword — diamond-shaped blade
  16: [
    ' ◆ ',
    ' │ ',
    ' ╪ ',
  ],
  // Wither Skeleton — dark figure with stone sword
  17: [
    '┌█╲',
    ' █ ',
    ' ╨ ',
  ],
  // Warden — wide dark mass, sculk horns
  18: [
    '▓█▓',
    '███',
    '█░█',
  ],
  // Ender Dragon — wings spread wide
  19: [
    '╱█╲',
    ' █ ',
    ' ▽ ',
  ],
  // Dragon Egg — oval shape
  20: [
    ' ▄ ',
    '▐█▌',
    ' ▀ ',
  ],
}
