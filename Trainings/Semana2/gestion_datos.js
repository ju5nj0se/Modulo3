const products = {
    1: {id: 1, name: "Laptop", price: 1500},
    2: {id: 2, name: "Mouse", price: 25},
    3: {id: 3, name: "Teclado", price: 50}
}

console.log("\nProducts");
for (let i in products) {
    console.log(`Product ID: ${i}, Name: ${products[i].name}, Price: ${products[i].price}`);
    
}
//Set------------------------------------------------------------
const listObjects = Object.values(products)
const setProducts = listObjects.map((item) => {
    return item.name
})

console.log("\nSet of unique products")
for (const item of setProducts) {
    console.log("Unique product: ", item);
    
}

//Map-----------------------------------------------------------

const mapProducts = new Map([
    ["Electronica", "Laptop"],
    ["Accesorios", "Mouse"],
    ["Accesorios", "Teclado"]
])

console.log("\nMap of category and products")
mapProducts.forEach((item, category)=> {
    //console.log(`Category: ${category}, Product: ${item}`)

    console.log(`Category: ${category}, Product: ${item}`)
})

