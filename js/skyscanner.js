const quests = document.querySelectorAll(".dw")
const paper = document.querySelectorAll(".paper")
const arrow = document.querySelectorAll(".fa-caret-down")
const lg = document.querySelector(".lg")
const inter = document.querySelector(".inter")
const arr_lang = document.querySelector(".arr_lang")
quests.forEach((quest, index)=>{
    quest.addEventListener("click", ()=>{
        paper[index].classList.toggle("paper_down")
        arrow[index].classList.toggle("fa-caret-up")
    })
})
inter.addEventListener("click", ()=>{
    lg.classList.toggle("lg_down")
    arrow.classList.toggle("fa-caret-up")
})

fetch('/json/lang.json')
      .then(response => response.json())
      .then(dt =>{
        dt.forEach((lang)=>{
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
            <img src = "${lang.url}">
            <a href="#">${lang.name}</a>
            `
            lg.appendChild(card)
        })
    })

const bars = document.querySelectorAll(".bars")
const dropdown = document.getElementsByClassName("dropdown")

bars.forEach((bar, index)=>{
    bar.addEventListener("click", ()=>{
        dropdown[index].classList.toggle("dropdown-up")
        console.log("hello")
    })
})

const changeable = document.querySelectorAll(".changeable")
const inpt1 = document.querySelector(".inpt1")
const inpt2 = document.querySelector(".inpt2")
const fa_arrows_turn_to_dots = document.querySelector(".fa-arrows-turn-to-dots")

changeable.forEach((oop, index)=>{
    oop.addEventListener("click", ()=>{
        inpt1.classList.toggle("inpt1-up")
        inpt2.classList.toggle("inpt2-up")
        fa_arrows_turn_to_dots.classList.toggle("fa-arrows-turn-to-dots-up")
    })
})
const login_blur = document.querySelector(".login-blur")
const item = document.querySelector(".item")
login_blur.style.display = "none"
item.addEventListener("click", ()=>{
        login_blur.style.display = "flex"
        const login = document.createElement("div")
        login.className = "login"
        login.innerHTML = `
        <div class="img">
        <img src="https://logos-world.net/wp-content/uploads/2022/05/Skyscanner-Logo.png">
        </div>
        <div class="tiping">
            <h1>Get the full experience</h1>
            <p>Track prices, make trip planning easier and enjoy faster booking.</p>
            <ul>
            <li><p>Continue with email</p></li>
            <li><img src="https://img.freepik.com/premium-vector/circle-facebook-logotype-icon-social-media-app-network-application-popular-editorial-brand-vector-illustration_913857-373.jpg?w=740"><p>Facebook</p></li>
            <li><img src="https://tse1.mm.bing.net/th/id/OIP.NU47ZE8R8rFbMAB4a_w3FgHaHa?cb=iwp2&rs=1&pid=ImgDetMain"><p>Google</p></li>
            <li><img src="https://img.favpng.com/3/18/10/apple-logo-company-png-favpng-MYGe2dxxdVJS2rHncT5rkFdLr_t.jpg"><p>Apple</p></li>
            </ul>
            <div class="remember"><input type="checkbox"><p>Remember me</p></div>
            <p class="terms">By continuing you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a></p>
        </div>
        `
        const exit = document.createElement("button")
        exit.textContent="X"
        login.appendChild(exit)
        document.querySelector(".login-blur").appendChild(login)
        exit.addEventListener("click", ()=>{
            login.innerHTML=``
            login.style.display = "none"
            login_blur.style.display = "none"
        })
    })