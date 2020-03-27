export class Triangle {
  constructor(a, b, c) {
    this.sides = [this.a=a, this.b=b, this.c=c]
  }

  isEquilateral() {
    return this.isValid()  && this.sameLengthSides() === 3
  }

  isIsosceles() {
    return this.isValid() && this.sameLengthSides() >= 2
  }

  isScalene() {
    return this.isValid() && this.sameLengthSides() === 0
  }
  
  sameLengthSides(){
    let counts = {};
    this.sides.forEach((x) => { counts[x] = (counts[x] || 0)+1 })
    
    let same = 1
    for (let side of Object.values(counts)) {
      same = Math.max(same, side)
    }
    
    return same >1 ? same : 0
  }

  isValid(){
    return this.nonZeros() && this.equalityRule()
  }

  sortNumber(a, b) {
    return a - b;
  }
  equalityRule(){
    const [a,b,c] = this.sides.sort(this.sortNumber)
    return a + b > c
  }
  nonZeros(){
    return this.sides.every(length => length > 0)
  }
}
