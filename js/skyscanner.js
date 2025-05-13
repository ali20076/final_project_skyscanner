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
const brn = document.querySelectorAll(".brn")
const bars = document.querySelectorAll(".bars")
const dropdown = document.getElementsByClassName("dropdown")

brn.forEach((hot)=>{
    hot.addEventListener("click", ()=>{
        window.location.href='html\skyscanner-hotels.html'
    })    
})

bars.forEach((bar, index)=>{
    bar.addEventListener("click", ()=>{
        dropdown[index].classList.toggle("dropdown-up")
        console.log("hello")
    })
})

const changeable = document.querySelectorAll(".changeable")
const inpt1 = document.querySelector(".inpt1")
const inpt2 = document.querySelector(".inpt2")

changeable.forEach((oop, index)=>{
    oop.addEventListener("click", ()=>{
        // inpt1.style.transform = "translateX(224px)"
        // inpt2.style.transform = "translateX(-224px)"
        inpt1.classList.toggle("inpt1-up")
        inpt2.classList.toggle("inpt2-up")
        opp.classList.toggle("changeable-up")
    })
})

const inpt5 = document.getElementById("inpt5")

inpt5.forEach((rm, index)=>{
    rm.addEventListener("click", ()=>{
        console.log("hello")
    })
})