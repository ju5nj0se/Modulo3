
const URL = "https://api.openai.com/v1/chat/completions";

const response = document.getElementById("response");
const form = document.getElementById("form");
const ask = document.getElementById("input");

async function enviarDatos(prompt) {
    const options = {
        messages: [
            { role: "user", content: prompt  }
        ],
        method: "POST",
        model: "gpt-3.5-turbo",

        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apikey}`
        },

    }

    fetch(URL, options)

    .then((res) => {
        console.log(res)
    })

    .catch(
        console.log("Upps :(")
    )
}   

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(enviarDatos(ask.value));
})


/* 
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "developer", content: "You are a helpful assistant." }],
    model: "gpt-4.1",
    store: true,
  });

  console.log(completion.choices[0]);
}

main();


*/