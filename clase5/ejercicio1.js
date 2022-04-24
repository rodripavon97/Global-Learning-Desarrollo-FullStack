const array = ['pizza', 'taco', 'rice', 'fruits']
const array2 = new Array('wine', 'beer', 'ron')
const array3 = new Array('Android', 'IOs', 'BlackberryOS', 'SymbianOS')

function exerciseOne (array) {
 let arrayDelete = array.shift();
    console.log(arrayDelete)
}

exerciseOne(array);
exerciseOne(array2);
exerciseOne(array3)