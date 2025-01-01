const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const totalExpense = document.getElementById('totalExpense');

let totalAmount = 0;

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const location = document.getElementById('expenseLocation').value;
    const date = document.getElementById('expenseDate').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);

    // Update total amount
    totalAmount += amount;
    totalExpense.textContent = `Total Expense: ₹${totalAmount.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).slice(1)}`;

    // Create a new expense item element
    const expenseItem = document.createElement('div');
    expenseItem.classList.add('expense-item');
    expenseItem.innerHTML = `
        <span>${location} - ${date}</span>
        <span>₹${amount.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).slice(1)}</span>
    `;

    // Append new item to the expense list
    expenseList.appendChild(expenseItem);

    // Clear input fields
    expenseForm.reset();
});
