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
      <span class="image-flight"><img src="${item.img}" alt="..."></span>
    <div class="supp">
      <span class="city1">${item.city}</span>
      <span class="country2">${item.country}</span>
    </div>
    <div class="time-flight">
      <span class="date-flight">
          <img src="../img/image-flights/reklam-btn.webp" style="width:30px">
          <div>
          <h1>${item.date}</h1>
          <p>${item.route} with ${item.airline}</p>
          </div>
            <span class="direct-oftype">
              ${item.type}
             </span>
      </span>
      <span class="date-flight1">
          <img src="../img/image-flights/reklam-btn.webp" style="width:30px">
          <div>
          <h1>${item.date1}</h1>
          <p>${item.route1} with ${item.airline1}</p>
          </div>
          <span class="direct-oftype1">
            ${item.type1}
          </span>
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

// login
const login_blur = document.querySelector(".login-blur")
const item = document.querySelector(".item")
const login = document.querySelector(".login-up")
login_blur.style.display = "none"

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

