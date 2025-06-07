let count = 0
let countEl= document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count +=1
    countEl.textContent = count
    console.log("Increment clicked, count is now:", count);
}
function save() {
    let countStr = count + '-'
    saveEl.textContent += countStr
    count = 0
    alert('helo')
}
