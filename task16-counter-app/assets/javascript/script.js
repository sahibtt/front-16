var myNumber = document.getElementById("counterValue");
if (myNumber.textContent==null) {
    myNumber.textContent = 0;
}
function decreasing() {
    myNumber.textContent = parseInt(myNumber.textContent) - 1;
}
function increasing() {
    myNumber.textContent = parseInt(myNumber.textContent) + 1;
}
function reseting() {
    myNumber.textContent = 0;
}