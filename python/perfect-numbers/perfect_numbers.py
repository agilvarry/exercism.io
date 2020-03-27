import math
def classify(number):
    if number ==0:
        raise ValueError('thing')
    
    divisors = getDivisors(number)
    aliquot = sum(divisors)
    
    if len(divisors) == 1 or aliquot < number:
        return "deficient"  
    elif aliquot == number:
        return "perfect"
    elif aliquot > number:
        return "abundant"
      

def getDivisors(n) : 
    divisors = {1}
    for i in range(2, int(math.sqrt(n) + 1)): 
        if (n % i == 0) : 
            divisors.update([i, int(n/i)])
    return divisors        
            