const pairOrOdd = (number) => {
    let textFor = `${number}, is for`;
    let textOdd= `${number}, is odd`;
    if (number % 2== 0){
        console.log(textFor)
    } else {
        console.log(textOdd)
    }
}

pairOrOdd(12);
pairOrOdd(25);