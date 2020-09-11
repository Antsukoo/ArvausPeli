function ScrabblePisteet(){
  var sanaT = document.getElementById('sana').value;
  var pisteet = 0;

  for (var i = 0; i < sanaT.length; i++) {
    switch (sanaT[i]) {
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
      case 'a':
      case 'e':
      case 'i':
      case 'n':
      case 's':
      case 't':
        pisteet++;
        break;
      case 'O':
      case 'Ä':
      case 'K':
      case 'L':
      case 'o':
      case 'ä':
      case 'k':
      case 'l':
        pisteet += 2;
        break;
      case 'U':
      case 'M':
      case 'u':
      case 'm':
        pisteet += 3;
        break;
      case 'Y':
      case 'H':
      case 'J':
      case 'P':
      case 'R':
      case 'V':
      case 'y':
      case 'h':
      case 'j':
      case 'p':
      case 'r':
      case 'v':
        pisteet += 4;
        break;
      case 'Ö':
      case 'D':
      case 'ö':
      case 'd':
        pisteet += 7;
        break;
      case 'B':
      case 'F':
      case 'G':
      case 'b':
      case 'f':
      case 'g':
        pisteet += 8;
        break;
      case 'C':
      case 'c':
        pisteet += 10;
        break;
      default:
        pisteet += 12;

    }
  }
  document.getElementById('Tulos').innerHTML = "<p>Sanan " + sanaT + " pisteet ovat: " + pisteet + "</p>";
}

function LottoNumerot(){
  var num1, num2, num3, num4, num5, num6, num7;

  num1 = Math.floor(Math.random() * 41);
  if (num1 == 0){
    num1 = 1;
  }
  num2 = Math.floor(Math.random() * 41);
  if (num2 == 0){
    num2 = 1;
  }
  num3 = Math.floor(Math.random() * 41);
  if (num3 == 0){
    num3 = 1;
  }
  num4 = Math.floor(Math.random() * 41);
  if (num4 == 0){
    num4 = 1;
  }
  num5 = Math.floor(Math.random() * 41);
  if (num5 == 0){
    num5 = 1;
  }
  num6 = Math.floor(Math.random() * 41);
  if (num6 == 0){
    num6 = 1;
  }
  num7 = Math.floor(Math.random() * 41);
  if (num7 == 0){
    num7 = 1;
  }

  document.getElementById('lotot').innerHTML = '<p>' + num1 + ', ' + num2 + ', ' + num3 + ', ' + num4 + ', ' + num5 + ', ' + num6 + ', ' + num7 + '</p>';

}

function Taulukko(){
  var numerot = [];
  var taulu = '<table border="6">';

  numerot = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  for (var i = 0; i < numerot.length; i++) {
    taulu += '<tr>';
    for (var a = 0; a < numerot[i].length; a++) {
      taulu += '<td>' + numerot[i][a];
    }
  }
  taulu += '</table>';
  document.getElementById('tauluT').innerHTML = taulu;
}

function Kortit(){
  var kortit = [''];
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];

  var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  lasku = 0;

  for (var f = 0; f < maat.length; f++) {
    for (var g = 0; g < numerot.length; g++) {
      if (f == maat.length-1 && g == numerot.length-1){
        kortit[lasku] = maat[f] + numerot[g];
      }
      else{
        kortit[lasku] = maat[f] + numerot[g];
        lasku++;
      }
    }
  }
  var valitutKortit = [];
  for (var p = 0; p < 5; p++) {
    tämä = kortit[Math.floor(Math.random() * 52)];
    valitutKortit[p] = tämä;
  }
  document.getElementById('kortitTulos').innerHTML = '<p>' + valitutKortit + '</p><br> Käytin samoja maamerkkejä kuin tehtävässä... eli kopioin ne MERKIT.';
}
