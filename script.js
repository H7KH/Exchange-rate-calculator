const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');

const swapBtn = document.getElementById('swap');
const rate = document.getElementById('rate');

// Calculator Function
function calculator() {
    const currencyValueOne = currencyOne.value;
    const currencyValueTwo = currencyTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/40ee1b00196cc054883e2c97/latest/${currencyValueOne}`)
    .then(response => response.json())
    .then(data => {
        const currencyRate = data.conversion_rates[currencyValueTwo];
        rate.innerText = `1 ${currencyValueOne} = ${currencyRate} ${currencyValueTwo}`

        amountTwo.value = (amountOne.value * currencyRate).toFixed(2)
    })
}

// Event Listeners
currencyOne.addEventListener('change', calculator);
amountOne.addEventListener('input', calculator);
currencyTwo.addEventListener('change', calculator);
amountTwo.addEventListener('input', calculator);

swapBtn.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;

    calculator();

})

calculator()