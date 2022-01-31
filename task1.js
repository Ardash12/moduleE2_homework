let num = prompt();
if (isNaN(num) || !num || (typeof num === "boolean")) {
  console.log(`Упс, кажется, вы ошиблись, тип: ${typeof num}`);
}

num = +num

if ((typeof num === "number") && (!isNaN(num))) {
  if (num % 2 === 0) {
    console.log('Четное')
  } else {
    console.log('Нечетное')
  }
}