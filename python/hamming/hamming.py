def distance(strand_a, strand_b):
    hamming = 0
    if len(strand_a) == len(strand_b):
        for index in range(0,len(strand_a)):
            if strand_a[index] != strand_b[index]:
                hamming = hamming + 1
    else:
        raise ValueError("Strands not of equal length")            

    return hamming

