const exerciseFour = (length) => {

    const arrayLocal = [];

    for (let i = 0; i < length; i++) {
      arrayLocal.push(i + 1);
    }

    return arrayLocal;

}

const arrayExerciseFour = exerciseFour(4);
console.log(arrayExerciseFour);