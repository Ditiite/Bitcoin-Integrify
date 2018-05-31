 const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
let data;
//fetch('/js/data.json')
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        data = myJson;
    });

setTimeout(function() {
    renderData(data);
}, 350);

/**
 * Main function that is run when data is available
 * This is starting point
 * @param {} currencies 
 */
function renderData(currencies) {
    printAmountOfCoins(currencies);
    printAllDetails(currencies);
    activateSearch(currencies);
    printAmountOfCoins(currencies);
}

function printAmountOfCoins(currencies) {
    const totalNum = document.querySelector('.total-num');
    totalNum.innerHTML = currencies.length;
}

function printAllDetails(currencies) {
    const el = document.querySelector('.details');
    el.innerHTML = '';

    currencies.forEach( function (currency)  {
        el.innerHTML += `
            <div class="detail">
                <h2 class="name"> ${currency.name}</h2>
                <p>Rank: ${currency.rank}</p>
                <p>Price USD: ${currency.price_usd}</p>
                <p>Percent change 24h: ${currency.percent_change_24h}</p>
                <p>Percent change 7d: ${currency.percent_change_7d}</p>
            </div>
        `;
    });
    //<p>Percent change 1h: <span class="price-h">${currency.percent_change_1h}</span></p>
    currencies.forEach((e) => {
        const price24 = e.percent_change_24h;
        console.log(e);
        if(price24 < 0) {
            price24.style.color = 'red';
        } else {
            price24.style.color = 'green';
        }
        
    })
    
}

function activateSearch(currencies) {
    const searchInput = document.querySelector('input[name=search]');
    const searchBtn = document.querySelector('#btn-search');
    const detailElem = document.querySelectorAll('.details .detail');
    
    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();

        detailElem.forEach( (detailElem) => {
            const name = detailElem.querySelector('.name').innerHTML;
            if (name.toLowerCase().includes(searchText)) {
                detailElem.style.display = 'block';
            } else {
                detailElem.style.display = 'none';
            }
        });
    });
};

// Check if price goes up or down add style
