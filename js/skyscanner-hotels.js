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

const button_right = document.querySelector(".button-right")
const button_left = document.querySelector(".button-left")
const card = document.querySelectorAll(".hotels-card") 
const scroll_balls = document.querySelector(".scrolls")
const ball = document.querySelectorAll(".ball")

button_right.addEventListener("click",()=>{
    scroll_balls.scrollLeft +=2000
})
button_left.addEventListener("click",()=>{
    scroll_balls.scrollLeft -=2000
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

const pokky = document.querySelectorAll(".tuglle")
const fags_sub = document.querySelectorAll(".fags-sub")
const ttx_cont = document.querySelectorAll(".ttx-cont")
const arrow = document.querySelectorAll(".fa-angle-up")

fags_sub.forEach((frr, index)=>{
    frr.addEventListener("click", ()=>{
    pokky[index].classList.toggle("tuglle-up")
    arrow[index].classList.toggle("fa-angle-down")
    console.log("hello")
    })
})
