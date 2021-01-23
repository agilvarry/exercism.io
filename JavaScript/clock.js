import { COPYFILE_FICLONE_FORCE } from "constants"

export class Clock {
  constructor(h=0, m=0) {
    this.setTime(h,m)
  }
  
  setTime(h,m){
    if(m < 0 || h < 0){ this.underflow(h, m) }
    else if(m >= 60 || h >= 24){ this.overflow(h, m) }
    else{this.h=h; this.m = m}
  }

  toString() {
    let hour = this.h < 10 ? `0${this.h}` :`${this.h}`
    let minute = this.m < 10 ? `0${this.m}` : `${this.m}`
    return `${hour}:${minute}`
  }

  overflow(h,m){
    let hour = h + Math.floor(m/60)
    let minute = m % 60
    while(hour>=24){
      hour -=24
    }
    this.h = hour
    this.m = minute
  }
  
  underflow(h,m){
    let hour = h + Math.floor(m/60)
    let minute = m
    while(minute<0){
      minute +=60
    }
    while(hour<0){
      hour +=24
    }
    this.h = hour
    this.m = minute

  }

  plus(add) {
    let minutes = this.m + add
    this.setTime(this.h, minutes)
    return this
  }

  minus(subtract) {
    let minutes = this.m - subtract
    this.setTime(this.h, minutes)
    return this
  }

  equals(clock) {
    return clock.toString() == this.toString() ? true : false
  }
}
