function Input_string() {
  const userInputElement = document.getElementById("input-text");
  const userInput = userInputElement.value; // Get user input from the element's value
  document.getElementById("run-text").innerHTML = userInput; // Update content with user input
}

function t1btn_change() {
  const textElement = document.getElementById("run-text");
  const buttonElement = document.getElementById("t1");

  // Get class names from the button
  const buttonClasses = buttonElement.classList;

  // Assuming the styles for "run-text" are defined in a class
  for (let i = 0; i < buttonClasses.length; i++) {
    const className = buttonClasses[i];
    textElement.classList.add(className);
  }
}
