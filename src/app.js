import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generadorExcusa(opciones){
  return opciones[Math.floor(Math.random() * opciones.length)];
}
window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  let optionwho = generadorExcusa(who);
  let optionaction = generadorExcusa(action);
  let optionwhat = generadorExcusa(what);
  let optionwhen = generadorExcusa(when);
  
  
 let resultado = `${optionwho} ${optionaction} ${optionwhat} ${optionwhen}`;
  document.getElementById("excuse").innerText = resultado
  return resultado
 

};
