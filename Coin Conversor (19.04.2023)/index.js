URL = 'https://open.er-api.com/v6/latest/EUR'

/*
function fetchData(cb) {
    $.ajax({
        url: URL,
        type: 'GET',
        dataType: 'json',
        success: function(results) { cb(results) },
        error: function(request, statusText, httpError) { cb(httpError || statusText) }
    });
}


function convertion(results) {
    console.log(results.rates);
    var eur = results.rates.USD;
    var amount = document.getElementById('amount').value;
    var container = document.getElementById('container');
    container.innerHTML = amount + ' EUR = ' + (eur*amount).toFixed(2) + ' USD';
}
*/

window.onload = function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); //refresh the html page
        fetch(URL).then(function(response){ //ES5
            return response.json()
        })
        .then((response) => { //arrow functioon ES6
            console.log(response.rates);
            var eur = response.rates.USD;
            var amount = document.getElementById('amount').value;
            var container = document.getElementById('container');
            container.innerHTML = amount + ' EUR = ' + (eur*amount).toFixed(2) + ' USD';
        })
    });
}

















































/*
console.log(results);
    var eur = results.rates.EUR;
    var amount = document.getElementById('amount').value;
    var container = document.getElementById('rate');
    container.innerHTML = amount + ' EUR = ' + (amount * eur).toFixed(2) + ' USD';
*/