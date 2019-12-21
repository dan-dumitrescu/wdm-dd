var prenume = prompt('Prenume?');
var nume = prompt('Nume?');
var Varsta = prompt('Varsta?');
var clasa = prompt('In ce clasa esti');
var prenumeT = prompt('Prenumele tatalui tau?');

alert('Bravo');

var a = false;
var b = false;
var c = false;
var d = false;

if (nume[0] === prenume[0]) {
  a = true;
}

if (Varsta > 14 && Varsta < 18) {
  b = true;
}

if (clasa >= 9 && clasa <= 12) {
  c = true;
}

if (prenumeT[prenumeT.length - 1] === 'n') {
  d = true;

}

if (a && b && c && d) {
  console.log('Bravo!Ti-ai dat seama de indicii si ai trecut testul');
} else {
  console.log(' Try again');
}