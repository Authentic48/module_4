let sayGoodBye = "Good Bye";

function goodbyeSpeaker(){

    this.speak = function speak(name){
        console.log(sayGoodBye + " " + name);
    }
}