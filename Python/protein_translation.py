protein_dictionary = {'AUG':'Methionine', 
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

def proteins(strand):
    codons = [strand[i:i+3] for i in range(0,len(strand),3)]
    protien_list = []
    for i in codons:
        if protein_dictionary[i] =='STOP':
            break
        else:
            protien_list.append(protein_dictionary[i])
        
    return protien_list
