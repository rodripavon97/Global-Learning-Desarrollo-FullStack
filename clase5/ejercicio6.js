const array = new Array(6, 4, 3, 1, -7, 100, -100);

function exerciseSix(array) {
  let minOne = Math.min(...array);
  let indexElimination = array.indexOf(minOne);
  array.splice(indexElimination, 1);
  let minSecond = Math.min(...array);

  return minOne + minSecond;
}
let sum = exerciseSix(array);
console.log(sum);
