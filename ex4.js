/**
 * Un pokemon solo puede realizar un ataque especial cada 3 ataques normales. 
 * 
 * Modifica el constructor para guardar la información necesaria para controlar cuando es que el pokemon puede usar su ataque especial
 * 
 * Deberás modificar el método 'atacar' para que, una vez ataque normal, cuente como carga del ataque especial.
 * 
 * Y a su vez, deberás modificar 'ataqueEspecial' para que 'resetee' el contador de ataques
 * 
 * Ejemplo: https://oscarm.tinytake.com/tt/NTAxMzU3OV8xNTc3MzUwMQ
 *  
 * 
 */

class Pokemon {

    constructor(id, nombre, tipos, vida, ataque, defensa, especial) {
        this.id = id
        this.nombre = nombre
        this.tipos = tipos
        this.vida = vida
        this.ataque = ataque
        this.defensa = defensa
        this.especial = especial
        this.carga = 0
    }

    atacar(objetivo, incremento = 0) {
        console.log("-------------------------------------------------");
        console.log(`${this.nombre} esta atacando a ${objetivo.nombre}`);

        // Con esto incrementamos el contador de carga de ataque especial en 1.
        if (this.carga < 3) {
            this.carga = this.carga + 1;
        }

        console.log(`La carga de ${this.nombre} aumenta hasta ${this.carga}`)

        // Conseguimos de forma aleatoria los puntos de ataque.
        let randomAtaque = getRandom(0, this.ataque);

        if (incremento > 0) {
            console.log(`${this.nombre} utiliza ${this.especial.especial} contra ${objetivo.nombre}`);
            randomAtaque = randomAtaque * incremento;
        }

        console.log(`${this.nombre} hace ${randomAtaque} de daño a ${objetivo.nombre}`);

        // Conseguimos de forma aleatoria los puntos de defensa.
        let randomDefensa = getRandom(0, objetivo.defensa);
        console.log(`${objetivo.nombre} se defiende con ${randomDefensa}`);

        // Controlamos que el ataque sea superior a la defensa
        if (randomAtaque >= randomDefensa) {
            // Restamos el ataque a la defensa para conseguir los puntos de daño
            let damage = randomAtaque - randomDefensa;

            objetivo.vida = objetivo.vida - damage;
            // Narración de quitar vida
            console.log(`la vida de ${objetivo.nombre} se reduce a ${objetivo.vida}`);
        }
    }

    ataqueEspecial(objetivo) {
        if (this.carga >= 3) {
            this.carga = 0;
            this.atacar(objetivo, this.especial.incremento);
        } else {
            console.log(`el ataque especial de ${this.nombre} no esta cargado`);
        }
    }
}

/* Funcion para sacar los numeros aleatorios. */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49, { especial: "Hoja Afilada", incremento: 1.5 });
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, { especial: "Latigo Cepa!", incremento: 1.5 });




// TESTS: El primer araque especial deberia fallar tal y como se muestra en el ejemplo!
bulbasaur.ataqueEspecial(squirtle);
bulbasaur.atacar(squirtle);
bulbasaur.atacar(squirtle);
bulbasaur.atacar(squirtle);
bulbasaur.ataqueEspecial(squirtle);





