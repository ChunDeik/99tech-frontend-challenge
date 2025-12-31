const PRICE_URL = "https://interview.switcheo.com/prices.json";
const ICON_BASE = "https://raw.githubusercontent.com/Switcheo/token-icons/main/clock/svg/";

let tokenPrices = [];

// Initialize data
async function init() {
    try {
        const response = await fetch(PRICE_URL);
        const data = await response.json();
        
        // Filter out tokens without prices as required
        tokenPrices = data.filter(item => item.price !== undefined);
        
        populateDropdowns();
    } catch (error) {
        console.error("Failed to load prices", error);
    }
}

function populateDropdowns() {
    const fromSelect = document.getElementById('from-token');
    const toSelect = document.getElementById('to-token');
    
    // Get unique currencies
    const currencies = [...new Set(tokenPrices.map(p => p.currency))];
    
    currencies.forEach(currency => {
        const opt1 = new Option(currency, currency);
        const opt2 = new Option(currency, currency);
        fromSelect.add(opt1);
        toSelect.add(opt2);
    });

    // Set defaults
    fromSelect.value = 'ETH';
    toSelect.value = 'USDC';
}

// Live Calculation Logic
function calculateSwap() {
    const amount = parseFloat(document.getElementById('input-amount').value);
    const fromToken = document.getElementById('from-token').value;
    const toToken = document.getElementById('to-token').value;
    const outputField = document.getElementById('output-amount');

    if (!amount || amount <= 0) {
        outputField.value = "0.00";
        return;
    }

    const fromPrice = tokenPrices.find(p => p.currency === fromToken)?.price;
    const toPrice = tokenPrices.find(p => p.currency === toToken)?.price;

    if (fromPrice && toPrice) {
        const result = (amount * (fromPrice / toPrice)).toFixed(6);
        outputField.value = result;
    }
}

// Form Submission with simulated backend delay
document.getElementById('swap-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btnText = document.getElementById('btn-text');
    const btnLoader = document.getElementById('btn-loader');
    const submitBtn = document.getElementById('submit-btn');

    // Visual feedback for interaction
    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');

    setTimeout(() => {
        alert("Swap Successful!");
        submitBtn.disabled = false;
        btnText.classList.remove('hidden');
        btnLoader.classList.add('hidden');
    }, 2000);
});

// Event Listeners for real-time calculation
document.getElementById('input-amount').addEventListener('input', calculateSwap);
document.getElementById('from-token').addEventListener('change', calculateSwap);
document.getElementById('to-token').addEventListener('change', calculateSwap);

init();