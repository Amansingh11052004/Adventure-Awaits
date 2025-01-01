// Expense Tracker Logic

document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseTable = document.getElementById('expense-table').getElementsByTagName('tbody')[0];
    const totalAmountElement = document.getElementById('total-amount');

    let expenses = [];
    let totalAmount = 0;

    expenseForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('expense-name').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);
        const date = document.getElementById('expense-date').value;

        if (name && amount && date) {
            addExpense(name, amount, date);
        }

        expenseForm.reset();
    });

    function addExpense(name, amount, date) {
        const expense = { name, amount, date };
        expenses.push(expense);

        // Update table
        const row = expenseTable.insertRow();
        row.insertCell(0).textContent = name;
        row.insertCell(1).textContent = amount.toFixed(2);
        row.insertCell(2).textContent = date;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            row.remove();
            removeExpense(amount);
        });
        row.insertCell(3).appendChild(deleteBtn);

        updateTotalAmount(amount);
    }

    function removeExpense(amount) {
        totalAmount -= amount;
        totalAmountElement.textContent = totalAmount.toFixed(2);
    }

    function updateTotalAmount(amount) {
        totalAmount += amount;
        totalAmountElement.textContent = totalAmount.toFixed(2);
    }
});