
let sumScore1 = document.getElementById("scoreHome")
let sumScore2 = document.getElementById("scoreGuest")
sumScore1.textContent = 0
sumScore2.textContent = 0
let count1 = 0
let count2 = 0

function homeAdd1() {
    count1 += 1
    sumScore1.textContent = count1   
}

function homeAdd2() {
    count1 += 2
    sumScore1.textContent = count1
}

function homeAdd3() {
    count1 += 3
    sumScore1.textContent = count1 
}

function guestAdd1() {
    count2 += 1
    sumScore2.textContent = count2 
}

function guestAdd2() {
    count2 += 2
    sumScore2.textContent = count2
}

function guestAdd3() {
    count2 += 3
    sumScore2.textContent = count2 
}

let saveEl = document.getElementById("save-el")

function scoreRecord() {
    let scoreStr = count1 + ":" + count2 + "     "
    saveEl.textContent += scoreStr
    sumScore1.textContent = 0
    sumScore2.textContent = 0
    count1 = 0
    count2 = 0

}


