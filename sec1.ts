let car:string = 'bmw'; 

let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:number<number> = [1,2,3];

let week1:Array<string> = ['mon','tue','wed'];

week1.push('1');

//튜플 수정 불가
let b:[string,number];

b = ['z',1];

b[0].toLowerCase();
b[1].toLowerCase();

const showHello = ():void => {
    console.log("Hello!");
}

const showError = ():never => {
    throw new Error();
}