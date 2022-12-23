window.onload = function(){
    document.getElementById("likesNeil").innerHTML = 9;
    document.getElementById("likesNichole").innerHTML = 12;
    document.getElementById("likesJim").innerHTML = 9;
}

function aumentar(persona){
    if (persona==='Neil'){
        let cant = document.getElementById("likesNeil").innerHTML; 
        cant = Number(cant);
        cant += 1;
        document.getElementById("likesNeil").innerHTML = cant;
    } 
    else if (persona==='Nichole') {
        let cant = document.getElementById("likesNichole").innerHTML;
        cant = Number(cant);
        cant += 1;
        document.getElementById("likesNichole").innerHTML = cant;
    }
    else{
        let cant = document.getElementById("likesJim").innerHTML;
        cant = Number(cant);
        cant += 1;
        document.getElementById("likesJim").innerHTML = cant;
    }
}