window.onload = function(){

}

console.log("page loaded...");
function playVid(element){
    element.play();
    document.getElementById("video").muted = true;
}

function pauseVid(element){
    element.pause();
}