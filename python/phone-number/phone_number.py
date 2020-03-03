class PhoneNumber:
    def __init__(self, number):
        self.number = self.format(number)
        self.area_code = self.number[0:3]
        self.validate_output()

    def format(self, number):
        numbers = [i for i in number if i.isnumeric()]
        self.validate_input(numbers)
        return ''.join(self.strip_code(numbers))

    def strip_code(self, numbers):
        if int(numbers[0])==1 and len(numbers)==11:
            numbers.pop(0)
        return numbers    

    def pretty(self):
        three = self.number[3:6]
        four = self.number[6:]
        return f"({self.area_code}) {three}-{four}"
    
    def validate_input(self, numbers):
        if len(numbers) == 11 and int(numbers[0]) != 1:
            raise ValueError("Invalid Country Code")

    def validate_output(self):
        if len(self.number) != 10:
            raise ValueError("Number wrong length")
        elif int(self.number[0]) < 2 or int(self.number[3]) < 2:
            raise ValueError("Area Code and exchange code must be 200 or greater")