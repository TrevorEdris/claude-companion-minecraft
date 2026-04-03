// Hand-crafted 3×3 braille sprites for Minecraft companions.
// Each braille char is a 2×4 dot grid, so 3×3 chars = 6×12 dots.

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
