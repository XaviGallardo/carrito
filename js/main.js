// var price = document.getElementsByClassName('price')[0];
// console.log(price.innerHTML);

// var inputNumber = document.getElementById('quantity');
// console.log(inputNumber.value);

var calculateButton = document.getElementById('calculateButton');
console.log(calculateButton);

calculateButton.onclick = function() {
    var producto = document.getElementsByClassName('producto');
    for (var i = 0; i < producto.length; i++) {
        var price = document.getElementsByClassName('price')[i].innerText;
        var inputNumber = document.getElementsByTagName('input')[i].value;
        var total = price * inputNumber;
        var totalPriceProduct = document.getElementsByClassName('totalPriceProduct')[i];
        totalPriceProduct.innerHTML = total;
    }

};

function deleteProduct(event) {
    // var padre = document.querySelector('.btn-danger').parentElement.parentElement;
    var productDelete = event.target.parentElement.parentElement;
    var productList = document.getElementById('productList');
    // productList.removeChild(productDelete);
    productDelete.remove();
}

var deleteButtons = document.getElementsByClassName('btn-danger');
for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteProduct;
}

