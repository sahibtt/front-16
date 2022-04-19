var amount = document.getElementById("amount");
var interest = document.getElementById("interest");
var months = document.getElementById("months");
var result1 = document.getElementById("monthlyAmount");
var result2 = document.getElementById("totalAmount");
function calculate() {
    if (amount.value == "" || interest.value == "" || months.value == "") {
        alert("Please fill in all fields");
    } else if(amount.value>30000 || amount.value<1 || interest.value>27 || interest.value<14 || months.value>60 || months.value<1) {
        alert("Please enter a valid number");
    }else{
        var totalAmount = parseInt(amount.value)+parseInt(amount.value*(interest.value/100));
        console.log(amount.value);
        var monthlyAmount = totalAmount/months.value;
    }
    result1.innerHTML = monthlyAmount + " AZN";
    result2.innerHTML = totalAmount + " AZN";
}