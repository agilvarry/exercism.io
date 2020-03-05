def is_armstrong_number(number):
    armstrong = 0
    num_string = str(number)
    for i in num_string:
        armstrong += int(i)**len(num_string)
    return armstrong == number   