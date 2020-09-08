var numero = Math.floor(Math.random() * 11);
var nap1 = document.getElementById('napp1');
var nap2 = document.getElementById('napp2');
var nap3 = document.getElementById('napp3');
var nap4 = document.getElementById('napp4');
var nap5 = document.getElementById('napp5');
var nap6 = document.getElementById('napp6');
var nap7 = document.getElementById('napp7');
var nap8 = document.getElementById('napp8');
var nap9 = document.getElementById('napp9');
var nap10 = document.getElementById('napp10');

if (numero == 0){
  numero = 1;
}

function start1(){
  var arvaus;
  arvaus = 1;
  if (arvaus < numero){
    alert('Syöttämäsi numero on liian pieni.');
    nap1.style.visibility = "hidden";
  }else if (arvaus > numero){
    alert('Syöttämäsi numero on liian suuri.');
    nap1,nap2,nap3,nap4,nap5,nap6,nap7,nap8,nap9,nap10.style.visibility = "hidden";
  }else if (arvaus == numero){
    alert('Arvasit oikein!!');
  }
}
function start2(){
  var arvaus;
  arvaus = 2;
  if (arvaus < numero){
    alert('Syöttämäsi numero on liian pieni.');
  }else if (arvaus > numero){
    alert('Syöttämäsi numero on liian suuri.');
  }else if (arvaus == numero){
    alert('Arvasit oikein!!');
  }
}
function start3(){
  var arvaus;
  arvaus = 3;
  if (arvaus < numero){
    alert('Syöttämäsi numero on liian pieni.');
  }else if (arvaus > numero){
    alert('Syöttämäsi numero on liian suuri.');
  }else if (arvaus == numero){
    alert('Arvasit oikein!!');
  }
}
function start4(){
  var arvaus;
  arvaus = 4;
  if (arvaus < numero){
    alert('Syöttämäsi numero on liian pieni.');
  }else if (arvaus > numero){
    alert('Syöttämäsi numero on liian suuri.');
  }else if (arvaus == numero){
    alert('Arvasit oikein!!');
  }
}
function start5(){
  var arvaus;
  arvaus = 5;
  if (arvaus < numero){
    alert('Syöttämäsi numero on liian pieni.');
  }else if (arvaus > numero){
    alert('Syöttämäsi numero on liian suuri.');
  }else if (arvaus == numero){
    alert('Arvasit oikein!!');
  }
}
function start6(){
  var arvaus;
  arvaus = 6;
  if (arvaus < numero){
    alert('Syöttämäsi numero on liian pieni.');
  }else if (arvaus > numero){
    alert('Syöttämäsi numero on liian suuri.');
  }else if (arvaus == numero){
    alert('Arvasit oikein!!');
  }
}
function start7(){
  var arvaus;
  arvaus = 7;
  if (arvaus < numero){
    alert('Syöttämäsi numero on liian pieni.');
  }else if (arvaus > numero){
    alert('Syöttämäsi numero on liian suuri.');
  }else if (arvaus == numero){
    alert('Arvasit oikein!!');
  }
}
function start8(){
  var arvaus;
  arvaus = 8;
  if (arvaus < numero){
    alert('Syöttämäsi numero on liian pieni.');
  }else if (arvaus > numero){
    alert('Syöttämäsi numero on liian suuri.');
  }else if (arvaus == numero){
    alert('Arvasit oikein!!');
  }
}
function start9(){
  var arvaus;
  arvaus = 9;
  if (arvaus < numero){
    alert('Syöttämäsi numero on liian pieni.');
  }else if (arvaus > numero){
    alert('Syöttämäsi numero on liian suuri.');
  }else if (arvaus == numero){
    alert('Arvasit oikein!!');
  }
}
function start10(){
  var arvaus;
  arvaus = 10;
  if (arvaus < numero){
    alert('Syöttämäsi numero on liian pieni.');
  }else if (arvaus > numero){
    alert('Syöttämäsi numero on liian suuri.');
  }else if (arvaus == numero){
    alert('Arvasit oikein!!');
  }
}
