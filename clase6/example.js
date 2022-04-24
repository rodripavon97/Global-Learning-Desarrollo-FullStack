const list = [
    {nombre: 'Gabriel', apellido: 'Gonzalez'},
    {nombre: 'Seba', apellido: 'Vignolo'}
]

const newList = list.map ((item) => item.nombre)
console.log(newList)