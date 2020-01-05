// Dead Code Elimination
const foo = () => {
  let x = 1
  if (false) {
    return false
  }

  let y = 2
  return x
}

const bar = () => {
  function baz() {
    return 'qux'
  }

  return 'quux'

  let u = 'u'
  return 'qu' + u + 'ux'
}

console.log(bar())

// Tree Shaking
// import { add } from './math-func'
// import Math from './math-class'
//
// console.log(add(3, 4))
