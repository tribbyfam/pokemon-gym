// all initializers for materialize
M.AutoInit();
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, 'isFixed');
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, 'responsiveThreshold', 100);
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, 'outDuration');
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, 'duration', 1500);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, 'accordion');
});




class Trainer{
  constructor(firstName="Blue", lastName="Catchum", pokemon=[]){
    this.firstName=firstName;
    this.lastName= lastName;
    this.pokemon = pokemon;
  }

  // add(pokemon){
  //   this.data.push(pokemon)
  // }
  get(name){
    return this.pokemon.find((element) =>{
      return element.name == name
    })
  }
}

class Pokemon {
  constructor(name, hp, attack, defend, abilities, picture){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defend = defend;
    this.abilities = abilities;
    this.picture = picture;
  }

  grab () {
  let pokeName = document.getElementById("poke-name");
  let pokeHpStats = document.getElementById("poke-hp");
  let pokeAttackStats = document.getElementById("poke-attack");
  let pokeDefenceStats = document.getElementById("poke-defence");
  let pokeAbilities = document.getElementById("poke-abilities");
  let pokeImages = document.getElementById("poke-cards");
  
  
  pokeImages.setAttribute("src", this.picture)
 

  pokeName.innerHTL = `${this.name}`;
  pokeHpStats.innerHTML = `${this.hp}`;
  pokeAttackStats.innerHTML = `${this.attack}`;
  pokeDefenceStats.innerHTML = `${this.defend}`;
  pokeAbilities.innerHTML = `${this.abilities}`;

  }
  
}
  
let trainer = new Trainer();


// api calls requesting data for Celebi

  axios.get('https://fizal.me/pokeapi/api/251.json')
.then(function (response) {
  let res = response.data;
  let myPokeName = res.name;
  // console.log(res);
  let myHp = res.stats[5].base_stat;
  let myAttack = res.stats[4].base_stat;
  let myDefence = res.stats[3].base_stat;
  let myPic = res.sprites.front_default;
  
 let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }
  let myAbilities = newArray;
  let pokemon251 = new Pokemon( myPokeName,myHp,myAttack,myDefence,myAbilities, myPic)
 
  document.getElementById("p251").addEventListener("click", function (){
    trainer.get('celebi').grab();  
  });

  // let event = document.getElementById("p251");

  // for(let i=0; i<btns.length; i++){
  //   event[i].addEventListener("click",function(){
  //     let current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className += " active";
  //   });
  // }

  document.getElementById("p251").addEventListener("click", function(){
    let event = document.getElementById("p251");
    
  //  changing attribute of pagination colors
    if("class"!=="active grey"){
      event.setAttribute("class", "active grey");
    } else {
      event.setAttribute("class"," ");
    }
  });

  trainer.pokemon.push(pokemon251);
  pokemon251.grab();
  console.log(`trainer1`, trainer);
})

.catch(function (error) {
  console.log(error);
});


// api calls for Primarina

axios.get('http://fizal.me/pokeapi/api/730.json')
.then(function (response) {

  let res = response.data;
  let myPokeName = res.name;
  let myHp = res.stats[5].base_stat;
  let myAttack = res.stats[4].base_stat;
  let myDefence = res.stats[3].base_stat;
  let myPic = res.sprites.front_default;


  let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }
  let myAbilities = newArray;

  let pokemon730 = new Pokemon(myPokeName,myHp,myAttack,myDefence,myAbilities,myPic)


  trainer.pokemon.push(pokemon730);
  pokemon730.grab();

 
  document.getElementById("p730").addEventListener("click", function (){
    trainer.get('primarina').grab();  
  });

   
  // let event = document.getElementById("p730");
 
  // for(let i=0; i<btns.length; i++){
  //   event[i].addEventListener("click",function(){
  //     let current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className += " active";
  //   });
  // }

  // document.getElementById("p730").addEventListener("click", function(){
  //   let event = document.getElementById("p730");
    
  //   if("class"!=="active grey"){
  //     event.setAttribute("class", "active grey");
  //   } else {
  //     event.setAttribute("class"," ");
  //   }
  // });
})

.catch(function (error) {
  console.log(error);
});




// // // api calls for Infernape


axios.get('http://fizal.me/pokeapi/api/392.json')
.then(function (response) {
  let res = response.data;
  let myPokeName = res.name;
  let myHp = res.stats[5].base_stat;
  let myAttack = res.stats[4].base_stat;
  let myDefence = res.stats[3].base_stat;
  let myPic = res.sprites.front_default;

  console.log("HELLO");
  
  let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }
  let myAbilities = newArray;
 
  let pokemon392 = new Pokemon( myPokeName,myHp,myAttack,myDefence,myAbilities,myPic);
console.log("2222222222222");

  document.getElementById("p392").addEventListener("click", function (){
    trainer.get('infernape').grab(); 
  });
  console.log("33333333333");

  // let event = document.getElementById("p392");
 
  // for(let i=0; i<btns.length; i++){
  //   event[i].addEventListener("click",function(){
  //     let current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className += " active";
  //   });
  // }

  // document.getElementById("p392").addEventListener("click", function(){
  //   let event = document.getElementById("p392");
  //   console.log("444444444444");

  //   if("class"!=="active grey"){
  //     event.setAttribute("class", "active grey");
  //   } else {
  //     event.setAttribute("class"," ");
  //   }
  // });
  

  trainer.pokemon.push(pokemon392);
  pokemon392.grab();
  console.log("trainer1===========");
})

.catch(function (error) {
  console.log(error);
});




console.log(trainer);