window.onload = function (){
    document.getElementById("myBtn").addEventListener("click", hola)
    document.getElementById("myBtn").addEventListener("mouseover", myFunction)
    document.getElementById("myBtn").addEventListener("click", someOtherFunction)
    document.getElementById("myBtn").addEventListener("mouseout", anotherFunction)
}

function hola(){ 
    var x = prompt("Hola! Soy un pop-up!","Anota tu nombre")
    document.getElementById("demo").innerHTML += "Hola " + x + "!<br>"
}

function myFunction() {
    document.getElementById("demo").innerHTML += "Moused over!<br>"
    this.style.backgroundColor = "red"
    body.style.backgroundColor = "lightblue"
}

function someOtherFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>"
    this.style.backgroundColor = "blue"
    body.style.backgroundColor = "lightyellow"
}

function anotherFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>"
    this.style.backgroundColor = "gold"
    body.style.backgroundColor = "lightgreen"
}
