const array = [ 1, 2, 3, 4, 5, 6];
const newArray = array;

const myFunction = (arr1,arr2) => {
  let element = arr1.pop();
  arr2.push(element);

  console.log(arr2);
}

myFunction(array,newArray);