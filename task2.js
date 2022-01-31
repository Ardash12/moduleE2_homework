let x = prompt();
if (typeof x === 'number' && !isNaN(x)) {
  console.log('X - число')
} else if (typeof x === 'boolean') {
  console.log('X - логический тип')
} else if (typeof x === 'string') {
  console.log('X - сторока')
} else {
  console.log('Тип x не определён')
}