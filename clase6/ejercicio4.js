/* Ejercicio 4: Teniendo en cuenta la misma conferencia anterior, necesitamos saber si van a haber programadores de cierto lenguaje para poder preparar contenido específico. Por lo tanto, necesitamos una función que nos devuelva “true” o “false” cuando le preguntemos por cierto lenguaje. Por ejemplo*/

const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];

  function exerciseFour (array, language){
    let languageObj = array.find((object)=> object.language === language);
    if (languageObj) {
        return true
    } else {
        return false
    }
    
  }

let ruby =exerciseFour(list,'Ruby');
let java = exerciseFour(list, 'Java')
console.log(ruby);
console.log(java)

