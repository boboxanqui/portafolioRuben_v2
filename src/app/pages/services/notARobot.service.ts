import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class notARobotService {

  constructor() { }

  private _num1: number = 0;
  private _num2: number = 0;
  private _operator: string = '';

  get num1() { return this._num1 }
  get num2() { return this._num2 }
  get operator() { return this._operator }

  generateNum(){
    return Math.floor( Math.random()*10 +1 ) 
  }

  generateOperator(){
    const random = Math.random();
    
    if( random < 0.33 ){ return '+'}
    else if ( random > 0.66 ) { return '-'} 
    else { return 'x'}
  }

  newOperation(){
    this._num1 = this.generateNum();
    this._num2 = this.generateNum();
    this._operator = this.generateOperator()
    while ( this._num1 < this._num2 ){
      this._num1 = this.generateNum();
      this._num2 = this.generateNum();
    }
  }

  checkResult( userNum: number ): boolean{
    let result

    switch (this._operator){
      case '+': result = this._num1 + this._num2;
        break;
      case '-': result = this._num1 - this._num2; 
        break;
      case 'x': result = this._num1 * this._num2;
        break
    }

    if( userNum == result ) return true;
    return false;
  }


  result(): number {
    switch (this._operator){
      case '+': return this._num1 + this._num2;
      case '-': return this._num1 - this._num2; 
      case 'x': return this._num1 * this._num2;
      default: return NaN
    }
  }

  isTwo( userNum: number ){
    if( userNum == 2 ) return true
    return false;
  }


}
