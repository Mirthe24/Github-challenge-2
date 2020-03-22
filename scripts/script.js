
//klok
function klok() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(klok, 500);
}
// 0 toevoegen 
function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

 

//achtergrond die verandert met de tijd 
var today = new Date();
  var h = today.getHours();
 
 var background = document.getElementById('bg');

h = 23
switch(true) {
case (h > 21):
    background.classList.add('night');
    break;
case (h < 6):
    background.classList.add('night');
    break;
case (h > 17):
    background.classList.add('evening');
    break;
case (h > 11):
    background.classList.add('afternoon');
    break;
case (h > 5) :
    background.classList.add('morning');
    break;
}

