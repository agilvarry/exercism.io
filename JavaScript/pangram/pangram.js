const ALPHABET_LENGTH = 26
export const isPangram = (input) => {
  if(!input) return false
  let alphaOnly = input.toLowerCase().replace(/[^a-z]/g, '')
  let unique = new Set(alphaOnly)
  return unique.size == ALPHABET_LENGTH
};
