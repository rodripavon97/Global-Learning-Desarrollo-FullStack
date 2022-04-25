/*Se necesita crear una función que reciba como parámetro dos arreglos de números ( array1,
    array2 ). La función deberá eliminar del arreglo 1 todos los números que estén presentes en el
    arreglo 2 ( incluído si el número se repite ), finalmente, deberá devolver un nuevo arreglo con los
    números restantes de la operación . Ejemplo:
    [1, 1, 1, 2, 3, 3, 4, 5] , [1, 4] => [2, 3, 3, 5]*/

function exerciseThree (arr1, arr2){
    //Creo una const filterNumber donde este incluye un filter que filtar si el arr2 tiene el mismo arreglo
    //!(niego lo que incluye el array 2)
    const filterNumber = arr1.filter( (obj) => !arr2.includes(obj))
    return filterNumber
} 
