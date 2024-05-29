var result = document.getElementById("input-box")
function getNumber(num) {
    result.value += num;
}

function getResult() {
    result.value = eval(result.value)
}

function getClear() {
    result.value = " ";
}

function oneByOneDel() {
    result.value = result.value.slice(0, -1)
}
