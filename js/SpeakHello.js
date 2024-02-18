// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
(function () {
    // STEP 3: Create an object called 'helloSpeaker' and attach the 'speak' method
    var helloSpeaker = {};
    helloSpeaker.speak = function(name) {
        console.log("Hello " + name);
    };

    // STEP 4: Rewrite the 'speak' function to be attached to the helloSpeaker object
    var speakWord = "Hello";

    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };

    // STEP 5: Expose the 'helloSpeaker' object to the global scope
    window.helloSpeaker = helloSpeaker;
})();
