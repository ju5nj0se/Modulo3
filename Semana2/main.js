const products = {
    1: {id: 1, name: "Laptop", price: 1500},
    2: {id: 2, name: "Mouse", price: 25},
    3: {id: 3, name: "Teclado", price: 50}
}

//Create set
const setProducts = new Set(Object.values(products).map((product) => {product.name}))

//Create map
const mapProducts = new Map([
    ["Electronica", "Laptop"],
    ["Accesorios", "Mouse"],
    ["Accesorios", "Teclado"]
])

for (let i in products) {
    console.log(`Producto ID: ${products[i]}, Detalles ${products}`)
}

console.log("\nSet of uniques products")
for(product of setProducts) {
    console.log("Unique Product" + product)
}

console.log("\nMap for category of products")
mapProducts.forEach((product, category) => {
    console.log(`Category: ${category}, Product: ${product}`)
})

console.log("\nGestion de datos")
console.log("List of products with object "+ products)
console.log("List of products with Set "+ setProducts);
console.log("Category of products with Map" + mapProducts)
