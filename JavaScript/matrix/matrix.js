//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString = "") {
    this.matrix = []
    this.matrixColumns = []
    this.parseMatrix(matrixString)
  }

  parseMatrix(matrixString){
    matrixString.split("\n").forEach(array => this.parseArray(array)) 
  }
  parseArray(arrayString){
    let numArray = arrayString.split(" ").map(x=> Number(x))
    this.matrix.push(numArray)
  }

  parseColumns(row){
    for(let index=0; index<row.length; index++){
      this.matrixColumns.length < index+1 && this.matrixColumns.push(new Array()) 
      this.matrixColumns[index].push(row[index])
    }
      
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    this.matrix.forEach(row => this.parseColumns(row))
    return this.matrixColumns
  }


}
