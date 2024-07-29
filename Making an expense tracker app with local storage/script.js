let expenses = [];
let totalAmount = 0;

const amountInput = document.getElementById('amount-input');
const descriptionText = document.getElementById('description');
const categorySelect = document.getElementById('category-select');
const addBtn = document.getElementById('add-btn');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click',function(){
    const amount = Number(amountInput.value);
    const descriptionIn = Text(descriptionText.value);
    const category = categorySelect.value;
    if(isNaN(amount) || amount <= 0){
        alert("Please enter a valid amount");
        return;
    }
    if(descriptionIn === ''){
        alert("Please enter a description");
        return; 
    }
    if (category === ''){
        alert("Please select a category");
        return;
    }
    expenses.push({amount, descriptionIn, category});
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();

    const amountCell = newRow.insertCell();
    const descriptionCell = newRow.insertCell();
    const categoryCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);
        totalAmount-=expense.amount;
        totalAmountCell.textContent = totalAmount;
        expenseTableBody.removeChild(newRow);   
    });
    const expense = expenses[expenses.length-1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    datacell.textContent = expense.date
    deleteCell.appendChild(deleteBtn);
    
});

for(const expense of expenses){
    totalAmount += expense.amount;
    totalAmountCell.textContent =   totalAmount;

    const newRow = expenseTableBody.insertRow();

    const amountCell = newRow.insertCell();
    const descriptionCell = newRow.insertCell();
    const categoryCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);
        totalAmount-=expense.amount;
        totalAmountCell.textContent = totalAmount;
        expenseTableBody.removeChild(newRow);   
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    datacell.textContent = expense.date
    deleteCell.appendChild(deleteBtn);

}