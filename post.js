console.log(urlJSON['Station']);
console.log(urlJSON['Status']);
console.log(urlJSON['Comment']);

// var locationGPSBotList = 
// {
//   "Tin Shui Wai":{"GPS":{"Lat":22.4477,"Long":114.00400000000002},"BotToken":"FI4Rvw0zDi4aHC99R8nr"}
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
.then(function(response) {
    console.log(response);
    window.location.replace("https://hkstationreport.github.io/?submit=ok&msg=Submitted "+urlJSON['Station']+" --> "+urlJSON['Status']);
 });


//.then(response => console.log('Success:', response);
 

//window.location.replace("https://hkstationreport.github.io/");
