let passwordBox=document.getElementById("password");
let btn=document.querySelector("button");
let img=document.querySelector("img");
let length=12;

let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase="abcdefghijklmnopqrstuvwxyz";
let numbers="0123456789"
let symbols="@#$%^&*()_+~|}}][></-=";

let allChars=upperCase+lowerCase+numbers+symbols;

function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
   
    

    while(length> password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;
}
btn.addEventListener("click",()=>{
    createPassword();
})
img.addEventListener("click",()=>{
    copyPass();
})

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}
