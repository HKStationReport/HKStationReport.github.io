var url = 'http://demo.thingsboard.io:80/api/v1/VdmXEJGmafDt4ag8IcTJ/telemetry';
//var data = {"username": "example"};
var data = {"Station":"Tin Shui Wai","Latitude":22.4477,"Longitude":114.00400000000002,"Status":"Police","Comment":"TSW hi comment here"};
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
  mode: "cors"
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
