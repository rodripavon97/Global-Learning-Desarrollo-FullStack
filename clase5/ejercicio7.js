const array = new Array(9,5,10,2,24,-1)
function exerciseSeven(arrays) {

    let newArray = arrays.map( (number, index, arr) =>
        number * arr[index + 1]
    )

    newArray.pop();
    let resultMax = Math.max(...newArray);
    return resultMax;
}
let max = exerciseSeven(array);
console.log(max);