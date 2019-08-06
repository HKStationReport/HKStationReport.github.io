//var url = 'http://demo.thingsboard.io:80/api/v1/VdmXEJGmafDt4ag8IcTJ/telemetry';
var url = 'https://postman-echo.com/post';
var data = {username: 'example'};
//var data = {'Station':'Tin Shui Wai','Latitude':22.4477,'Longitude':114.00400000000002,'Status':'Police','Comment':'TSW hi comment here'};
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json'); // This one sends body


console.log(data);
console.log(JSON.stringify(data));

//body:  JSON.stringify(data),
//headers: myHeaders,
fetch(url, {
  method: "POST",
  body: "{\"username\":\"example\"}",
  headers: {
  "content-type": "application/json"
},
  mode: "cors"
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
