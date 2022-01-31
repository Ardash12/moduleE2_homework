const arr = [2, 2, 2, 2, '2'];
let f = true;
let i = 0;

while (i < arr.length - 1) {
  if (arr[i] !== arr[i + 1])
    f = false;
  i++
}
console.log(f)