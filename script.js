"use strict";

//lenght password
var e = document.getElementById("list");
let object = {x:""}

//deafult value
object.x = "12"

e.onchange = function(){
  object.x = e.options[e.selectedIndex].text;
}

//function that generetate password
function genPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = parseInt(object.x)
    let passwordLength = result;
    let password = "";
 for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
    document.getElementById("passw").value = password;      
 }


 //when button generate is clicked called a function 
document.getElementById("btn-generate").onclick = genPassword


//function copy
let copy = document.getElementById('btn-copy');

copy.onclick = () => {
  const textArea = document.getElementById('passw')
  textArea.select();
  document.execCommand("copy")
}










