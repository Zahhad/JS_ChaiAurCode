let transactions = JSON.parse(localStorage.getItem("transactions")) || []

function addExpense(){
    const category = document.getElementById("category").value
    const amount = document.getElementById("amount").value

    if (category && amount){
        const transaction = {category, amount: parseFloat(amount)}
        transactions.push(transaction)
        localStorage.setItem("transactions", JSON.stringify(transactions))
        displayTransactions()
        document.getElementById("category").value = ""
        document.getElementById("amount").value = ""

    }
}

function displayTransactions(){
    const list = document.getElementById("transactionList")
    list.innerHTML = ""
    transactions.forEach((tx, index) => {
        const item = document.createElement("li")
        item.textContent = `${tx.category}: $${tx.amount.toFixed(2)}`
        list.appendChild(item)
    })

}

displayTransactions()