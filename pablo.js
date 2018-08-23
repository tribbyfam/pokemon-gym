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

            pokemon = new Pokemon(res.name, res.stats[5].base_stat, res.stats[4].base_stat, res.stats[3].base_stat, abilitiesArr, sprite);
            trainer.pokemons.push(pokemon);

            //generate content
            let container = document.getElementById("container");
            container.innerHTML += `
            <div class="col s12 m4 ">
            <div class="card">
                <div class="card-image cardImage" style="background-image: url(${backgroundArr[Math.floor(Math.random() * Math.floor(backgroundArr.length))]})">
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padId(id)}.png">
                    <span class="card-title card-title-style">${pokemon.name}</span>
                </div>
                <div class="card-content">
                    <div class="card-panel red">HP: ${pokemon.hp}</div>
                    <div class="card-panel red lighten-1">Att: ${pokemon.attack}</div>
                    <div class="card-panel red lighten-2">Def: ${pokemon.defense}</div>
                    <div class="card-panel red lighten-3">
                        <div class="responsive-table table-status-sheet">
                            <table class="bordered">
                                <thead>
                                    <tr>
                                        <th class="center">Abilities:</th>
                                        <th id="totalRepos" class="center"></th>
        
                                    </tr>
                                </thead>
                                <tbody id="tbody${id}">
        
                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                    <div class="card-action">
                        <img src=${sprite}></img>   
                        <img src=${sprite}></img>                       
                        <img src=${sprite}></img>                       
                
                    </div>
                </div>
            
                                    `;


            const tbody = document.getElementById(`tbody${id}`);

            pokemon.abilities.forEach(element => {
                let tr = document.createElement("tr");
                tr.innerHTML = `<td>
                                <a href="">
                                    <div>${element}</div>
                                </a>
                            </td>`;
                tbody.appendChild(tr);
            });


        })
        .catch(err => {
            console.log("Err!!!", err);

        });
}
class Trainer {
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

class Pokemon {
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
let trainer = new Trainer("Pablo", []);
createPokemon(6);
createPokemon(39);
createPokemon(151);


// setTimeout(() => {
//     console.log(trainer.get("mew"));
// }, 3000);