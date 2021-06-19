let goodByePerson = new goodbyeSpeaker();
let helloPerson = new helloSpeaker();


(function() {

    let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (let i = 0; i < names.length; i++) {

        let firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            goodByePerson.speak(names[i]);
        } else {
            helloPerson.speak(names[i]);
        }
    }
})();