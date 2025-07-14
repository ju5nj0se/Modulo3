const get = document.getElementById('get');
const post = document.getElementById('post');
const put = document.getElementById('put');
const delet = document.getElementById('delete');
const response = document.querySelector('p');

if (!sessionStorage.getItem("session")) {
    window.location.assign("login.html")
}

const url = "http://localhost:3000/products"
//GET
get.addEventListener("click", () => {
    fetch(url)

    .then(res => res.json())
    .then(data => {
        response.textContent = JSON.stringify(data)
    })

    .catch(err => {
        response.textContent = JSON.stringify(err)
    })
})


//POST
post.addEventListener("click", () => postData())

async function postData() {
    try {
        const res = await fetch(url, {
            method:'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({name: "Bolso", price:2000})
        })

        alert("Product added")
        
    }catch(err) {
        console.error(err);
    }   
}


//PUT
put.addEventListener("click", (e) => {
    e.preventDefault()

    fetch(url+"/4", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "PC de mesa",
            price: 30000
        })
    })

    .then(response => response.json())
    .then(data => {
        alert("Product updated", data)
    })

    .catch(err => {
        console.error(err);
        
    })
})

//DELETE
delet.addEventListener("click", (e) => {
    e.preventDefault();

    fetch(url+ "/4", {
        method: "DELETE"
    })

    .then(response => response.json())
    .then(data => {
        alert("Product deleted")
    })
})
