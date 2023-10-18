let username = document.querySelector("#username")
let email = document.querySelector("#email")
let msg = document.querySelector("#msg")
let btn = document.querySelector(".button")
function submits() {
    let message = `
    Name: ${username.value}
Email: ${email.value}
Message: ${msg.value}`
btn.disabled= true
    fetch(`https://api.telegram.org/bot6531509928:AAE8AMDZYLdtPy1aVhUCazd9ynuA8oksVg4/sendMessage?chat_id=5508822515&text=${encodeURIComponent(message)}`)
    .then( response => {
        if(response.ok){
       btn.textContent ="Message Sent"
       setTimeout(() => {
         btn.disabled = false
         btn.textContent ="Submit"
         username.value=""
         email.value=""
         msg.value=""
       }, 1000);
        }
        else{
            btn.textcontent="Try Again Later"
        }
    })

}