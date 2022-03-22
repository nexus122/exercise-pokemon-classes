// Implementa un método de la clase pokemon, de nombre 'atacar'. El método toma por parámetro otro objeto de la clase Pokemon.

// El Pokemon que ejecuta el método realiza un ataque 
// pokemonA.atacar(PokemonB)

/*

 * Primero ataca el Pokemon A:
 * 1. Calcular un número al azar entre 0 y 'poder de ataque' para el Pokemon A
 * 2. Calcular un número al azar entre 0 y 'poder de defensa' para el Pokemon B
 * 2. El Pokemon A asesta un golpe al Pokemon B. El Pokemon B recibe el siguiente daño: "poder de ataque que ha sacado el Pokemon A - poder de defensa que ha sacado el Pokemon B". Dicha diferencia debemos restarla a la vida total del Pokemon B"

 * Dentro del mismo método 'atacar', muestra por consola cada uno de los pasos tal y como se sugiere en el ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU1MF8xNTc3MzM3OQ 

*/

class Pokemon {

    constructor(id, nombre, tipos, vida, ataque, defensa){
        this.id = id
        this.nombre = nombre
        this.tipos = tipos
        this.vida = vida
        this.ataque = ataque
        this.defensa = defensa
    }

    atacar(objetivo){
        console.log("-------------------------------------------------");
        console.log(`${this.nombre} esta atacando a ${objetivo.nombre}`);

        // Conseguimos de forma aleatoria los puntos de ataque.
        let randomAtaque = getRandom(0,this.ataque);
        console.log(`${this.nombre} hace ${randomAtaque} de daño a ${objetivo.nombre}`);

        // Conseguimos de forma aleatoria los puntos de defensa.
        let randomDefensa = getRandom(0,objetivo.defensa);
        console.log(`${objetivo.nombre} se defiende con ${randomDefensa}`);        

        // Controlamos que el ataque sea superior a la defensa
        if(randomAtaque >= randomDefensa){
            // Restamos el ataque a la defensa para conseguir los puntos de daño
            let damage = randomAtaque-randomDefensa;

            objetivo.vida = objetivo.vida - damage;
            // Narración de quitar vida
            console.log(`la vida de ${objetivo.nombre} se reduce a ${objetivo.vida}`);
        }
    }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49);
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65);

bulbasaur.atacar(squirtle);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}