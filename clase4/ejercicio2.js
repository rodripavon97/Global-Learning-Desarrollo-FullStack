function numberInverse(number) {
  let auxiliary = -number;
  const inverseNegative = `${auxiliary} is negative inverse`;
  const inversePositive = `${auxiliary} is positive inverse `;

  if (auxiliary < 0) {
    console.log(inverseNegative);
  } else{
    console.log(inversePositive);
  }
}

numberInverse(2);
numberInverse(-4);
