def is_valid(isbn):
    only_num = list(filter(lambda n: n.isnumeric(), isbn))

    if len(only_num) >10 or len(only_num) <9: return False
    check_x = isbn[-1].isalpha() and isbn[-1] =='X'
    if len(only_num) ==9 and not check_x: return False

    multiplier = 10
    if check_x: result =10
    else: result=0
    
    for i in range(0,len(only_num)):
        current =  int(only_num[i]) * multiplier
        multiplier = multiplier - 1
        result = result + current
    return result%11 == 0    


