const btnSubmit = document.getElementById("btn_submit");
const inputElements = document.getElementsByClassName("inputs");
const validElement = document.getElementById("valid_message");

function validateInput() {
  let isValid = true;

  Array.from(inputElements).forEach((inputElement) => {
    const userInput = inputElement.value;
    let errorMessage = "";
    if (userInput === "") {
      errorMessage = inputElement.placeholder + " cannot be empty";
      isValid = false;
    }
    console.log(errorMessage);
    if (isValid) {
      validElement.textContent = "Validation successful!";
      validElement.style.color = "green";
    } else {
      if (!inputElement.classList.contains("red_placeholder")) {
        inputElement.placeholder = errorMessage;
        inputElement.classList.add("red_placeholder");
      }
    }
  });
}

btnSubmit.addEventListener("click", validateInput);
