interface Counter {
  (start:number):string
  interval:number
  reset():void
}

function getCounter():Counter {
  let counter = function () {}
}