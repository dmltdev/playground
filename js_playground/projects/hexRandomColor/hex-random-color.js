function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeBackgroundColor(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    let colorText = document.getElementById('hexColor-btn-doc-bg');
    colorText.textContent = newColor;
}

function changeButtonBackgroundColor(){
    let newColor = getRandomColor();
    let button = document.getElementById('btn-bg');
    button.style.backgroundColor = newColor;
    let colorText = document.getElementById('hexColor-btn-bg');
    colorText.textContent = newColor;
}

function changeButtonTextColor(){
    let newColor = getRandomColor();
    let button = document.getElementById('btn-text');
    button.style.color = newColor;
    let colorText = document.getElementById('hexColor-btn-text');
    colorText.textContent = newColor;
}