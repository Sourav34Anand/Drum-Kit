function hehe(){
    var bthtm = this.innerHTML;
    switch(bthtm){
        case "w":
            var audio1 = new Audio("./sounds/tom-4.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("./sounds/tom-3.mp3");
            audio2.play();
            break;
            case "s":
            var audio3 = new Audio("./sounds/tom-2.mp3");
            audio3.play();
            break;
            case "j":
            var audio5 = new Audio("./sounds/snare.mp3");
            audio5.play();
            break;
            case "k":
            var audio6 = new Audio("./sounds/kick-bass.mp3");
            audio6.play();
            break;
            case "l":
            var audio7 = new Audio("./sounds/crash.mp3");
            audio7.play();
            break;


    }
    makeAnimation(bthtm);
}
//keyboard check is done below
for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",hehe);
}
document.addEventListener("keypress",function(event){
    abc(event.key);
    makeAnimation(event.key);

}

);

function abc(key){
    switch(key){
        case "w":
            var audio1 = new Audio("./sounds/tom-4.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("./sounds/tom-3.mp3");
            audio2.play();
            break;
            case "s":
            var audio3 = new Audio("./sounds/tom-2.mp3");
            audio3.play();
            break;
            case "j":
            var audio5 = new Audio("./sounds/snare.mp3");
            audio5.play();
            break;
            case "k":
            var audio6 = new Audio("./sounds/kick-bass.mp3");
            audio6.play();
            break;
            case "l":
            var audio7 = new Audio("./sounds/crash.mp3");
            audio7.play();
            break;
    }
}
function makeAnimation(keya){
    var bt = document.querySelector("."+keya);
     bt.classList.add("pressed");
     //timeout after this for a delay and then remove the class
     setTimeout(function (){
        bt.classList.remove("pressed");
     },100);
    }