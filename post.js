console.log(urlJSON['Station']);
console.log(urlJSON['Status']);
console.log(urlJSON['Comment']);

// var locationGPSBotList = 
// {
//   "Tin Shui Wai":{"GPS":{"Lat":22.4477,"Long":114.00400000000002},"BotToken":"FI4Rvw0zDi4aHC99R8nr"},
//   "Yuen Long":{"GPS":{"Lat":22.4461,"Long":114.03499999999997},"BotToken":"9D7shUGZ9x9dDtPgttOb"},
//   "Long Ping":{"GPS":{"Lat":22.447682517080697,"Long":114.02546882629394},"BotToken":"F4rK7vwoJELnIizSJvFp"},
//   "Siu Hong":{"GPS":{"Lat":22.411782326705474,"Long":113.97899150848388},"BotToken":"6UbGwV5uylwARxkFoYoY"},
//   "Tuen Mun":{"GPS":{"Lat":22.394880239860974,"Long":113.97311210632324},"BotToken":"BO1RJMHSqifoav9eySwJ"},
//   "Kam Sheung Road":{"GPS":{"Lat":22.434791252075236,"Long":114.06349182128906},"BotToken":""},
//   "Tsuen Wan West":{"GPS":{"Lat":22.36845173361036,"Long":114.10962581634521},"BotToken":""},
//   "Mei Foo":{"GPS":{"Lat":22.33759228736289,"Long":114.1379714012146},"BotToken":""},
//   "Nam Cheong":{"GPS":{"Lat":22.32679482923836,"Long":114.15367841720581},"BotToken":""},
//   "Austin":{"GPS":{"Lat":22.3052966666944,"Long":114.1661024093628},"BotToken":""},
//   "East Tsim Sha Tsui":{"GPS":{"Lat":22.29483422136273,"Long":114.17341947555542},"BotToken":""},
//   "Hung Hom":{"GPS":{"Lat":22.30335114793344,"Long":114.18144464492798},"BotToken":""}
// }

console.log(locationGPSBotList[urlJSON['Station']].GPS["Lat"]);

var url = 'https://demo.thingsboard.io:443/api/v1/'+locationGPSBotList[urlJSON['Station']].BotToken+'/telemetry';
var data = {"Station":urlJSON['Station'],"Latitude":locationGPSBotList[urlJSON['Station']].GPS["Lat"],"Longitude":locationGPSBotList[urlJSON['Station']].GPS["Long"],"Status":urlJSON['Status'],"Comment":urlJSON['Comment']};

//var url = 'https://demo.thingsboard.io:443/api/v1/VdmXEJGmafDt4ag8IcTJ/telemetry';
//var data = {"username": "example"};
//var data = {"Station":"Tin Shui Wai","Latitude":22.4477,"Longitude":114.00400000000002,"Status":"Police","Comment":"TSW hi comment here"};
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json'); // This one sends body


console.log(data);
console.log(JSON.stringify(data));


//headers: myHeaders,
//body: "{\"Username\":\"example\"}",
//{  "content-type": "application/json"},


fetch(url, {
  method: "POST",
  body:  JSON.stringify(data),  
  headers: myHeaders,
  mode: "no-cors"
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response);
 

//window.location.replace("https://hkstationreport.github.io/");
