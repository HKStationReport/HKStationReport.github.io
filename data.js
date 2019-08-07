var locationGPSBotList = 

{

  "Tin Shui Wai":{"GPS":{"Lat":22.4477,"Long":114.00400000000002},"BotToken":"FI4Rvw0zDi4aHC99R8nr"},
  "Yuen Long":{"GPS":{"Lat":22.4461,"Long":114.03499999999997},"BotToken":"9D7shUGZ9x9dDtPgttOb"},
  "Long Ping":{"GPS":{"Lat":22.447682517080697,"Long":114.02546882629394},"BotToken":"F4rK7vwoJELnIizSJvFp"},
  "Siu Hong":{"GPS":{"Lat":22.411782326705474,"Long":113.97899150848388},"BotToken":"6UbGwV5uylwARxkFoYoY"},
  "Tuen Mun":{"GPS":{"Lat":22.394880239860974,"Long":113.97311210632324},"BotToken":"BO1RJMHSqifoav9eySwJ"},
  "Kam Sheung Road":{"GPS":{"Lat":22.434791252075236,"Long":114.06349182128906},"BotToken":""},
  "Tsuen Wan West":{"GPS":{"Lat":22.36845173361036,"Long":114.10962581634521},"BotToken":""},
  "Mei Foo":{"GPS":{"Lat":22.33759228736289,"Long":114.1379714012146},"BotToken":""},
  "Nam Cheong":{"GPS":{"Lat":22.32679482923836,"Long":114.15367841720581},"BotToken":""},
  "Austin":{"GPS":{"Lat":22.3052966666944,"Long":114.1661024093628},"BotToken":""},
  "East Tsim Sha Tsui":{"GPS":{"Lat":22.29483422136273,"Long":114.17341947555542},"BotToken":""},
  "Hung Hom":{"GPS":{"Lat":22.30335114793344,"Long":114.18144464492798},"BotToken":""}

};

var keys = Object.keys(locationGPSBotList); //not work
console.log('keys contains ' + keys.length + ' keys: '+  keys);
console.log(keys[0]);



var autoComplete = {};

for(var i = 0; i < keys.length; i++){
  autoComplete.push(keys[i], null);
}
console.log(autoComplete);

var autoComplete = {
        "Tin Shui Wai": null,
        "Yuen Long": null,
        "Siu Hong": null,
        "Long Ping": 'https://placehold.it/250x250'
        };

console.log(autoComplete);
