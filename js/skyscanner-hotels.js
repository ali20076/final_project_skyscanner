fetch('../json/datahotels.json')
 .then(response => response.json())
 .then(data =>{

    data.hotels.forEach((item)=> {
        const scrolls = document.querySelector(".scrolls")
        const cartDiv = document.createElement("div")
        cartDiv.classList.add("hotels-card")

        cartDiv.innerHTML = `
        <div class="card-img">
        <a href="#" class="cart-link"> <img src="${item.image_url}">
        </div>
        <div class="sub">
        <div class="hotel-name">
            <span class="span-1">${item.name}</span>
            <span class="span-2">${item.distations} km from city </span>
        </div>
        <div class="hotel-rating">
            <span class="rating-span">Icon</span>
        </div>
        </div>
        <div class="hotel-reviews">
            <span class="rating1">
        ${item.rating}
        </span>
        <span class="from5">
        /5
        </span>
        <span class="rating2">
            ${item.rating_level}
        </span>
        </div>
        <hr>
        <div class="per-night">
            <span class="price">
                <span class="price-bolt">${item.price_per_night}<i class="fa-solid fa-manat-sign"></i></span>
                <span class="price-title"> Per night </span>
            </span>
        </div>
        `;
        scrolls.appendChild(cartDiv)

    })
 })
 

fetch(`../json/datahotels2.json`)
 .then(response => response.json())
 .then(datahotels => {
    datahotels.hotels.forEach((item)=>{
        const scrolls2 = document.querySelector(".scrolls2")
        const cartDiv = document.createElement("div")
        cartDiv.classList.add("hotels-card")

        cartDiv.innerHTML = `
        <div class="card-img">
        <a href="#" class="cart-link"> <img src="${item.image_url}">
        </div>
        <div class="sub">
        <div class="hotel-name">
            <span class="span-2">${item.city}</span>
        </div>
        <div class="hotel-rating">
            <span class="rating-span">Icon</span>
        </div>
        </div>
        <div class="hotel-reviews">
            <span class="rating1">
        ${item.rating}
        </span>
        <span class="from5">
        /5
        </span>
        </div>
        <hr>
        <div class="per-night">
            <span class="price">
                <span class="price-bolt">${item.price_per_night}<i class="fa-solid fa-manat-sign"></i></span>
                <span class="price-title"> Per night </span>
            </span>
        </div>
        `;
        scrolls2.appendChild(cartDiv)
    })
 })

const btns_clicker = document.querySelectorAll(".btns-clicker")
const button_right = document.querySelector(".button-right")
const button_left = document.querySelector(".button-left")
const button_left1 = document.querySelector(".button-left1")
const button_right1 = document.querySelector(".button-right1")
const card = document.querySelectorAll(".hotels-card") 
const scroll_balls = document.querySelector(".scrolls")
const scroll_balls1 = document.querySelector(".scrolls2")
const ball = document.querySelectorAll(".ball")
const ball1 = document.querySelectorAll(".ball1")

function updateButtons() {
    const maxScroll = scroll_balls.scrollWidth - scroll_balls.clientWidth
        if (scroll_balls.scrollLeft <= 2) {
            button_left.style.opacity = "0.2"
        } else {
            button_left.style.opacity = "1"
        }
        if (scroll_balls.scrollLeft >= maxScroll) {
            button_right.style.opacity = "0.2"
        } else {
            button_right.style.opacity = "1"
        }
}
function updateButtons1() {
    const maxScroll = scroll_balls1.scrollWidth - scroll_balls1.clientWidth
        if (scroll_balls1.scrollLeft <= 2) {
            button_left1.style.opacity = "0.2"
        } else {
            button_left1.style.opacity = "1"
        }
        if (scroll_balls1.scrollLeft >= maxScroll) {
            button_right1.style.opacity = "0.2"
        } else {
            button_right1.style.opacity = "1"
        }
}
    // first-type
    button_left.addEventListener("click",()=>{
    scroll_balls.scrollLeft -=2100
    updateButtons()
    })
    button_right.addEventListener("click",()=>{
    scroll_balls.scrollLeft +=2100
    updateButtons()
    })
    // second-type
    button_left1.addEventListener("click",()=>{
    scroll_balls1.scrollLeft -=2100
    updateButtons1()
    })
    button_right1.addEventListener("click",()=>{
    scroll_balls1.scrollLeft +=2100
    updateButtons1()
    })

    ball.forEach((bll, index)=>{
        bll.addEventListener("click", ()=>{
            if(index === 0){
                scroll_balls.scrollLeft -=2100
                bll.style.opacity="0.5"
            }
            else{
                scroll_balls.scrollLeft +=2100
                bll.style.opacity="1"
            }
        })
    })

    ball1.forEach((bll1, index)=>{
        bll1.addEventListener("click", ()=>{
            if(index === 0){
                scroll_balls1.scrollLeft -=2100
                bll1.style.opacity="0.5"
            }
            else{
                scroll_balls1.scrollLeft +=2100
                bll1.style.opacity="1"
            }
        })
    })

// end process of scroll
const pokky = document.querySelectorAll(".tuglle")
const fags_sub = document.querySelectorAll(".fags-sub")
const ttx_cont = document.querySelectorAll(".ttx-cont")
const arrow = document.querySelectorAll(".fa-angle-up")

fags_sub.forEach((frr, index)=>{
    frr.addEventListener("click", ()=>{
    pokky[index].classList.toggle("tuglle-up")
    arrow[index].classList.toggle("fa-angle-down")
    })
})


fetch('../json/titles.json')
 .then(response => response.json())
 .then(titles =>{
    titles.brands.forEach((item)=>{
        const opz = document.querySelector(".opz")
        const balls = document.querySelector(".balls")
        const select_titles = document.querySelector(".select-titles")
        const fa_circle = document.querySelectorAll(".fa-circle")
        const fa_angle_up = document.querySelectorAll(".fa-angle-up")
        const open_files = document.querySelector(".open-files")

        const card_span = document.createElement("div")
        card_span.className = "option-select-type"
        card_span.classList.add("open_files")
        card_span.innerHTML = `
            <div class="str">
            <div class="column1">
            <span>${item.column1}</span>
            <span>${item.column2}</span>
            <span>${item.column3}</span>
            </div>
            <div class="column2">
            <span>${item.column4}</span>
            <span>${item.column5}</span>
            <span>${item.column6}</span>
            </div>
            </div>
        `
        open_files.appendChild(card_span)
    })
 })

 const login = document.querySelectorAll(".login")
 const dropdown_login = document.querySelector(".dropdown-login")
 const close_login = document.querySelectorAll(".close")
 const strype = document.querySelector(".strype")

 function openLogin() {
  const modal = document.querySelector(".mike");
  modal.style.display = "block";
  dropdown_login.classList.toggle("dropdown-login-up")
  document.body.style.overflow = "hidden";
  strype.style.display="block"
}
function closeLogin() {
  const modal = document.querySelector(".mike");
  modal.style.display = "none";
  dropdown_login.classList.toggle("dropdown-login")
  document.body.style.overflow = "";
  strype.style.display="none"
}

login.forEach((log)=>{
    log.addEventListener("click",()=>{
        openLogin()
    })
})
close_login.forEach((cls)=>{
    cls.addEventListener("click", ()=>{
        closeLogin()
    })
})
//footer settings

const dropdown_footer = document.querySelector(".dropdown-footer")
const menu_item = document.querySelectorAll(".menu-item")
const menu_link = document.querySelectorAll(".menu-link")
const list_card = document.querySelectorAll(".list-card")

menu_item.forEach((item)=>{
    item.addEventListener("click", ()=>{
        dropdown_footer.classList.toggle("dropdown-footer-up")
    })
})
