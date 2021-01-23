//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const proteinDictionary = 
{'AUG':'Methionine', 
'UUU':'Phenylalanine',
'UUC':'Phenylalanine',
'UUA':'Leucine',
'UUG':'Leucine',
'UCU':'Serine',
'UCC':'Serine',
'UCA':'Serine',
'UCG':'Serine',
'UAU':'Tyrosine',
'UAC':'Tyrosine',
'UGU':'Cysteine',
'UGC':'Cysteine',
'UGG':'Tryptophan',
'UAA':'STOP',
'UAG':'STOP',
'UGA':'STOP'}

export const translate = (strand="") => {
  if (!strand){return []} 
    const strandArr = strand.split("")
    let codons = []
    for(let i=0; i<strandArr.length; i+=3){
      let codon = strandArr.slice(i, i+3).join("")
      let protein = proteinDictionary[codon] 
      if(protein == 'STOP'){
        break
      } 
      else if(!(codon in proteinDictionary)){
        throw 'Invalid codon'
      }
      else{
        codons.push(protein)}
     }
    
    return codons
};
