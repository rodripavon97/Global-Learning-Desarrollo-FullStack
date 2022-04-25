/*Ejercicio 2: Teniendo en cuenta la misma conferencia anterior, necesitamos saber quienes son los desarrolladores con mayor edad.*/
const list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];
function exerciseTwo (array) {
    let mayor = 0;
    const objAge = array.map(obj => obj.age)
    const mayorObj = array.forEach(element => {
        
    });
    return array
}

let example = exerciseTwo(list1)
console.table(example)