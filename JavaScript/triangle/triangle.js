export class Triangle {
  constructor(a, b, c) {
    this.sides = [this.a=a, this.b=b, this.c=c]
  }

  isEquilateral() {
    return this.nonZeros() && this.equalityRule()  && (this.a == this.b && this.b == this.c)
  }

  isIsosceles() {
    return this.nonZeros() && this.equalityRule() && (this.a==this.b || this.b == this.c || this.c == this.a)
  }

  isScalene() {
    return this.nonZeros() && this.equalityRule() && (this.a != this.b && this.b != this.c && this.a != this.c)
  }

  equalityRule(){
    return this.a+this.b > this.c && this.a+this.c > this.b && this.c+this.b > this.a
  }
  nonZeros(){
    return this.sides.every(length => length > 0)
  }
}
