const plus = document.querySelector("#plus")
const num = document.querySelector("#num")
const minus = document.querySelector("#minus")

let aux = 1

function increment() {
    aux++
    aux = (aux < 10) ? "0" + aux : aux
    num.innerHTML = aux
}

function decrement() {
    if (aux > 1) {
        aux--
        aux = (aux < 10) ? "0" + aux : aux
        num.innerHTML = aux
    }
}