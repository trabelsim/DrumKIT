// This part loops through the amount (length) of items of class name : drum
// Inside the for loop we go through each element and add the event listener

for(var i=0; i<document.querySelectorAll(".drum").length ; i++){
    // when the element is "clicked" then the function handleClick is called
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        playMusic1(buttonInnerHTML);
        effectButtonMode(buttonInnerHTML);
})
}

// this second eventlistener is listening for keyboard press
// what we call in case a key was pressed is the anonymous function with event as argument
document.addEventListener("keydown",function(event){
    // the argument provided has many parameters inside and what we want is .key
    playMusic1(event.key);
    effectButtonMode(event.key);
})


function playMusic1(arg1){
    // the text is taken from the argument provided
    switch(arg1){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log("Undefined");

    }
}


function effectButtonMode(keypassed){
    pressedButton = document.querySelector("."+keypassed);
    pressedButton.classList.add("pressed");

    setTimeout(function(){
        pressedButton.classList.remove("pressed")
    }, 100)
}