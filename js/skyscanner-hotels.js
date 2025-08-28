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
    })
    button_right1.addEventListener("click",()=>{
    scroll_balls1.scrollLeft +=2100
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

        function left(){
            // console.log("left")
        }
        function right(){
            // console.log("right")
        }
        fa_angle_up.forEach((icon, index)=>{
            icon.addEventListener("click",()=>{
                if(index==6){
                    left()
                }
                else{
                    right()
                }
            })
        })
    })
 })

 const login = document.querySelectorAll(".login")
 const dropdown_login = document.querySelector(".dropdown-login")
 const close_login = document.querySelectorAll(".close")

 function openLogin() {
  const modal = document.querySelector(".mike");
  modal.style.display = "block";
  dropdown_login.style.display="block"
  document.body.style.overflow = "hidden";
}
function closeLogin() {
  const modal = document.querySelector(".mike");
  modal.style.display = "none";
  dropdown_login.style.display="none"
  document.body.style.overflow = "";
}

login.forEach((log)=>{
    log.addEventListener("click",()=>{
        openLogin()
    })
    close_login.forEach((cls)=>{
        cls.addEventListener("click", ()=>{
            closeLogin()
        })
    })
})

