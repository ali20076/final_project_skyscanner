const quests = document.querySelectorAll(".dw")
const paper = document.querySelectorAll(".paper")
const arrow = document.querySelectorAll(".fa-caret-down")
const lg = document.querySelector(".lg")
quests.forEach((quest, index)=>{
    quest.addEventListener("click", ()=>{
        paper[index].classList.toggle("paper_down")
        arrow[index].classList.toggle("fa-caret-up")
    })
})
fetch('lang.json')
      .then(response => response.json())
      .then(response => console.log(response))


lg.forEach((lang, response)=>{
    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
    <img src = "${response.url}">
    <a href="#">${response.name}</a>
    `
    lg.appendChild(card)
    console.log("hello")
})