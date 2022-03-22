/**
 * Los pokemons puedes realizar un ataque especial cada cierto tiempo.
 * Implementa un nuevo método de nombre "ataqueEspecial". 
 * 
 * Modifica el constructor para que ahora podamos pasarle otro parámetro que es un OBJETO. Dicho objeto tiene dos propiedades. Por ejemplo: 
 * 
 * {
 *   especial: "Hoja afilada",
 *   incremento: 1.5
 * }
 *  
 * Implementa un nuevo método además de nombre "ataqueEspecial". 
 * Este método de momento hará exactamente lo msimo que el método "ataque"; pero multiplica el daño producido por el valor de la propiedad 'incremento'
 * 
 * PIENSA BIEN como puedes reprovechar el método "atacar" para modificarlo de tal manera que ahora tenga en cuenta el modificador 'incremento'
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
    }

    atacar(objetivo, incremento = 0) {        
        console.log("-------------------------------------------------");        
        console.log(`${this.nombre} esta atacando a ${objetivo.nombre}`);

        // Conseguimos de forma aleatoria los puntos de ataque.
        let randomAtaque = getRandom(0, this.ataque);

        if(incremento > 0){
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

    ataqueEspecial(objetivo){                
        this.atacar(objetivo, this.especial.incremento);
    }
}

let bulbasaur = new Pokemon(1, "Bulbasaur", ['Grass', 'Poison'], 45, 49, 49, {especial:"Hoja Afilada", incremento: 1.5});
let squirtle = new Pokemon(1, "Squirtle", ['Water'], 44, 48, 65, {especial:"Latigo Cepa!", incremento: 1.5});

bulbasaur.atacar(squirtle);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//bulbasaur.atacar(squirtle)
bulbasaur.ataqueEspecial(squirtle)



