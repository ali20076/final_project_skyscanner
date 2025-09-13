const login_blur = document.querySelector(".login-blur")
const item = document.querySelector(".item")
const heart = document.querySelector(".heart-css")
const login = document.querySelector(".login-up")
login_blur.style.display = "none"
heart.addEventListener("click", ()=>{
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

login.addEventListener("click", ()=>{
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
// footer settings
const dropdown_footer = document.querySelectorAll(".dropdown-footer")
const menu_item = document.querySelectorAll(".menu-item")
const menu_link = document.querySelectorAll(".menu-link")
const list_card = document.querySelectorAll(".list-card")
const fa_chevron_down = document.querySelectorAll(".fa-chevron-down")

menu_item.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        dropdown_footer[index].classList.toggle("active")
        fa_chevron_down[index].classList.toggle("fa-chevron-up")
    })
})

const changeable = document.querySelectorAll(".rotation")
const inpt1 = document.querySelector(".text-from")
const inpt2 = document.querySelector(".text-to")
const fa_arrows_turn_to_dots = document.querySelector(".fa-arrows-turn-to-dots")

changeable.forEach((oop, index)=>{
    oop.addEventListener("click", ()=>{
        inpt1.classList.toggle("text-to-up")
        inpt2.classList.toggle("text-from-up")
        fa_arrows_turn_to_dots.classList.toggle("fa-arrows-turn-to-dots-up")
    })
})