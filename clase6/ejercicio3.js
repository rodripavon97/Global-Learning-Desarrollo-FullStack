/* Ejercicio 3: Teniendo en cuenta la misma conferencia anterior, necesitamos poder personalizar un mensaje para cada persona que asista al evento la próxima vez. 
Para eso, nuestra tarea es tener una función que devuelva un array donde cada posición tiene un objeto con una nueva propiedad de nombre “greeting” o “bienvenida”.
*/ 

const list1 = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];


  function exerciseThree (array){
   const newFirstName = array.map( (obj) => obj.firstName);
   const newLanguage = array.map( (obj) => obj.language);
   
   for (let i=0; i < array.length ; i++) {
     //uso el ciclo for para que cada indice del array recorre y devuelva el mensaje//
     array[i].greeting = `hi ${newFirstName[i]} what do you like the most about ${newLanguage[i]}`;
    }
    return array
  }
exerciseThree(list1);
 

 console.table(exerciseThree(list1)) 



 
