
function problem2(array , x){
    /* create arrayObj use split and filter */
    /* case space*/
    let arrayObj =array.split(" ").filter(item => item.length > x)
    return arrayObj


}

let example = problem2("Bienvenidos a Global Learning 2022" ,6 )
let example2 = problem2("Este texto pasó la prueba de la funcion", 3)
let example3= problem2( "Pera, limón, higo, manzana, durazno, uva, palta, lima, banana" , 4) 
let example4= problem2("¿Un desafío? ...cuidado con los signos!" , 5)
console.log(example)