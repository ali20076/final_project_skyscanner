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

// const button_left1 = document.getElementById("button-left-1")
// const button_right1 = document.getElementById("button-right-1")
// const scrollballs1 = document.getElementById("scroll-balls-1")
// const ball1 = document.getElementById("ball-1-1")
// const ball2 = document.getElementById("ball-1-2")

// button_right1.addEventListener("click",()=>{
//     scroll_balls1.scrollLeft +=2000
//     console.log("hello")
// })
// button_left1.addEventListener("click",()=>{
//     scroll_balls1.scrollLeft -=2000
//     console.log("hello")
// })

const pokky = document.querySelector(".tuglle")
const fags_sub = document.querySelectorAll(".fags-sub")
const ttx_cont = document.querySelector(".ttx-cont")

pokky.addEventListener("click", ()=>{
    console.log("hello")
    ttx_cont.classList.toggle("ttx-cont-up")
})