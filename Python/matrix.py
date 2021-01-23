class Matrix:
    def __init__(self, matrix_string):
        self.matrix_string = self.make_matrix(matrix_string)

    def make_matrix(self, matrix_string):
        return [[int(item) for item in array.split()] for array in matrix_string.splitlines()]
        
    def row(self, index):
        return [item for item in self.matrix_string[index - 1]]

    def column(self, index):
        return [item[index - 1] for item in self.matrix_string]