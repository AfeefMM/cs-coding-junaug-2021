

 products = {
    'Asus Vivibook': 4000,
    'Macbook Pro': 7000,
    'Apple Watch': 1500,
    'Samsung S21': 5000,
    'Apple Airpods': 700
}
const cart=[]


/*function shoppingStart(){

    let resPonse = prompt("Please add a product or enter 'done' to finish shopping ");
    let sum=0;
    for(i in products){
        if(resPonse.includes(products[i])){
            cart.push(products[resPonse]);
            resPonse = prompt("Please add a product or enter 'done' to finish shopping ");
            if(resPonse === "done"){
                for(j in cart){
                    sum+=cart[j];
                }
            }
            else{
                shoppingStart();
            }
        }

    }

}*/
let grandTotal=0;
alert("hello");
function shoppingStart(){
    const userResponse = prompt("Please add a product or enter 'done' to finish shopping ");

    if(userResponse !== "done"){
        cart.push(products[userResponse]);

        shoppingStart();
    }
    else if(userResponse === "done"){
        for(key in cart){
            grandTotal += cart[key]; 
        }
        console.log("grandTotal");
        return grandTotal;
    }
    else{

    }
}
/*function shoppingStart(){
   
    let inbut = prompt("Please add a product or enter 'done' to finish shopping ");

    if(inbut === "done"){
        let sum=0;
        for(i in cart){
            sum+= Object.values(cart);
            console.log(cart[i]);
        }
    }
    for(index in products){
        if(inbut.includes(products[index])){
            cart.push(products[index]);
        }

        shoppingStart();
    }
   
} */