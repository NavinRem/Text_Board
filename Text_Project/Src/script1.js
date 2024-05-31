function Input_string() {
  const userInputElement = document.getElementById("input-text");
  const userInput = userInputElement.value; // Get user input from the element's value
  document.getElementById("run-text").innerHTML = userInput; // Update content with user input
}

function t1btn_change() {
  const runTextElement = document.getElementById("run-text"); // Element where you want the gradient
  const gradientStyleId = "t1"; // ID containing the gradient style

  // Get the element with the gradient style definition
  const gradientStyleElement = document.getElementById(gradientStyleId);

  // Check if the element exists (optional)
  if (gradientStyleElement) {
    const gradientStyle = gradientStyleElement.style.backgroundImage;
    runTextElement.style.backgroundImage = gradientStyle;
  } else {
    console.error(`Element with ID "${gradientStyleId}" not found.`); // Handle error if element doesn't exist
  }
}
