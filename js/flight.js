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

    const flights = data.data || data.results || []; // массив рейсов
    const container = document.querySelector('watch');

    flights.slice(0, 20).forEach(flight => { // выводим первые 20 рейсов
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>Цена: $${flight.price}</h3>
        <p>${flight.cityFrom} → ${flight.cityTo}</p>
        <p>Прямой рейс: ${flight.route.length === 1 ? "Да" : "Нет"}</p>
        <p>Дата вылета: ${flight.dTimeUTC ? new Date(flight.dTimeUTC * 1000).toLocaleDateString() : '-'}</p>
      `;
      container.appendChild(card);
    });
    console.log(flights.length)

	console.log(data);
} catch (error) {
	console.error(error);
}
}
getFlights();


// toggles

const tggl = document.querySelectorAll(".tggl")
const rt1 = document.querySelectorAll(".rt1")
tggl.forEach((frr, index)=>{
    frr.addEventListener("click", ()=>{
    rt1[index].classList.toggle("rt1-up")
    })
})