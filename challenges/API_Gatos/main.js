const img = document.getElementById("cat");

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

   fetch('https://api.thecatapi.com/v1/images/search', {
    'headers': {
        'x-api-key': 'vivo_6AmHvS8K1R14MTM6cNEvHhEWGUdHyMEC6HYzcq01d9OtgjJIoBBLhesaoTDJbxeV'
    }
   })

   .then((response) => {
    return response.json()
   })

   .then((data) => {
        img.src = data[0].url
        
   })

   .catch((err) => {
    img.alt = "Ocurrio un error"
   })

})
