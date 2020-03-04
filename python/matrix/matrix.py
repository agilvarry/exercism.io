class Matrix:
    def __init__(self, matrix_string):
        self.matrix_string = self.make_matrix(matrix_string)

    def make_matrix(self, matrix_string):
        return [i.split(' ') for i in matrix_string.split('\n')]

    def row(self, index):
        return [int(i) for i in self.matrix_string[index-1]]

    def column(self, index):
        return [int(i[index-1]) for i in self.matrix_string]