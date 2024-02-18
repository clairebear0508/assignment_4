// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function () {
    // STEP 7: Create an object called 'byeSpeaker' and attach the 'speak' method
    var byeSpeaker = {};
    byeSpeaker.speak = function(name) {
        console.log("Good Bye " + name);
    };

    // STEP 8: Rewrite the 'speak' function to be attached to the byeSpeaker object
    var speakWord = "Good Bye";

    byeSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };

    // STEP 9: Expose the 'byeSpeaker' object to the global scope
    window.byeSpeaker = byeSpeaker;
})();
