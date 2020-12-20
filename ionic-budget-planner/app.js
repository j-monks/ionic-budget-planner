const expenseInput = document.querySelector("#input-expense");
const amountInput = document.querySelector("#input-amount");
const clearBtn = document.querySelector("#btn-clear");
const addBtn = document.querySelector("#btn-add");
const expensesList = document.querySelector("#expenses-list")
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;

const clear = () => {
  expenseInput.value = "";
  amountInput.value = "";
}

addBtn.addEventListener("click", () => {
  const enteredExpense = expenseInput.value;
  const enteredAmount = amountInput.value;
  // validation guards so you can't add an expense if nothing is typed/amount is zero
  if (
    enteredExpense.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredExpense + ": £" + enteredAmount;

  expensesList.appendChild(newItem);
  // '+' in front of the entered amount variable changes the value from input element when its fetched (string)
  // which is default, to a number
  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

clearBtn.addEventListener("click", clear);

