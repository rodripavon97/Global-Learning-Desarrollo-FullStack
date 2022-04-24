const arrayOne = new Array ('football', 'tenis', 'voleyball', 'boxeo', 'prowresting','MMA');
const arrayTwo = new Array('running', 'gym', 'motorcycling', 'handball');

const exerciseTwo = (array) => {
    const messageError = `the ${array.length} is less than five`;
    if (array.length > 5){
        for (let i=0; i < 3 ; i++){
           array.pop();
        }
       console.log(array)
    } else {
        console.error(messageError);
    }

}

let array1 = exerciseTwo(arrayOne);
let array2 = exerciseTwo(arrayTwo);

