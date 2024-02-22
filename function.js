// // Function declaration
// function startFan() {
//   console.log("press the switch");
// }
// // call the function
// startFan();

// console.log("sumi");
// console.log("Asha moni");
// console.log("mim");
// startFan();

// function startFan(taka) {
//   console.log(taka);
//   console.log("Mama singara den");
// }

// var money = 230;
// startFan(money);

function bringSingara(taka) {
  console.log("Singara er jonno dise", taka);
  console.log("Mama singara den");
  var singaraPrice = 10;
  var singaraQuantity = taka / singaraPrice;
  return singaraQuantity;
}

var money = 230;
var singara = bringSingara(money);
console.log("Mama ai nen singara", singara);
