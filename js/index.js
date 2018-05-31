

// const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=5';

let data;

fetch('/js/data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
        data = myJson;
    });

setTimeout(function() {
    renderData(data);
}, 250);

// function getData(data) {
//     const totalNum = document.querySelector('.total-num');
//     totalNum.innerHTML = data.length;

//     //Get name of bitcoint
//     const name = document.querySelector('.name')
//     name.innerHTML = data[0].name;

//     //Get price usd
//     const price_usd = document.querySelector('.price');
//     price_usd.innerHTML = data[0].price_usd;

//     //Get rank
//     const rank = document.querySelector('.rank');
//     rank.innerHTML = data[0].rank;

//     //Get change price percent_change_1h
//     const change1h = document.querySelector('.change-h');
//     change1h.innerHTML = data[0].percent_change_1h;
  
//     //Get change price percent_change_24h
//     const change24h = document.querySelector('.change-day');
//     change24h.innerHTML = data[0].percent_change_24h;

//     //Get change price percent_change_7d
//     const changeWeek = document.querySelector('.change-week');
//     changeWeek.innerHTML = data[0].percent_change_7d;
//     console.log(data.length);
// }

/**
 * Main function that is run when data is available
 * This is starting point
 * @param {} currencies 
 */
function renderData(currencies) {
    
    printAmountOfCoins(currencies);
    printAllDetails(currencies);

    activateSearch(currencies);
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
                <p>Percent change 1h: ${currency.percent_change_1h}</p>
                <p>Percent change 24h: ${currency.percent_change_24h}</p>
                <p>Percent change 7d: ${currency.percent_change_7d}</p>
            </div>
        `;
    });
}

// function xactivateSearch(currencies) {
//     const searchInput = document.querySelector('input[name=search]');
//     const searchBtn = document.querySelector('#btn-search');
    
//     searchBtn.addEventListener('click', () => {
//         const searchText = searchInput.value;

//         const foundList = currencies.filter( (item) => {
//             return item.name.toLowerCase().includes(searchText);
//         });
//     });
// }


// function activateSearch() {
//     const searchInput = document.querySelector('input[name=search]');
//     const searchBtn = document.querySelector('#btn-search');
//     const detailsElements = document.querySelectorAll('.details .detail');
//     const searchFn = () => {
//         const searchText = searchInput.value.toLowerCase();

//         detailsElements.forEach( (detailElement) => {
//             const name = detailElement.querySelector('.name').innerHTML;
//             if (name.toLowerCase().includes(searchText)) {
//                 detailElement.style.display = 'block';
//             } else {
//                 detailElement.style.display = 'none';
//             }
//         });
//     };
    
//     searchInput.addEventListener('keyup', searchFn);
//     searchBtn.addEventListener('click', searchFn);

// }