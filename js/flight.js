async function getFlights() {
  const url = 'https://kiwi-com-cheap-flights.p.rapidapi.com/round-trip?source=Country%3AGB&destination=City%3Adubrovnik_hr&currency=usd&locale=en&adults=1&children=0&infants=0&handbags=1&holdbags=0&cabinClass=ECONOMY&sortBy=QUALITY&sortOrder=ASCENDING&applyMixedClasses=true&allowReturnFromDifferentCity=true&allowChangeInboundDestination=true&allowChangeInboundSource=true&allowDifferentStationConnection=true&enableSelfTransfer=true&allowOvernightStopover=true&enableTrueHiddenCity=true&enableThrowAwayTicketing=true&outbound=SUNDAY%2CWEDNESDAY%2CTHURSDAY%2CFRIDAY%2CSATURDAY%2CMONDAY%2CTUESDAY&transportTypes=FLIGHT&contentProviders=FLIXBUS_DIRECTS%2CFRESH%2CKAYAK%2CKIWI&limit=20';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fb7e29159dmshfedeae7fd8f8e17p12fc9ajsn1d404118c5b0',
		'x-rapidapi-host': 'kiwi-com-cheap-flights.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);
} catch (error) {
	console.error(error);
}
}
getFlights();


// toggles

const rt1 = document.querySelectorAll(".rt1")
const frame = document.querySelectorAll(".frame")
const arrow = document.querySelectorAll(".fa-chevron-down")

rt1.forEach((r1, index)=>{
  r1.addEventListener("click",()=>{
    r1.classList.toggle("rt1-up")
    arrow[index+1].classList.toggle("fa-chevron-up")
  })
})

fetch(`../json/flights-data.json`)
 .then(response => response.json())
 .then(flights =>{
  flights.cities.forEach((item)=>{
    const datas = document.querySelector(".datas")
    const watch = document.querySelector(".watch")
    const card = document.createElement("div")
    card.className="card-flight"
    card.innerHTML=`
      <span><img src="${item.img}" style="width:100px" alt="..."></span>
    <div class="supp">
      <span></span>
      <span></span>
    </div>
    <div class="time-flight">
      <span>
          <img src="../img/image-flights/reklam-btn.webp" style="width:33px">
          <h1>${flights.date}</h1>
          <p>${item.flights.route} with ${item.flights.airline}</p>
      </span>
      <span>
          ${item.flights.type}
      </span>
      <span>
          <img src="../img/image-flights/reklam-btn.webp" style="width:33px">
          <h1>${item.flights.date}</h1>
      </span>
    </div>
    <div class="price">
      <p>from ${item.from_price} <i class="fa-solid fa-manat-sign"></i><i class="fa-solid fa-chevron-right"></i></p>
    </div>
    `
    watch.appendChild(card)
  })
 })

//  footer set

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