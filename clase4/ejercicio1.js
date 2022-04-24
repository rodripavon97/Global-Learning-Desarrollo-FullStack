function parOrOdd(number) {
  let pair = number % 2;
  let textFor = `${number} is for.!`;
  let textOdd = `${number} is odd.!`;

  if (pair == 0) {
    console.log(textFor);
  } else {
    console.log(textOdd);
  }
}

parOrOdd(11);
parOrOdd(20);
parOrOdd(150);
