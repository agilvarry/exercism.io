export class Triangle {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  isEquilateral() {
    if(!this.nonZeros() || !this.equalityRule()){
      return false
     } else {
     return this.a == this.b && this.b == this.c
    }
  }

  isIsosceles() {
    if(!this.nonZeros() || !this.equalityRule()){
      return false
     }else {
    return this.a==this.b || this.b == this.c || this.c == this.a
    }
  }

  isScalene() {
   if(!this.nonZeros() || !this.equalityRule()){
    return false
   }else{
      return this.a != this.b && this.b != this.c && this.a != this.c
    }
  }

  equalityRule(){
    if(this.a+this.b < this.c){
      return false
    }else if(this.a+this.c < this.b){
      return false
    } else if(this.c+this.b < this.a){
      return false
    } else{
      return true
    }
  }
  nonZeros(){
    if (this.a<=0 || this.b<=0 || this.c<=0){
      return false
    } else{
      return true
    }
  }
}
