export class Matrix {
  constructor(matrixString = "") {
    this.matrix = this.parseMatrix(matrixString)
  }

  parseMatrix(matrixString){
    return matrixString.split("\n").map(array => this.parseArray(array))
  }

  parseArray(arrayString){
    return arrayString.split(" ").map(x=> Number(x))
  }

  rotate() {
    return this.matrix[0].map((val, index) => this.matrix.map(row => row[index]))
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    return this.rotate()
  }
}
