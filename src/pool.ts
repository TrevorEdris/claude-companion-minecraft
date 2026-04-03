import type { CompanionEntry } from 'claude-companion-core'

export const POOL: CompanionEntry[] = [
  // Common (8)
  { id: 1, name: 'Creeper', rarity: 'common', categories: ['hostile', 'overworld'] },
  { id: 2, name: 'Pig', rarity: 'common', categories: ['passive', 'overworld'] },
  { id: 3, name: 'Chicken', rarity: 'common', categories: ['passive', 'overworld'] },
  { id: 4, name: 'Zombie', rarity: 'common', categories: ['hostile', 'overworld'] },
  { id: 5, name: 'Skeleton', rarity: 'common', categories: ['hostile', 'overworld'] },
  { id: 6, name: 'Cow', rarity: 'common', categories: ['passive', 'overworld'] },
  { id: 7, name: 'Dirt Block', rarity: 'common', categories: ['overworld'] },
  { id: 8, name: 'Wooden Sword', rarity: 'common', categories: ['overworld'] },

  // Uncommon (5)
  { id: 9, name: 'Spider', rarity: 'uncommon', categories: ['hostile', 'overworld', 'cave'] },
  { id: 10, name: 'Iron Golem', rarity: 'uncommon', categories: ['neutral', 'overworld'] },
  { id: 11, name: 'Wolf', rarity: 'uncommon', categories: ['neutral', 'overworld'] },
  { id: 12, name: 'Iron Sword', rarity: 'uncommon', categories: ['overworld'] },
  { id: 13, name: 'TNT', rarity: 'uncommon', categories: ['overworld'] },

  // Rare (3)
  { id: 14, name: 'Enderman', rarity: 'rare', categories: ['hostile', 'end', 'overworld'] },
  { id: 15, name: 'Blaze', rarity: 'rare', categories: ['hostile', 'nether'] },
  { id: 16, name: 'Diamond Sword', rarity: 'rare', categories: ['cave'] },

  // Epic (2)
  { id: 17, name: 'Wither Skeleton', rarity: 'epic', categories: ['hostile', 'nether'] },
  { id: 18, name: 'Warden', rarity: 'epic', categories: ['hostile', 'cave'] },

  // Legendary (1)
  { id: 19, name: 'Ender Dragon', rarity: 'legendary', categories: ['hostile', 'end'] },

  // Mythical (1)
  { id: 20, name: 'Dragon Egg', rarity: 'mythical', categories: ['end'] },
]
