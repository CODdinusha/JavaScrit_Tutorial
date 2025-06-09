function AddNumbers(a,b,callback) {
    let sum;
    sum = a + b;
    callback(sum)
}
function result(p1) {
    document.getElementById('results').textContent = p1;
}
AddNumbers(23,12,result);