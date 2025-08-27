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
const button_right = document.querySelectorAll(".button-right")
const button_left = document.querySelectorAll(".button-left")
const card = document.querySelectorAll(".hotels-card") 
const scroll_balls = document.querySelector(".scrolls")
const ball = document.querySelectorAll(".ball")

function updateButtons() {
    const maxScroll = scroll_balls.scrollWidth - scroll_balls.clientWidth
    button_left.forEach((left) => {
        if (scroll_balls.scrollLeft <= 0) {
            left.style.opacity = "0.2"
        } else {
            left.style.opacity = "1"
        }
    })
    button_right.forEach((right) => {
        if (scroll_balls.scrollLeft >= maxScroll) {
            right.style.opacity = "0.2"
        } else {
            right.style.opacity = "1"
        }
    })
}

button_left.forEach((left)=>{
    left.addEventListener("click",()=>{
    scroll_balls.scrollLeft -=2100
    updateButtons()
})
})
button_right.forEach((right)=>{
    right.addEventListener("click",()=>{
    scroll_balls.scrollLeft +=2100
    updateButtons()
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
            <span>${item.column1}</span>
            <span>${item.column2}</span>
            <span>${item.column3}</span>
            <span>${item.column4}</span>
            <span>${item.column5}</span>
            <span>${item.column6}</span>
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

