/*Problema 1
Se necesita crear una función que reciba como parámetro un array de 3 números ( [ x, y, z ] ). La
función deberá identificar la posición en el array de aquel número cuyo valor esté entre los otros
dos. Ejemplo:
[3, 8, 5] => 5 está entre 3 y 8, entonces la función debe devolver y mostrar en pantalla la
posición “2”.
*/


function exerciseOne(array) {
  // creo 3 variables para guardar los arrays al usar el ciclo for
  let example, example2, example3;
  for (let i = 0 ; i <array.length ; i++){
    if (i==0) {
      //guardo en example el valor del array en 0 
      example=array[i]
    } else if (i==1){
      // idem pero en el array 1
      example2=array[i]
    } else if (i==2){
      //idem pero en el array 2
      example3=array[i]
      return array.indexOf(example3)
    }
  }
  //comparo los arrays guardado en el for y retorno en el array.indexOf
  if((example > example2 && example < example2 ) || (example>example3 && example<example3)){
    return array.indexOf(example)
  } else if ((example2 > example && example2 < example) || (example2>example3 && example2>example3)){
    return array.indexOf(example2)
  } else if ((example3 > example && example3<example) || (example3<example2 && example3>example2)){
    return array.indexOf(example3)
  }
 

}