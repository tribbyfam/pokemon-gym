// all initializers for materialize
M.AutoInit();


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
  constructor(name, hp, attack, defend, abilities, picture, height, weight, move, accuracy, power, priority){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defend = defend;
    this.abilities = abilities;
    this.picture = picture;
    this.height = height;
    this.weight = weight;
    this.move = move;
    this.accuracy = accuracy;
    this.power = power;
    this. priority = priority;
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
  let myHeight = res.height;
  let myWeight = res.weight;
  let myExtra = res.moves[1].move;
  let myMove = myExtra.name;
  let myUrl = myExtra.url;
  
  
 let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }

  axios.get(myUrl)
  .then(function (response) {
    let extraRes = response.data;
   
    let myAccuracy = extraRes.accuracy;
    let myPower = extraRes.power;
    let myPriority = extraRes.priority;
      // console.log(myPower)

  let myAbilities = newArray;
  let pokemon251 = new Pokemon( myPokeName,myHp,myAttack,myDefence,myAbilities, myPic, myHeight, myWeight, myMove, myAccuracy, myPower, myPriority)
 
  document.getElementById("hp-celebi").innerHTML=`${myHp}`
  document.getElementById("attack-celebi").innerHTML=`${myAttack}`
  document.getElementById("defence-celebi").innerHTML=`${myDefence}`
  document.getElementById("abilities-celebi").innerHTML=`${myAbilities}`
  document.getElementById("height-celebi").innerHTML=`${myHeight}`
  document.getElementById("weight-celebi").innerHTML=`${myWeight}`
  document.getElementById("move-celebi").innerHTML=`${myMove}`
  document.getElementById("accuracy-celebi").innerHTML=`${myAccuracy}`
  document.getElementById("power-celebi").innerHTML=`${myPower}`
  document.getElementById("priority-celebi").innerHTML=`${myPriority}`

  trainer.pokemon.push(pokemon251);
  });
 
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
  let myHeight = res.height;
  let myWeiht = res.weight;
  let myExtra = res.moves[1].move;
  let myMove = myExtra.name;
  let myUrl = myExtra.url;

  let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }
  let myAbilities = newArray;

  axios.get(myUrl)
  .then(function (response) {
    let extraRes = response.data;
   
    let myAccuracy = extraRes.accuracy;
    let myPower = extraRes.power;
    let myPriority = extraRes.priority;
      // console.log(myPower)

  let pokemon730 = new Pokemon(myPokeName,myHp,myAttack,myDefence,myAbilities,myPic)

  document.getElementById("hp-primarina").innerHTML=`${myHp}`
  document.getElementById("attack-primarina").innerHTML=`${myAttack}`
  document.getElementById("defence-primarina").innerHTML=`${myDefence}`
  document.getElementById("abilities-primarina").innerHTML=`${myAbilities}`
  document.getElementById("height-primarina").innerHTML=`${myHeight}`
  document.getElementById("weight-primarina").innerHTML=`${myWeiht}`
  document.getElementById("move-primarina").innerHTML=`${myMove}`
  document.getElementById("accuracy-primarina").innerHTML=`${myAccuracy}`
  document.getElementById("power-primarina").innerHTML=`${myPower}`
  document.getElementById("priority-primarina").innerHTML=`${myPriority}`

  trainer.pokemon.push(pokemon730);
  });

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
  let myHeight = res.height;
  let myWeiht = res.weight;
  let myExtra = res.moves[1].move;
  let myMove = myExtra.name;
  let myUrl = myExtra.url;
  
  let newArray = [];
  for (let i=0; i<res.abilities.length; i++) {
    newArray.push(res.abilities[i].ability.name)
  }
  let myAbilities = newArray;

  axios.get(myUrl)
  .then(function (response) {
    let extraRes = response.data;
   
    let myAccuracy = extraRes.accuracy;
    let myPower = extraRes.power;
    let myPriority = extraRes.priority;
      // console.log(myPower)
 
  let pokemon392 = new Pokemon( myPokeName,myHp,myAttack,myDefence,myAbilities,myPic);

  document.getElementById("hp-infernape").innerHTML=`${myHp}`
  document.getElementById("attack-infernape").innerHTML=`${myAttack}`
  document.getElementById("defence-infernape").innerHTML=`${myDefence}`
  document.getElementById("abilities-infernape").innerHTML=`${myAbilities}`
  document.getElementById("height-infernape").innerHTML=`${myHeight}`
  document.getElementById("weight-infernape").innerHTML=`${myWeiht}`
  document.getElementById("move-infernape").innerHTML=`${myMove}`
  document.getElementById("accuracy-infernape").innerHTML=`${myAccuracy}`
  document.getElementById("power-infernape").innerHTML=`${myPower}`
  document.getElementById("priority-infernape").innerHTML=`${myPriority}`

  trainer.pokemon.push(pokemon392);
  });

})

.catch(function (error) {
  console.log(error);
});
