M.AutoInit();

function createPokemon(id) {
    let pokemon;

    axios.get(`https://fizal.me/pokeapi/api/${id}.json`)
        .then(result => {
            let res = result.data;
            console.log(res);

            //get abilities
            let abilitiesArr = [];
            res.abilities.forEach(element => {
                abilitiesArr.push(element.ability.name);
            });
            //get sprites
            let sprite = `https://img.pokemondb.net/sprites/black-white/anim/normal/${res.name}.gif`;
            axios.get(res.moves[0].move.url)
                .then(result2 => {
                    let res2 = result2.data;

                    pokemon = new Pokemon2(res.name, res.stats[5].base_stat, res.stats[4].base_stat, res.stats[3].base_stat, abilitiesArr, sprite, res.height, res.weight, res.moves[0].move.name, res2.accuracy, res2.power, res2.priority);
                    trainer2.pokemons.push(pokemon);

                    // anna's code
                    if (id === 6) {
                        document.getElementById("hp-charizard").innerHTML = pokemon.hp
                        document.getElementById("attack-charizard").innerHTML = pokemon.attack
                        document.getElementById("defence-charizard").innerHTML = pokemon.defense
                        document.getElementById("abilities-charizard").innerHTML = pokemon.abilities

                        document.getElementById("height-charizard").innerHTML = pokemon.height;
                        document.getElementById("weight-charizard").innerHTML = pokemon.weight;
                        document.getElementById("move-charizard").innerHTML = pokemon.move;
                        document.getElementById("accuracy-charizard").innerHTML = pokemon.accuracy;
                        document.getElementById("power-charizard").innerHTML = pokemon.power;
                        document.getElementById("priority-charizard").innerHTML = pokemon.priority;
                    } else if (id === 39) {
                        document.getElementById("hp-jigglypuf").innerHTML = pokemon.hp
                        document.getElementById("attack-jigglypuf").innerHTML = pokemon.attack
                        document.getElementById("defence-jigglypuf").innerHTML = pokemon.defense
                        document.getElementById("abilities-jigglypuf").innerHTML = pokemon.abilities

                        document.getElementById("height-jigglypuf").innerHTML = pokemon.height;
                        document.getElementById("weight-jigglypuf").innerHTML = pokemon.weight;
                        document.getElementById("move-jigglypuf").innerHTML = pokemon.move;
                        document.getElementById("accuracy-jigglypuf").innerHTML = pokemon.accuracy;
                        document.getElementById("power-jigglypuf").innerHTML = pokemon.power;
                        document.getElementById("priority-jigglypuf").innerHTML = pokemon.priority;
                    } else if (id === 151) {
                        document.getElementById("hp-mew").innerHTML = pokemon.hp
                        document.getElementById("attack-mew").innerHTML = pokemon.attack
                        document.getElementById("defence-mew").innerHTML = pokemon.defense
                        document.getElementById("abilities-mew").innerHTML = pokemon.abilities

                        document.getElementById("height-mew").innerHTML = pokemon.height;
                        document.getElementById("weight-mew").innerHTML = pokemon.weight;
                        document.getElementById("move-mew").innerHTML = pokemon.move;
                        document.getElementById("accuracy-mew").innerHTML = pokemon.accuracy;
                        document.getElementById("power-mew").innerHTML = pokemon.power;
                        document.getElementById("priority-mew").innerHTML = pokemon.priority;
                    }
                })
                .catch(err => {
                    console.log("Err res2!!!", err);

                });
        })
        .catch(err => {
            console.log("Err!!!res!!!", err);
        });
}
class Trainer2 {
    constructor(name, pokemons) {
        this.name = name;
        this.pokemons = pokemons;
    }

    all() {

        return this.pokemons;
    }
    get(name) {
        this.pokemons.forEach(ele => {
            if (name === ele.name) {
                return ele;
            }
        });
    }

}

class Pokemon2 {
    constructor(name, hp, attack, defense, abilities, sprite, height, weight, move, accuracy, power, priority) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        this.sprite = sprite;
        this.weight = weight;
        this.height = height;
        this.move = move;
        this.accuracy = accuracy;
        this.power = power;
        this.priority = priority;
    }

    getName() {
        return this.name;
    }
}

//Helper Function
let padId = id => {
    let s = id + "";
    while (s.length < 3) {
        s = "0" + s;
    }
    return s;
};
let trainer2 = new Trainer2("Pablo", []);
createPokemon(6);
createPokemon(39);
createPokemon(151);