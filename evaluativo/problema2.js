/* Problema 2
Se necesita crear una función que reciba como parámetro un string y un número ( “Un string de
ejemplo”, x ). La función deberá devolver un arreglo que contenga todas las palabras del string
cuya longitud sea mayor al número recibido. Ejemplo:
“Esta es una cadena de caracteres de prueba”, 4 => [ “cadena”, “caracteres”, “prueba” ]
Testeos:
● "Bienvenidos a Global Learning 2022" , 6 => [“Bienvenidos”, ”Learning”]
● "Este texto pasó la prueba de la función" , 3 => [“Este”, ”texto”, ”pasó”, ”prueba”, ”función”]
● "Oh no, ahora el texto tiene comas, cuidado" , 2 => [“ahora”, ”texto”, ”tiene”, ”comas”,
”cuidado”]
● "Pera, limón, higo, manzana, durazno, uva, palta, lima, banana" , 4 => [“limón”, ”manzana”,
”durazno”, ”palta”, ”banana”]
● "¿Un desafío? ...cuidado con los signos!" , 5 => [“desafío”, ”cuidado”, ”signos”]
*/



function problem2(array , x){
    // Creo una constante para signos especiales
    const specialSignals =  array.replace(/[,¿?.!]/gi, ' ');
    // Creo un arrayObj que guarde y genere un split
    const arrayObj = specialSignals.split(/\s+/)
    //Creo un Array vacio para mostrar las palabras
    const newWordsArrays= []
    // Creo una const wordsVerify usando el arrayObj y un filter para filtrar las palabras que cumplen dicha condicion
    const wordsVerify = arrayObj.filter(item => item.length > x ? newWordsArrays.push(item) : null)
    return wordsVerify;

}

