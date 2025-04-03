function calculateTip(){
    let billAmount  = parseFloat(document.getElementById("bill").value)
    let tipPercentage = parseFloat(document.getElementById("tip").value)

    if (isNaN(billAmount ) || isNaN(tipPercentage)) {
        alert("Please Enter a Valid Number.")
        return
    }

    let tipAmount = (billAmount / 100) * tipPercentage;
    let totalAmount = billAmount  + tipAmount;

    document.getElementById("total").innerText = `Total: $${totalAmount.toFixed(2)}`
}

