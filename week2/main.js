// pull existing expenses from storage
// update checkbox
// if checkbox is checked, show input form

// pull state of the checkbox from storage
// render expenses

// when enter button is clicked
//      get form content
//      update LS with form content
//      reset the form
//      re-render expenses list

import { saveExpense } from "./expenseTracker.mjs";

let checkState = localStorage.getItem("checkState");
const inputCheckbox = document.querySelector("#allowInput");
inputCheckbox.checked = checkState === "true" ? true : false;
console.log(checkState);

function toggleInput() {
  if (inputCheckbox.checked) {
    document.querySelector("#input").classList.remove("hide");
  } else {
    document.querySelector("#input").classList.add("hide");
  }
  localStorage.setItem("checkState", inputCheckbox.checked ? "true" : "false");
}

function saveHandler(e) {
  const description = document.querySelector("#description");
  const amount = document.querySelector("#amount");
  const newExpense = {
    description: description.value,
    amount: amount.value,
  };
  saveExpense(newExpense);
  description.value = "";
  amount.value = "";
}

inputCheckbox.addEventListener("change", toggleInput);
document.querySelector("#submit").addEventListener("click", saveHandler);
