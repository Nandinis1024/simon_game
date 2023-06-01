// document.querySelectorAll("button").forEach(function(button) {
//     button.addEventListener("click", respond);
//   });
  
//   function respond() {
//     alert("hello")// Code for the click event response
//   }

let c = document.querySelectorAll("button");
c.forEach(function(element) {
  element.addEventListener("click", function() {
    let text = this.innerHTML;
    makesound(text);
    buttonanimation(text);
  });
});


document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonanimation(event.key);
});



function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('/Drum Kit Starting Files/sounds/tom-1.mp3');
            tom1.play();
            
            break;

        case "a":
            var tom2 = new Audio('/Drum Kit Starting Files/sounds/tom-2.mp3');
            tom2.play();
                
            break;
        case "s":
            var tom3 = new Audio('/Drum Kit Starting Files/sounds/tom-3.mp3');
            tom3.play();
                
            break;
        case "d":
            var tom4 = new Audio('/Drum Kit Starting Files/sounds/tom-4.mp3');
            tom4.play();
                    
            break; 
        case "j":
            var snare = new Audio('/Drum Kit Starting Files/sounds/snare.mp3');
            snare.play();
                    
            break;
        case "k":
            var kick = new Audio('/Drum Kit Starting Files/sounds/kick-bass.mp3');
            kick.play();
                        
            break;
        case "l":
            var crash = new Audio('/Drum Kit Starting Files/sounds/crash.mp3');
            crash.play();
                        
            break;                                              
            
        default:
            break;
    }

}

function buttonanimation (value){
    let activebutton = document.querySelector("."+value);
    activebutton.classList.add("pressed");
    
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 100);
        
    }


