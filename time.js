document.write("Test2");

//TODO
//https://www.sciencedirect.com/topics/engineering/local-solar-noon

//var url = 'http://worldclockapi.com/api/json/utc/now';
var url = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today';
var UTC;
//console.log(getTime());
var d = new Date();
var n = d.getTime(); 
console.log(d);
console.log(n);


fetch(url).then(res => res.json())

.catch(error => console.error('Error:', error))

.then(function(response) {
   console.log("Hello");
    console.log(response);
    UTC = response;
    console.log(UTC);
 });

