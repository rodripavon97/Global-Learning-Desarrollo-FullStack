const array = ([1,1,1,1,2,1,1,1]) 
const array2 = ([3,2,2,2,2,2,2,2])

function findUniq (array){
    let result = array.find((number) => array.indexOf(number) === array.lastIndexOf(number));
    return result;
}
console.log(findUniq(array));
console.log(findUniq(array2));