const expenseInput = document.querySelector("#input-expense");
const amountInput = document.querySelector("#input-amount");
const clearBtn = document.querySelector("#btn-clear");
const addBtn = document.querySelector("#btn-add");

addBtn.addEventListener("click", () => {
  const enteredExpense = expenseInput.value;
  const enteredAmount = amountInput.value;
  // guards so you can't add an expense if nothing is typed/amount is zero
  if (
    enteredExpense.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }
  console.log(enteredExpense, enteredAmount);
});
