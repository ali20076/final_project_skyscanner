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



