const button = document.getElementById("chatbot-btn");
  const videoContainer = document.getElementById("video-container");
  const video = document.getElementById("chatbot-video");

  // Add click event listener to the button
  button.addEventListener("click", () => {
    // Check if the video container is hidden
    if (videoContainer.style.display === "none") {
      videoContainer.style.display = "block"; // Show the video container
      video.play(); // Start playing the video
    }
  });