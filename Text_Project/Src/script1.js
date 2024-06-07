function Input_string() {
  const userInput = document.getElementById("input-text").value; // Get user input
  document.getElementById("run-text").innerHTML = userInput;
  updateAnimation(document.getElementById("textSpeed").value);
}

function showSpeedValue(value) {
  document.getElementById("speedValue").textContent = value;
}

function updateSpeed(value) {
  showSpeedValue(value);
  updateAnimation(value);
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".common-btn");
  const scrollingText = document.getElementById("run-text");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const computedStyle = getComputedStyle(button);
      const backgroundColor = computedStyle.backgroundColor;
      const backgroundImage = computedStyle.backgroundImage;

      if (backgroundImage !== "none") {
        scrollingText.style.backgroundImage = backgroundImage;
        scrollingText.style.backgroundColor = ""; // Clear any solid color
      } else {
        scrollingText.style.backgroundColor = backgroundColor;
        scrollingText.style.backgroundImage = ""; // Clear any gradient
      }
    });
  });

  document.getElementById("textSize").addEventListener("input", (e) => {
    scrollingText.style.fontSize = `${e.target.value}px`;
  });

  document.getElementById("textColor").addEventListener("input", (e) => {
    scrollingText.style.color = e.target.value;
  });

  document.getElementById("fontFamily").addEventListener("change", (e) => {
    scrollingText.style.fontFamily = e.target.value;
  });

  document.getElementById("textStyle").addEventListener("change", (e) => {
    const style = e.target.value.toLowerCase();
    scrollingText.style.fontWeight = style === "bold" ? "bold" : "normal";
    scrollingText.style.fontStyle = style === "italic" ? "italic" : "normal";
    scrollingText.style.textDecoration = ["underline", "line through"].includes(
      style
    )
      ? style
      : "none";
  });

  document.getElementById("bgColor").addEventListener("input", (e) => {
    scrollingText.style.backgroundColor = e.target.value;
  });

  var blinkElement = document.getElementById("run-text");
  var blinkSpeedInput = document.getElementById("blinkSpeed");
  var isVisible = true;
  var interval;

  function updateBlinkSpeed() {
    var speed = blinkSpeedInput.value;
    clearInterval(interval);
    if (speed > 0) {
      interval = setInterval(function () {
        if (isVisible) {
          blinkElement.style.visibility = "hidden";
        } else {
          blinkElement.style.visibility = "visible";
        }
        isVisible = !isVisible;
      }, 1000 / speed); // Adjust blink speed based on input value
    } else {
      blinkElement.style.visibility = "visible"; // Ensure text is visible if speed is 0
    }
  }

  blinkSpeedInput.addEventListener("input", updateBlinkSpeed);
  updateBlinkSpeed(); // Initialize with the default value

  function updateSpeed(value) {
    updateAnimation(value);
  }

  function showSpeedValue(value) {
    document.getElementById("speedValue").textContent = value;
  }

  function updateSpeed(value) {
    showSpeedValue(value);
    updateAnimation(value);
  }

  function updateAnimation(speed = 3) {
    // Remove the existing style element if it exists
    var existingStyle = document.getElementById("animation-style");
    if (existingStyle) {
      existingStyle.remove();
    }

    var style = document.createElement("style");
    style.id = "animation-style";
    var position = "right";
    var textWidth = document.querySelector(".scrolling-text").offsetWidth;

    // Define specific durations for each speed level with more pronounced differences
    var durations = {
      1: 20, // Slowest
      2: 15,
      3: 10, // Moderate
      4: 6,
      5: 2,
      6: 0.5, // Fastest
    };

    var animationDuration = durations[speed];
    style.innerHTML = `
        @keyframes my-animation {
            0% { ${position}: -${textWidth + 10}px; }
            100% { ${position}: 100%; }
        }
        .scrolling-text {
            animation: my-animation ${animationDuration}s linear infinite;
        }`;
    document.head.append(style);
  }

  // Initialize the animation with default speed
  updateAnimation();

  document.getElementById("scrollDirection").addEventListener("change", (e) => {
    scrollingText.style.animationDirection =
      e.target.value === "normal" ? "normal" : "reverse";
  });

  document.getElementById("run-b").addEventListener("click", () => {
    const htmlContent = runText.outerHTML;
    localStorage.setItem("run-text", htmlContent);
    window.location.href = "display.html";
  });
});

/*
const button = document.querySelector(".common-btn .t1");
const scrollingText = document.getElementById("run-text");
button.addEventListener("click", function () {
  const checkbtn = button.classList.contains("t1");
  scrollingText.classList.add("t1"); // Add the matching class to scrollingText
});
*/
/*
function changeBackgroundColor(element) {
  // Get the scrolling text element (assuming its class is 'scrolling-text')
  const scrollingText = document.querySelector("scrolling-text");

  // Get the background color of the clicked button (assuming the child class with color is 'button-color')
  const buttonColor =
    element.querySelector(".common-btn").style.backgroundColor;

  // Set the background color of the scrolling text to the button's color
  scrollingText.style.backgroundColor = buttonColor;
}

// Add click event listeners to all buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", () => changeBackgroundColor(button))
);
*/

/*
const classToCheck = [
  "t1",
  "t2",
  "t3",
  "t4",
  "t5",
  "t6",
  "t7",
  "t8",
  "t9",
  "t10",
  "t11",
  "t12",
  "t13",
  "t14",
  "t15"
];

button.addEventListener("click", function () {
  // Check if any class from classToCheck exists on the button
  for (let i = 0; i < classToCheck.length; i++) {
    if (button.classList.contains(classToCheck[i])) {
      scrollingText.classList.add(classToCheck[i]); // Add the matching class to scrollingText
      break; // Stop iterating after finding a matching class (optional)
      // You can add additional logic here if you only want to apply one class
    }
  }
});
*/
