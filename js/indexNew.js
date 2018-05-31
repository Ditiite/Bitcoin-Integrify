
//Filter coins by input from search bar
const filterCoins = function (obj) {
    const input = document.querySelector("input[name=search]");
    
    const filterName = document.querySelectorAll(".details .coin");
    input.addEventListener('input', function() {
        const filterBy = input.value.toLowerCase();

        filterName.forEach(function (item) {
    
            const name = item.querySelector('.name').innerText.toLowerCase();
            if(name.includes(filterBy)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    })
};

const sortByName = function (obj) {}
const sortByPrice = function (obj) {}
const sortByRank = function (obj) {}

const cryptoUI = function (obj) {
    // coinsCointainer.innerHTML = ""
    const coinsCointainer = document.querySelector(".details")

    obj.forEach(function (coin, i) {
        let coinDiv = document.createElement("div");
        coinDiv.className = "coin"
        let coinName = document.createElement("h1");
        coinName.className = "name";
        let coinPrice = document.createElement("p");
        let coinRank = document.createElement("p");
        let coinPercentH = document.createElement("p");
        let coinPercentDay = document.createElement("p");
        let coinPercentWeek = document.createElement("p");
    
        coinName.textContent = coin.name;
        coinPrice.textContent = 'Price USD: ' + coin.price_usd;
        coinRank.textContent = 'Rank: ' + coin.rank;

        coinPercentH.textContent = 'Percent change 1h: ' + coin.percent_change_1h;
        if(coin.percent_change_1h < 0) {
            coinPercentH.style.color = '#ff0033';
        } else {
            coinPercentH.style.color = '#6aff00';
        }

        coinPercentDay.textContent = 'Percent change 24h: ' + coin.percent_change_24h;
        if(coin.percent_change_24h < 0) {
            coinPercentDay.style.color = '#ff0033';
        } else {
            coinPercentDay.style.color = '#6aff00';
        }

        coinPercentWeek.textContent = 'Percent change 7d: ' + coin.percent_change_7d;
        
        if(coin.percent_change_7d < 0) {
            coinPercentWeek.style.color = '#ff0033';
        } else {
            coinPercentWeek.style.color = '#6aff00';
        }

        coinDiv.appendChild(coinName);
        coinDiv.appendChild(coinRank);
        coinDiv.appendChild(coinPrice);
        coinDiv.appendChild(coinPercentH);
        coinDiv.appendChild(coinPercentDay);
        coinDiv.appendChild(coinPercentWeek);

        coinsCointainer.appendChild(coinDiv)

    });

}

fetch("https://api.coinmarketcap.com/v1/ticker/?limit=50")
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {

        cryptoUI(myJson)
        filterCoins(myJson);
    });

