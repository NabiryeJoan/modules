//require("./bat")
//require("./spi")
//we are importing two module with same code
const superHero=require('./super-hero')
console.log(superHero.getName());
superHero.setName('superman');
console.log(superHero.getName());
const newsuperHero=require('./super-hero')
console.log(newsuperHero.getName());
//here we talk about the console 