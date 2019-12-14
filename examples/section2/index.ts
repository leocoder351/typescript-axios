// 数组解构
let [first, second] = [1, 2];
console.log(first);   // 1
console.log(second);  // 2

let [first1, ...rest] = [1, 2, 3];
console.log(first1);  // 1
console.log(rest);    // [2,3]

let [, second2, ] = [1, 2, 3];
console.log(second2); // 2

// 对象解构
let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
};
let {a, ...passthrough} = o;
let total = passthrough.b + passthrough.c.length;
console.log(total);   // 15

let {a:newName1, b:newName2} = o;
console.log(newName1);  // foo
console.log(newName2);  // 12

let o1 = {
  a1: 'foo',
  b1: 12,
  c1: 'bar'
};
let {a1, b1}:{a1:string, b1:number} = o1;

function keepWholeObject(wholeObject:{a:string, b?:number}) {
  let {a, b=1001} = wholeObject;
  console.log(a);
  console.log(b);
}

type C = {a:string, b?:number};

function f({a='', b=0}={}):void {
  console.log(a);
  console.log(b);
}
f({a: 'yes'});
f();
f({});

// 数组展开
let first3 = [1, 2];
let second3 = [3, 4];
let bothPlus = [0, ...first3, ...second3];
console.log(bothPlus);

// 对象展开
let defaults = {
  food: 'noodle',
  price: 10,
  ambiance: 'noisy'
};
let search = {...defaults, food: 'rice'};
let search2 = {food: 'rice', ...defaults};
console.log(search);    // { food: 'rice', price: 10, ambiance: 'noisy' }
console.log(search2);   // { food: 'noodle', price: 10, ambiance: 'noisy' }