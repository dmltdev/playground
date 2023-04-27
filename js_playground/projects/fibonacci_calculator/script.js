const fibSelect = document.getElementById('fib-select');
let fibOption = fibSelect.selectedOptions[0].value;

const numContainer = document.getElementById('num-container');
const seqContainer = document.getElementById('seq-container');
numContainer.style.display = 'none'; // By default, since the default option is sequence-option

// Add event listener for fibSelect on change
fibSelect.addEventListener('change', function() {
    fibOption = fibSelect.selectedOptions[0].value;
    console.log(fibOption);
    autoHide();
})

function autoHide() {
    if (fibOption === 'sequence-option') {
        numContainer.style.display = 'none';
        seqContainer.style.display = 'block';
    }
    if (fibOption === 'number-option') {
        numContainer.style.display = 'block';
        seqContainer.style.display = 'none';
    }
}

// Clear answer div and input values
const clear = () => {
    document.getElementById('fibonacci').innerHTML = '';
}