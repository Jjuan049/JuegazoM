let tarjetasDestapadas =0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let remporizador = false

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
numeros = numeros.sort(()=>{return Math.random()-0.5})
console.log(numeros);

function destapar (id){
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

if(tarjetasDestapadas==1){
    tarjeta1=document.getElementById(id);
    primerResultado=numeros[id]
    tarjeta1.disable=true;
}else if (tarjetasDestapadas ==2){
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id]
    tarjeta2.innerHTML = segundoResultado;

    tarjeta2.disable = true;

    movimientos ++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    if(primerResultado == segundoResultado){
        tarjetasDestapadas = 0;
        aciertos++
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

        if(aciertos ==8){
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😎`
            mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😁🙌`
        }
    }else{
        setTimeout (()=>{
            tarjeta1.innerHTML = ' ';
            tarjeta2.innerHTML = ' ';
            tarjeta1.disable = false;
            tarjeta2.disable = false;
            tarjetasDestapadas = 0;

        },800);
    }
}

}