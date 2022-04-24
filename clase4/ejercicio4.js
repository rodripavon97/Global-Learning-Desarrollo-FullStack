function number(number) {
  for (let i = 0; i <= 10; i++) {
    if (i === number) {
      continue;
    }
    console.log(i);
  }
}

number(3);