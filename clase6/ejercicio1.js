/*Ejercicio 1: Pensemos que tenemos que hacer un juego. Y lo primero que necesitamos es que se puedan crear héroes en el juego.
Haga una función que utilice una clase para crear nuestro objeto “héroe”
Debe tener las siguientes propiedades y valores.
*/

class Heroes {
    constructor (position, damage, experience, name='heroe'){
        this.name = name,
        this.position = position,
        this.life = 100,
        this.damage = damage,
        this.experience = experience
    }
}

function heroes (position, damage, experience, name) {

    return new Heroes(position,damage, experience, name)

}

const almighty= heroes('00', 5, 20);
almighty.life = 95;
const nightmare= heroes('01',20,5);
nightmare.name= 'nightmare';
nightmare.life = 80;
console.table([almighty, nightmare]);