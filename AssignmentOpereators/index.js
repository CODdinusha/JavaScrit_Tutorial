function TotalCount() {
    let Price = document.getElementById('txtprice').value
    let QTY = document.getElementById('txtqty').value

    let Total = Price * QTY;
    document.getElementById('totl').value = Total;
}

let button = document.getElementById('btncl');
button.addEventListener('click',TotalCount) 
