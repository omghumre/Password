const passwordDisplay = document.getElementById('password');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const themeSwitcher = document.getElementById('themeSwitcher');
const title = document.getElementById('title');

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

let isDarkMode = true;

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    passwordDisplay.select();
    document.execCommand('copy');
});

themeSwitcher.addEventListener('click', switchTheme);

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

function switchTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    document.querySelector('.card').classList.toggle('dark-mode', isDarkMode);
    document.querySelector('.card').classList.toggle('light-mode', !isDarkMode);
    passwordDisplay.classList.toggle('dark-mode', isDarkMode);
    passwordDisplay.classList.toggle('light-mode', !isDarkMode);
    themeSwitcher.textContent = isDarkMode ? 'brightness_4' : 'brightness_7';
}

const checkboxes = document.querySelectorAll('.form-check-input');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            event.target.parentNode.classList.add('glow');
        } else {
            event.target.parentNode.classList.remove('glow');
        }
    });
});
