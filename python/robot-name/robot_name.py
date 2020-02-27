from string import ascii_uppercase
import random
class Robot:
    name_bank = set()
    def __init__(self):
        self.reset()

    def random_name(self):
        letters = ''.join(random.choice(ascii_uppercase) for i in range(2))
        numbers = random.randrange(100,999)
        name = "".join(letters + str(numbers))
        return name

    def unique_name(self):
        unique = False
        while not unique:
            name = self.random_name()
            if name not in Robot.name_bank:
                Robot.name_bank.add(name)
                return name


    def reset(self):
        self.name = self.unique_name()      