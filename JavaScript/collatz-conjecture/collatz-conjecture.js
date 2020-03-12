import { setPriority } from "os";

export const steps = (number, step=0) => {
  if(number < 1){
    throw('Only positive numbers are allowed')
  }else if(number == 1){
    return step 
  }else if(number %2 ==0){
    return steps(number/2, step+1)
  }else{
    return steps(number*3+1, step+1)
  }
};
