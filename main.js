const chars= "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM/;[]\\{}|1234567890!@#$%^&*()-=+:";


var t = setInterval(function() { 
let thestring = "";
for(let i = 0 ; i <9964; i++)
{
var randomNumber = Math.round( Math.random() * (chars.length-1) );
thestring += chars[randomNumber];
}
const frt = document.getElementById('charChanger');
frt.innerHTML = thestring;
}, 25); 
