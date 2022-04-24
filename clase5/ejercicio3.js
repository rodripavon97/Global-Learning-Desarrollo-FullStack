const array = [1,2,3,4,5,30,70]
const number = 10;

function exerciseThree (array, number) {

    for (let i=0; i < array.length; i++){
        array[i]+=number;
    }
    return array
} 
let newArray = exerciseThree(array, number);
console.log(newArray)