// Hand-crafted 3×3 braille sprites for Minecraft companions.
// Each braille char is a 2×4 dot grid, so 3×3 chars = 6×12 dots.
// Colors are per-character so sprites can have multiple colors.

const R = '\x1b[0m' // reset

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
  1:  [[BG, BG, BG], [BG, G,  BG], [G,  G,  G ]],   // Creeper — bright green body, dark green eyes
  2:  [[BM, BM, BM], [BM, BM, BM], [BM, BM, BM]],   // Pig — pink all over
  3:  [[W,  BW, W ], [W,  BW, W ], [BY, BY, BY]],    // Chicken — white body, yellow legs
  4:  [[G,  G,  G ], [BL, BL, BL], [GR, GR, GR]],    // Zombie — green head, blue shirt, gray legs
  5:  [[BW, BW, BW], [BW, BW, Y ], [GR, GR, GR]],    // Skeleton — white bones, yellow bow, gray legs
  6:  [[W,  Y,  W ], [BW, Y,  BW], [W,  W,  W ]],    // Cow — white with brown spots
  7:  [[BG, BG, BG], [Y,  Y,  Y ], [Y,  Y,  Y ]],    // Dirt Block — green grass top, brown dirt
  8:  [[GR, GR, GR], [GR, GR, GR], [Y,  Y,  Y ]],    // Wooden Sword — gray blade, brown handle
  9:  [[RD, RD, RD], [RD, BR, RD], [RD, RD, RD]],    // Spider — dark red, bright red eyes
  10: [[BW, BW, BW], [BW, G,  BW], [BW, BW, BW]],    // Iron Golem — iron body, green vine
  11: [[GR, GR, GR], [W,  BW, W ], [W,  W,  W ]],    // Wolf — gray ears, white body
  12: [[BW, BW, BW], [BW, BW, BW], [Y,  Y,  Y ]],    // Iron Sword — bright white blade, brown handle
  13: [[BR, BR, BR], [BW, BW, BW], [BR, BR, BR]],    // TNT — red block, white label stripe
  14: [[M,  M,  M ], [M,  BM, M ], [M,  M,  M ]],    // Enderman — dark purple, pink eyes
  15: [[BY, BY, BY], [Y,  BY, Y ], [BY, BY, BY]],     // Blaze — yellow rods, bright yellow core
  16: [[BC, BC, BC], [BC, BC, BC], [Y,  Y,  Y ]],     // Diamond Sword — cyan blade, brown handle
  17: [[GR, GR, W ], [GR, GR, GR], [GR, GR, GR]],    // Wither Skeleton — gray body, white sword tip
  18: [[C,  C,  C ], [C,  BC, C ], [C,  C,  C ]],     // Warden — teal body, bright cyan sculk
  19: [[GR, M,  GR], [M,  M,  M ], [M,  M,  M ]],    // Ender Dragon — gray wings, purple body
  20: [[M,  M,  M ], [M,  BM, M ], [M,  M,  M ]],    // Dragon Egg — dark purple, pink speckle
}

export function colorizeSprite(sprite: string[], companionId: number): string[] {
  const colors = SPRITE_CHAR_COLORS[companionId]
  if (!colors) return sprite
  return sprite.map((line, lineIdx) => {
    const chars = [...line]
    const lineColors = colors[lineIdx] ?? []
    return chars.map((ch, i) => {
      const color = lineColors[i]
      return color ? `${color}${ch}${R}` : ch
    }).join('')
  })
}

export const SPRITES: Record<number, string[]> = {
  // Creeper — square face with dark eyes and frown
  1: [
    '⣏⠉⣹',
    '⣿⠛⣿',
    '⠛⠀⠛',
  ],
  // Pig — round body with snout
  2: [
    '⢀⣴⡄',
    '⣿⣭⣿',
    '⠘⠃⠘',
  ],
  // Chicken — small body on legs
  3: [
    '⠀⣴⠀',
    '⢰⣿⡆',
    '⠀⠛⠀',
  ],
  // Zombie — humanoid with arms out
  4: [
    '⢀⣤⡄',
    '⠈⣿⠁',
    '⠀⠛⠀',
  ],
  // Skeleton — thin humanoid with bow
  5: [
    '⠀⣶⠀',
    '⢸⡏⡆',
    '⠀⠛⠀',
  ],
  // Cow — wide body with horns
  6: [
    '⠺⣤⠗',
    '⣿⣿⣿',
    '⠛⠀⠛',
  ],
  // Dirt Block — solid textured square
  7: [
    '⣿⣿⣿',
    '⣶⣶⣶',
    '⣤⣤⣤',
  ],
  // Wooden Sword — diagonal blade
  8: [
    '⠀⠀⢰',
    '⠀⡰⠀',
    '⡘⠀⠀',
  ],
  // Spider — wide low body with legs
  9: [
    '⠀⣤⠀',
    '⢿⣿⡿',
    '⠉⠀⠉',
  ],
  // Iron Golem — big top, narrow bottom
  10: [
    '⣿⣿⣿',
    '⠘⣿⠃',
    '⠀⠛⠀',
  ],
  // Wolf — four-legged with tail
  11: [
    '⡤⣤⠀',
    '⣿⣿⡆',
    '⠛⠀⠛',
  ],
  // Iron Sword — vertical blade
  12: [
    '⠀⠠⠀',
    '⠀⡇⠀',
    '⠀⠛⠀',
  ],
  // TNT — block with stripe
  13: [
    '⣿⣿⣿',
    '⣤⣭⣤',
    '⣿⣿⣿',
  ],
  // Enderman — tall thin with eyes
  14: [
    '⠀⣷⠀',
    '⠀⡿⠀',
    '⠀⠛⠀',
  ],
  // Blaze — floating with rods
  15: [
    '⡇⣶⢸',
    '⠀⣿⠀',
    '⡇⠛⢸',
  ],
  // Diamond Sword — shiny blade
  16: [
    '⠀⠀⢰',
    '⠀⡰⠀',
    '⡞⠀⠀',
  ],
  // Wither Skeleton — thin with stone sword
  17: [
    '⠀⣶⡆',
    '⠀⡏⠀',
    '⠀⠛⠀',
  ],
  // Warden — wide dark mass
  18: [
    '⣰⣶⣆',
    '⣿⣿⣿',
    '⣿⠉⣿',
  ],
  // Ender Dragon — winged
  19: [
    '⡇⣿⢸',
    '⠀⣿⠀',
    '⠀⢻⠀',
  ],
  // Dragon Egg — oval shape
  20: [
    '⠀⣶⠀',
    '⢸⣿⡇',
    '⠀⣿⠀',
  ],
}
