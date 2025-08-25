//Calculator
//By Allan
//Date: June 2024
//Version: 1.0
//Description: A simple web-based calculator using HTML, CSS, and JavaScript.

const display = document.getElementById("display");

      function appendToDisplay(value) {
        if (display.value === "Error !!") {
          display.value = value;
        } else {
          display.value += value;
        }
      }

      function clearDisplay() {
        display.value = "";
      }

      function calculate() {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error !!";
        }
      }

      function backspace() {
        display.value = display.value.slice(0, -1);
      }