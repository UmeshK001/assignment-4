(function(window) {
          var byeSpeaker = {}
          var speakWord = "Goodbye";
          byeSpeaker.speak = function(names) {
              console.log(speakWord + " " + name);
          }
          window.byeSpeaker = byeSpeaker;
      }
  )(window);