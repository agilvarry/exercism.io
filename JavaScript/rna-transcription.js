const dnatorna = {
  "G" : "C",
  "C" : "G",
  "T" : "A",
  "A" : "U"
}

export const toRna = (dna = "") => {
  return dna.replace(/G|C|T|A/g, i => dnatorna[i])
};
