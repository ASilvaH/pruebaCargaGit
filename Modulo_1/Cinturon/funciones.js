window.onload = function (){
    document.getElementById("btn3").addEventListener("click", desaparecer)
    document.getElementById("marcadorNinjas").innerHTML = 214;
    document.getElementById("marcadorPiratas").innerHTML = 159;
    document.getElementById("btn1").innerText = "Sign In";
    document.getElementById("timeRemaining").innerText = "0:13";
    setTimeout(tiempoFuera, 13000);
}

function desaparecer(){
    let bg4 = document.getElementById("lowerLeft").style.visibility = "hidden";
}

function aumentar(equipo){
    if (equipo==='N'){
        let cant = document.getElementById("marcadorNinjas").innerHTML; 
        cant = Number(cant);
        cant += 1;
        document.getElementById("marcadorNinjas").innerHTML = cant;
    } 
    else if (equipo==='P') {
        let cant = document.getElementById("marcadorPiratas").innerHTML;
        cant = Number(cant);
        cant += 1;
        document.getElementById("marcadorPiratas").innerHTML = cant;
    }
}

function tiempoFuera(){
        
let cantN = document.getElementById("marcadorNinjas").innerHTML;
let cantP = document.getElementById("marcadorPiratas").innerHTML;

    if (cantN > cantP){
        winner = 'Ninjas'
    }
    else if (cantP > cantN){
        winner = 'Pirates'
    }
    else {
        alert('It is a draw!')
    }
    alert('The ' + winner + ' have won!')
}