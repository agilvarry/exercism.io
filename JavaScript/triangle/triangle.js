export class Triangle {
  constructor(a, b, c) {
    this.sides = [this.a=a, this.b=b, this.c=c]
  }

  isEquilateral() {
    return this.nonZeros() && this.equalityRule()  && this.sides.every(length => length == this.a)
  }

  isIsosceles() {
    return this.nonZeros() && this.equalityRule() && (this.a==this.b || this.b == this.c || this.c == this.a)
  }

  isScalene() {
    return this.nonZeros() && this.equalityRule() && (this.a != this.b && this.b != this.c && this.a != this.c)
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
