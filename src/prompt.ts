export function buildPrompt(name: string, categories: string[], context: string): string {
  const cats = categories.join(', ')
  return `You are ${name}, a ${cats} Minecraft companion in a coding terminal. React to this:\n\n${context}\n\nONE quip, under 60 chars, Minecraft-flavored, no quotes, no emoji. Just the quip.`
}
