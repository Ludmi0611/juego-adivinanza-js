let numeroEntrada= document.getElementById('numeroEntrada');
let numeroAzar= Math.floor(Math.random()*100)+1; //el random *100 me va a dar un numero entre 0 y 99, yo quiero que sea entre 1 y 100
let mensaje=document.getElementById('mensaje');

function chequearNumero(){
    let numeroIngresado= parseInt(numeroEntrada.value);

    if(numeroIngresado<1 || numeroIngresado>100 || isNaN(numeroIngresado)){
        mensaje.textContent='Por favor, introduce un numero del 1 al 100';
        return
    }
    if(numeroIngresado===numeroAzar){
        mensaje.textContent='¡Felicidades! Has adivinado el número';
        mensaje.style.color='green';
        numeroEntrada.disabled=true; // es para que no pueda ingresar mas numeros en el input

    }else if(numeroIngresado<numeroAzar){
        mensaje.textContent='El número es mas alto'
        mensaje.style.color='red'
    }else{
        mensaje.textContent='El número es mas bajo'
        mensaje.style.color='red'
    }
}