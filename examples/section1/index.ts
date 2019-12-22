// 布尔值
let isDone:boolean = true;

// 数字
let decLiteral:number = 20;
let hexLiteral:number = 0x14;
let binaryLiteral:number = 0b10100;
let OctalLiteral:number = 0o24;

// 字符串
let myName:string = 'bob';
let age:number = 20;
let sentence = `Hello, my name is ${myName}.

I'll be ${age+1} year old next month
`;

// 数组
let list1:number[] = [1,2,3];
let list2:Array<number> = [1,2,3];

// 元组 tuple
let x: [string, number];
x = ['hello', 10];
console.log(x[0].substr(1));

// 枚举 enum
enum Color {
  Red = 1,
  Green = 3,
  Blue = 4
}
let c:Color = Color.Green;
console.log(c);   // 3
let colorName:string = Color[4];
console.log(colorName);   // Blue

// any
let notSure:any = 4;
notSure = 'maybe a string instead';
notSure = true;
notSure = [1,2,3];
let list3:any[] = [1,true,'free'];
list3[1] = 100;

// void
function warnUser():void {
  console.log('This is my warning message');
}
let unusable1:void = null;
let unusable2:void = undefined;   // void 类型只能赋值 null 或 undefined

// null & undefined
let u1:undefined = undefined;
let u2:undefined = null;
let n1:null = null;
let n2:null = undefined;
let num = 3;
num = null;   // 如果要禁止赋值为 null，strictNullChecks
let num2:number|null = 3;
num2 = null;

// never 是任意类型的子类型
function error(message:string):never {
  throw new Error(message);
}
function fail() {
  return error('something failed!')
}
function inifiniteLoop():never {
  while (true) {}
}

// object
declare function create(o:object|null):void;
create({prop: 0});
create(null);

// 类型推断
let someValue:any = 'this is a string';
let strLength1:number = (<string>someValue).length;
let strLength2:number = (someValue as string).length;