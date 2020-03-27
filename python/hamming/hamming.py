def distance(strand_a, strand_b):
    if len(strand_a) == len(strand_b):
        hamming = get_hamming(strand_a, strand_b)
    else:
        raise ValueError("Strands not of equal length")            
    return hamming
    

def get_hamming(a, b):
    hamming = 0
    for index in range(0,len(a)):
         if a[index] != b[index]:
            hamming = hamming + 1
    return hamming        
    