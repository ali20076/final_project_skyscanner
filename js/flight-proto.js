document.getElementById('flightForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departure = document.getElementById('departure').value;
    const ret = document.getElementById('return').value;

    const resultsDiv = document.getElementById('results');

    if(!from || !to || !departure) {
        resultsDiv.innerHTML = '<p style="color:red;">Please fill in all required fields!</p>';
        return;
    }

    resultsDiv.innerHTML = `
        <h2>Search Results:</h2>
        <p>From: ${from}</p>
        <p>To: ${to}</p>
        <p>Departure: ${departure}</p>
        ${ret ? <p>Return: ${ret}</p> : '<p>One-way trip</p>'}
        <p style="color: green;">Flights found! (Simulated results)</p>
    `;
});