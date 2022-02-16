document.getElementById('calculate-btn').addEventListener('click', function(){

    // Income
    const incomeInput = document.getElementById('my-income');
    const incomeText = incomeInput.value;
    const incomeAmount = parseInt(incomeText);
    console.log(incomeAmount);

    // Food Expenses 
    const food = document.getElementById('food-expense');
    const foodText = food.value;
    const foodExpenses = parseFloat(foodText);

    // Rent Expenses
    const rent = document.getElementById('rent-expense');
    const rentText = rent.value;
    const rentExpenses = parseFloat(rentText);

    // Clothes Expenses
    const clothes = document.getElementById('clothes-expense');
    const clothesText = clothes.value;
    const clothesExpenses = parseFloat(clothesText);

    // Total Expenses
    const totalExpenseInput = document.getElementById('total-expense');
    const totalExpenseText = totalExpenseInput.innerText;
    const totalAmount = parseFloat(totalExpenseText);
    const allExpense = foodExpenses + rentExpenses + clothesExpenses;
    totalExpenseInput.innerText = allExpense;
     console.log(allExpense);

    // Total Balance
    const totalBalanceInput = document.getElementById('total-balance');
    const totalBalanceText = totalBalanceInput.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    const totalBalance = incomeAmount - allExpense
    totalBalanceInput.innerText = totalBalance;
     console.log(totalBalanceInput);
   });