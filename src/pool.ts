import type { CompanionEntry } from 'claude-companion-core'

export const POOL: CompanionEntry[] = [
  // Common (8)
  { id: 1, name: 'Creeper', rarity: 'common', categories: ['hostile', 'overworld'] },
  { id: 2, name: 'Pig', rarity: 'common', categories: ['passive', 'overworld'] },
  { id: 3, name: 'Chicken', rarity: 'common', categories: ['passive', 'overworld'] },
  { id: 4, name: 'Zombie', rarity: 'common', categories: ['hostile', 'overworld'] },
  { id: 5, name: 'Skeleton', rarity: 'common', categories: ['hostile', 'overworld'] },
  { id: 6, name: 'Cow', rarity: 'common', categories: ['passive', 'overworld'] },
  { id: 7, name: 'Sheep', rarity: 'common', categories: ['passive', 'overworld'] },
  { id: 8, name: 'Slime', rarity: 'common', categories: ['hostile', 'overworld'] },

  // Uncommon (5)
  { id: 9, name: 'Spider', rarity: 'uncommon', categories: ['hostile', 'overworld', 'cave'] },
  { id: 10, name: 'Wolf', rarity: 'uncommon', categories: ['neutral', 'overworld'] },
  { id: 11, name: 'Villager', rarity: 'uncommon', categories: ['passive', 'overworld'] },
  { id: 12, name: 'Bee', rarity: 'uncommon', categories: ['neutral', 'overworld'] },
  { id: 13, name: 'Witch', rarity: 'uncommon', categories: ['hostile', 'overworld'] },

  // Rare (3)
  { id: 14, name: 'Iron Golem', rarity: 'rare', categories: ['neutral', 'overworld'] },
  { id: 15, name: 'Enderman', rarity: 'rare', categories: ['hostile', 'end', 'overworld'] },
  { id: 16, name: 'Blaze', rarity: 'rare', categories: ['hostile', 'nether'] },

  // Epic (2)
  { id: 17, name: 'Ghast', rarity: 'epic', categories: ['hostile', 'nether'] },
  { id: 18, name: 'Wither Skeleton', rarity: 'epic', categories: ['hostile', 'nether'] },

  // Legendary (1)
  { id: 19, name: 'Warden', rarity: 'legendary', categories: ['hostile', 'cave'] },

  // Mythical (1)
  { id: 20, name: 'Ender Dragon', rarity: 'mythical', categories: ['hostile', 'end'] },
]
