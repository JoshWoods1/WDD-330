function renderExpenses(expenses) {
    const html = expenses.map(expenseTemplate);
    document.querySelector(".outputBody").innerHTML = html.join("");

}

function expenseTemplate(expense) {
    return ` <tr>
    <td>${expense.description}</td>
    <td>${expense.amount}</td>
    <td>$10</td>
  </tr>`
}

export function saveExpense(expense) {
    console.log("Save")
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses(expenses);
}