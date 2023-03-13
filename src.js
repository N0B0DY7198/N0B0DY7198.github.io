// Create a container for the prompt
const promptContainer = document.createElement("div");
promptContainer.style.position = "fixed";
promptContainer.style.top = 0;
promptContainer.style.left = 0;
promptContainer.style.width = "100%";
promptContainer.style.height = "100%";
promptContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
promptContainer.style.display = "flex";
promptContainer.style.alignItems = "center";
promptContainer.style.justifyContent = "center";

// Create the prompt element
const promptText = document.createElement("h1");
promptText.innerText = "Continue";

// Create the button to confirm
const confirmButton = document.createElement("button");
confirmButton.innerText = "OK";
confirmButton.style.marginLeft = "20px";

// Add the prompt and button to the container
promptContainer.appendChild(promptText);
promptContainer.appendChild(confirmButton);

// Add the container to the page
document.body.appendChild(promptContainer);

// When the button is clicked, check if the prompt text is correct
confirmButton.addEventListener("click", () => {
  if (promptText.innerText.toLowerCase() === "continue") {
    // Add fading rainbow effect to the background
    const body = document.querySelector("body");
    const colors = ["#FF2C55", "#FFD200", "#23FF00", "#00FFE9", "#8200FF"];
    let currentColor = 0;
    setInterval(() => {
      currentColor = (currentColor + 1) % colors.length;
      body.style.background = `linear-gradient(to right, ${colors[currentColor]}, ${colors[(currentColor + 1) % colors.length]})`;
    }, 500);
    
    // Remove the prompt container
    promptContainer.remove();
  }
});
