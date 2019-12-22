class C {
  a: number
  b?: number
}

let c = new C()
c.a = 12
c.a = undefined
c.b = 13
c.b = undefined
c.b = null