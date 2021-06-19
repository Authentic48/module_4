let sayHello = "Hello";

function helloSpeaker(){

    this.speak = function speak(name){
        console.log(sayHello + " " + name);
    }
}