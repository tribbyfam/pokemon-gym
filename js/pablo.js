M.AutoInit();

function createPokemon(id) {
    let pokemon;
    //random background
    let backgroundArr = [
        "https://www.fg-a.com/wallpapers/white-marble-1-2018.jpg",
        "https://img.freepik.com/free-vector/bright-background-with-dots_1055-3132.jpg?size=338&ext=jpg",
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg",
        "https://png.pngtree.com/thumb_back/fw800/back_pic/03/70/72/5257b6c12d89875.jpg",
        "https://www.planwallpaper.com/static/images/violet-vector-leaves-circles-backgrounds-for-powerpoint_PdfkI4q.jpg",
        "https://wallpaperhd.wiki/wp-content/uploads/pokemon-backgrounds-for-desktop-38201982-pokemon-wallpaper-hd-TzWVBX.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWspAUi1oleLgEO4n5zZBtQJ8nxQ9BSxBew9I3w-RdgRsi7bc",
        "https://motionarray.imgix.net/preview-75762-mWCVVwqEKJ_0000.jpg?w=750&q=60&fit=max&auto=format",
        "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/EQMOWcXPx/rotating-bright-yellow-background-with-circles-summer-sun-endless-loop_b3xin9uy__F0000.png",
        "https://media.gettyimages.com/photos/yellow-paper-background-picture-id472090033?b=1&k=6&m=472090033&s=612x612&w=0&h=FZYDkVKg4XNgUFVUl_C5cN1sBzRKM2v_c8DZfbgz-EU="

    ];

    axios.get(`https://fizal.me/pokeapi/api/${id}.json`)
        .then(result => {
            let res = result.data;

            //get abilities
            let abilitiesArr = [];
            res.abilities.forEach(element => {
                abilitiesArr.push(element.ability.name);
            });
            //get sprites
            let sprite = `https://img.pokemondb.net/sprites/black-white/anim/normal/${res.name}.gif`;

            pokemon = new Pokemon2(res.name, res.stats[5].base_stat, res.stats[4].base_stat, res.stats[3].base_stat, abilitiesArr, sprite);
            trainer2.pokemons.push(pokemon);

            // anna's code
            if (id === 6) {
                document.getElementById("hp-charizard").innerHTML = pokemon.hp
                document.getElementById("attack-charizard").innerHTML = pokemon.attack
                document.getElementById("defence-charizard").innerHTML = pokemon.defense
                document.getElementById("abilities-charizard").innerHTML = pokemon.abilities
                console.log(pokemon.name);

            } else if (id === 39) {
                document.getElementById("hp-jigglypuf").innerHTML = pokemon.hp
                document.getElementById("attack-jigglypuf").innerHTML = pokemon.attack
                document.getElementById("defence-jigglypuf").innerHTML = pokemon.defense
                document.getElementById("abilities-jigglypuf").innerHTML = pokemon.abilities
                console.log(pokemon.hp);

            } else if (id === 151) {
                document.getElementById("hp-mew").innerHTML = pokemon.hp
                document.getElementById("attack-mew").innerHTML = pokemon.attack
                document.getElementById("defence-mew").innerHTML = pokemon.defense
                document.getElementById("abilities-mew").innerHTML = pokemon.abilities
                console.log(pokemon.name);


            }

        })
        .catch(err => {
            console.log("Err!!!", err);

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
    constructor(name, hp, attack, defense, abilities, sprite) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        this.sprite = sprite;
    }

    getName() {
        return this.name;
    }
}

//Helper Functions
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
