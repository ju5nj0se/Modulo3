let cart = [{"product": "cerveza", "price":4000, "amount":3}]
let total = 12_000

function validationNumber(number) {
    if (isNaN(number)) {
        return true
    } else {
        return false
    }
}

function menu(callback) {
    let product, price, amount

    parseFloat(price, amount)

    do {
        product = prompt('If you want out, click in the button what says "Cancel"\nInput the name of the product');

        if (product==null) {
            continue
        } else {
            price = prompt("Input the price of the product");
            amount = prompt("How many product do you carry?");

            console.log(price, amount)

            if( callback(price) || callback(amount)) {
                alert("Err:Input correct number")
            } else {
               cart.push({"product": product, "price":price, "amount": amount})
               total = total + (price*amount)
            }
        }
        
    } while (product != null);

    alert(`The total of you cart it's of ${total}`)
}

menu(validationNumber)
