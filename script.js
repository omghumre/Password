const passwordDisplay = document.getElementById('password');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    passwordDisplay.select();
    document.execCommand('copy');
});

function generatePassword() {
    let length = lengthSlider.value;
    let charset = '';
    let password = '';

    if (uppercaseCheckbox.checked) charset += UPPERCASE;
    if (lowercaseCheckbox.checked) charset += LOWERCASE;
    if (numbersCheckbox.checked) charset += NUMBERS;
    if (symbolsCheckbox.checked) charset += SYMBOLS;

    if (charset === '') {
        alert('Please select at least one condition!');
        return;
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordDisplay.value = password;
}
