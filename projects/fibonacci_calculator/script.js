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
    let fibSelect = document.getElementById('fib-select');
    let fibOption = fibSelect.selectedOptions[0].value;
    let amswerBtn = document.getElementById('answer');
    answerBtn.value = '';
    if (fibOption === 'number-option') {
        document.getElementById('fib-num').value = '';
    } else {
        document.getElementById('n1').value = '';
        document.getElementById('n2').value = '';
    }
}

// Calculate fibonacci sequence

const fibCalculate = () => {
    let answerBtn = document.getElementById('answer');
    answerBtn.value = '';
    if (fibOption === 'number-option') {
        let num = document.getElementById('fib-num').value;
        let fibA = 0;
        let fibB = 1;
        for (let i = 2; i <= num; i++) {
            let fibNum = fibA + fibB; 
            fibA = fibB;
            fibB = fibNum;
        }
        answerBtn.value = fibB;
    } else if (fibOption === 'sequence-option') {
        let num1 = document.getElementById('n1').value;
        let num2 = document.getElementById('n2').value;
        let numDiff = Math.abs(num1 - num2); 
        let fibA = 0; 
        let fibB = 1; 
        for (let i = 2; i <= numDiff + 1; i++) {
            let fibNum = fibA + fibB; 
            fibA = fibB;
            fibB = fibNum;
        }
        answerBtn.value = fibB + fibA;
    } else {
        return "Invalid option chosen. Choose Number of Sequence.";
    }
}
