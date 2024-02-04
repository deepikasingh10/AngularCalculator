import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttoncomponent',
  templateUrl: './buttoncomponent.component.html',
  styleUrls: ['./buttoncomponent.component.css']
})
export class ButtoncomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.updatehistory();
    //this.loadhistory();
  }

  currval:any="";
  previousvalue:string="";
  myhistory:String[]=[];
  newhistory:any="";
  input: string = '';
  result: any = '';

//pressKey() captures the number & decimal buttons
  pressKey(value:string){
    this.currval=this.currval+value;
    this.input=this.currval;
    this.previousvalue=this.input;
  }

// clear() clears everything
  clear(){
    this.currval="";
    this.input=this.currval;
    this.result="0";
  }

//equals() calculates and assigns it to the result to input variable
  equals(){
    this.calculate();
  }
  
//  savememory() used to store memory in sessionstorage
  savememory(){
    this.currval=sessionStorage.getItem("Memory");
    this.input=this.currval;
    this.result="0";
  }

//  calculate() to perform arithemtic operations
  calculate(){
    let expression=this.currval.split(/[+\-*/%]/);
    let operands=this.currval.replace(/[0-9.]/g,"").split('');
    let res=Number(expression[0]);
    for (let i=0;i<operands?.length;i++){
      let number=Number(expression[i+1]);
      let operator=operands[i];
      if (operator==="+"){
        res+=number;
      }
      else if (operator==="-"){
        res-=number;
      }
      else if (operator==="*"){
        res*=number;
      }
      else if (operator==="/"){
        res/=number;
      }
      else if (operator==="%"){
        res*=number/100;
      }
    }
    console.log(res);
    this.currval=this.input;
    this.result=res;
    this.myhistory=JSON.parse(localStorage.getItem("history")!);
    this.myhistory.unshift(this.input+ '=' + this.result);
    this.savehistory();
    this.updatehistory();
  }

  // backspace() removes the last input
    backspace(){
      this.input=this.currval;
      this.currval=this.currval.slice(0,-1);
    }

  //  savehistory() used to store history in localStorage
    savehistory(){
      localStorage.setItem("history", JSON.stringify(this.myhistory));
      sessionStorage.setItem("Memory",this.result);
    }

  //  updatehistory() display the upadted history 
    updatehistory(){
      this.newhistory=JSON.parse(localStorage.getItem("history")!);
      this.newhistory=this.newhistory.join("\n");
    }

  }






























  // pressKey() captures the number & decimal buttons
//   pressKey(num: string) {
//     //Do not allow . more than once.
//     if (num == ".") {
//       if (this.input != "") {

//         const lastNum = this.getLastOperand()
//         console.log(lastNum.lastIndexOf("."))
//         if (lastNum.lastIndexOf(".") >= 0) return;
//       }
//     }
    
//     //Do not allow 0 at beginning. 
//     //Javascript will throw Octal literals are not allowed in strict mode.
//     if (num == "0") {
//       if (this.input == "") {
//         return;
//       }
//       const PrevKey = this.input[this.input.length - 1];
//       if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+') {
//         return;
//       }
//     }

//     this.input = this.input + num
//     this.calcAnswer();
//   }

//   // getLastOperand() returns the last operand, if the user input is 120+57 then the last operand is 57
//   getLastOperand() {
//     let pos: number; 
//     console.log(this.input)
//     pos = this.input.toString().lastIndexOf("+")
//     if (this.input.toString().lastIndexOf("-") > pos) pos = this.input.lastIndexOf("-")
//     if (this.input.toString().lastIndexOf("*") > pos) pos = this.input.lastIndexOf("*")
//     if (this.input.toString().lastIndexOf("/") > pos) pos = this.input.lastIndexOf("/")
//     console.log('Last ' + this.input.substring(pos + 1))
//     return this.input.substring(pos + 1)
//   }

//   // pressOperator() method captures the /, X,- & + on button clicks
//   pressOperator(op: string) {
//     //Do not allow operators more than once
//     const lastKey = this.input[this.input.length - 1];
//     if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
//       return;
//     }

//     this.input = this.input + op;
//     this.calcAnswer();
//   }

//   // backspace() removes the last input
//   backspace() {
//     if (this.input != "") {
//       this.input = this.input.substring(0, this.input.length - 1)
//     }
//   }

//   // clear() clears everything
//   clear() {
//     this.result = '';
//     this.input = '';
//   }

//   // calcAnswer() is where the calculation happens
//   calcAnswer() {
//     let formula = this.input;

//     let lastKey = formula[formula.length - 1];

//     if (lastKey === '.') {
//       formula = formula.substring(0, formula.length - 1);
//     }

//     lastKey = formula[formula.length - 1];

//     if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
//       formula = formula.substring(0, formula.length - 1);
//     }

//     console.log("Formula " + formula);
//     this.result = eval(formula);
//   }

//   // equals() calculates and assigns it to the result to input variable
//   equals() {
//     this.calcAnswer();
//     this.input = this.result;
//     if (this.input == "0") this.input = "";
//   }
// }


