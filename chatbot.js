// Play video 

document.addEventListener("DOMContentLoaded", () => {
  const chatbotBtn = document.getElementById("chatbot-btn");
  const videoContainer = document.getElementById("video-container");
  const chatbotVideo = document.getElementById("chatbot-video");
  let chatbotActive = false;
  let recognition = new webkitSpeechRecognition();

  // Initially hide the video container
  videoContainer.style.display = "none";

  // Add click event listener to the chatbot button
  chatbotBtn.addEventListener("click", () => {
    if (!chatbotActive) {
      // Show the video container
      videoContainer.style.display = "block";

      // Generate voice response
      const speech = new SpeechSynthesisUtterance();
      speech.text = "Welcome to sub-k pay app, how can I assist you ?";
      speech.lang = "en-US";
      speech.volume = 1; // 0 to 1
      speech.rate = 1; // 0.5 to 2
      speech.voice = window.speechSynthesis.getVoices().filter(voice => voice.lang === 'en-US' && voice.name.includes('Female'))[0]; // Set female voice
      speech.onstart = () => {
        // Play the video when speech starts
        chatbotVideo.loop = true; // Enable looping
        chatbotVideo.play(); // Play the video
      };
      speech.onend = () => {
        // Pause the video when speech is finished
        chatbotVideo.pause();
        
        // Turn on the mic and listen for the user's query
        recognition.lang = "en-US";
        recognition.maxResults = 10;
        recognition.onresult = (event) => {
          const query = event.results[0][0].transcript.toLowerCase();
          console.log(`User's query: ${query}`);

          if (query.includes("pay emi")) {
            const response = new SpeechSynthesisUtterance();
            response.text = "Script 1 is playing";
            response.lang = "en-US";
            response.volume = 1; // 0 to 1
            response.rate = 1; // 0.5 to 2
            response.voice = window.speechSynthesis.getVoices().filter(voice => voice.lang === 'en-US' && voice.name.includes('Female'))[0]; // Set female voice
            response.onstart = () => {
              chatbotVideo.play();
            };
            response.onend = () => {
              chatbotVideo.pause();
            };
            window.speechSynthesis.speak(response);
          } else {
            const response = new SpeechSynthesisUtterance();
            response.text = "I didn't get it, say again";
            response.lang = "en-US";
            response.volume = 1; // 0 to 1
            response.rate = 1; // 0.5 to 2
            response.voice = window.speechSynthesis.getVoices().filter(voice => voice.lang === 'en-US' && voice.name.includes('Female'))[0]; // Set female voice
            response.onstart = () => {
              chatbotVideo.play();
            };
            response.onend = () => {
              chatbotVideo.pause();
              recognition.start();
            };
            window.speechSynthesis.speak(response);
          }
        };
        recognition.onerror = (event) => {
          console.log(`Error occurred: ${event.error}`);
        };
        recognition.onstart = () => {
          console.log("Listening...");
        };
        recognition.start();
      };

      // Speak the text
      window.speechSynthesis.speak(speech);

      chatbotActive = true;
    } else {
      // Hide the video container
      videoContainer.style.display = "none";

      // Pause the video
      chatbotVideo.pause();

      // Stop listening for the user's query
      recognition.stop();

      chatbotActive = false;
    }
  });
});