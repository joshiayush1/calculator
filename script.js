const nos = document.querySelectorAll(".numbers input");

nos.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    responding(evt.target.value);
  });
});

const inputNos = document.querySelector(".inputNo input");

let responding = (value) => {
  switch (value) {
    case "AC":
      clearInput();
      break;
    case "DE":
      deleteLast();
      break;
    case ".":
    case "/":
    case "7":
    case "8":
    case "9":
    case "*":
    case "4":
    case "5":
    case "6":
    case "-":
    case "1":
    case "2":
    case "3":
    case "+":
    case "00":
    case "0":
      appendToInput(value);
      break;
    case "=":
      calculateResult();
      break;
    default:
      // Handle other cases if needed
      break;
  }
};

let clearInput = () => {
  inputNos.value = "";
};

let deleteLast = () => {
  inputNos.value = inputNos.value.slice(0, -1);
};

let appendToInput = (value) => {
  inputNos.value += value;
};

//if user will not type valid calculations it will throw error
let calculateResult = () => {
  try {
    inputNos.value = eval(inputNos.value);
    if (isNaN(inputNos.value) || !isFinite(inputNos.value)) {
      throw new Error("Invalid calculation");
    }
  } catch (error) {
    inputNos.value = "Error";
  }
};
