function createNewRow(productName, productDescription, price, currency, quantity) {
    let cartRow = `<div class="row">
            <div class="col-2"><img class="img-responsive" src="http://placehold.it/100x70">
            </div>
            <div class="col-4">
                <h4 class="product-name">
                    <strong>${productName}</strong></h4>
                    <h4><small>${productDescription}</small>
                </h4>
            </div>
            <div class="col-6">
                <div class="col-12 text-right">
                    <h6><strong>${price}<span class="text-muted">${currency}</span></strong></h6>
                </div>
                <div class="col-2 float-end">
                    <input type="text" class="form-control input-sm" value="${quantity}">
                </div>
                <div class="col-12">
                    <button type="button" class="btn btn-link btn-xs align-text-bottom"> Remove
                        <span class="glyphicon glyphicon-trash"> </span>
                    </button>
                </div>
            </div>
        </div>
        <hr>`;
    return cartRow;
}


let totalCost=0;
function start() {
    

    let products = [
        {
            productName: "Apple iPhone 12",
            productDescription: "Great phone by Apple",
            price: 6000,
            currency: "AED",
            quantity: 1
        },
        {
            productName: "Sony Playstation 5",
            productDescription: "Great gaming by Sony",
            price: 4000,
            currency: "AED",
            quantity: 1
        },
        {
            productName: "Polo T-Shirt",
            productDescription: "Great shirts by Polo",
            price: 400,
            currency: "AED",
            quantity: 1
        }
    ];


    const theCart = document.getElementById('cart-items');

    // (1) Use the .forEach method to loop over 'products'
    // theCart.innerHTML+= createNewRow(products[1]["productName"],products[1]["productDescription"],products[1]["price"],products[1]["currency"],products[1]["quantity"]);
    
    // (2) Use the createNewRow function create a new row for the cart

    // (3) Push the new row into 'theCart'
        // theCart.innerHTML += ... 
        /*for(i in products){
                 theCart.innerHTML+= createNewRow(products[i]["productName"],products[i]["productDescription"],products[i]["price"],products[i]["currency"],products[i]["quantity"]);
        }*/
        products.forEach(
           function(product){
            let newRow = createNewRow(product["productName"],product["productDescription"],product["price"],product["currency"],product["quantity"]);
            totalCost+=product["price"];
            theCart.innerHTML+= newRow;
           }
        );
        
       theCart.innerHTML+=footerRow(totalCost);
    }
function footerRow(totalCost){
    let lastRow = `<div class="panel-footer">
    <div class="row text-center">
        <div class="col-9">
            <h4 class="text-right">Total <strong> $ ${totalCost}</strong></h4>
        </div>
        <div class="col-3 text-right">
            <button type="button" class="btn btn-success btn-block">
                Checkout
            </button>
        </div>
    </div>
</div>`;
return lastRow;
}
start();