const passwordDisplay = document.getElementById('password');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const tooltip = document.getElementById('tooltip');
const strengthValue = document.getElementById('strengthValue');
const themeToggle = document.getElementById('themeToggle');

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener('click', () => {
    const password = generatePassword();
    passwordDisplay.value = password;
    updateStrength(password);
});

copyBtn.addEventListener('click', () => {
    passwordDisplay.select();
    document.execCommand('copy');
    showTooltip();
});

themeToggle.addEventListener('click', toggleTheme);

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
        return '';
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

function updateStrength(password) {
    let strength = 'Weak';
    if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /\W/.test(password)) {
        strength = 'Strong';
    } else if (password.length >= 8 && (/[A-Z]/.test(password) || /[a-z]/.test(password)) && (/\d/.test(password) || /\W/.test(password))) {
        strength = 'Moderate';
    }
    strengthValue.textContent = strength;
}

function showTooltip() {
    tooltip.style.opacity = 1;
    setTimeout(() => {
        tooltip.style.opacity = 0;
    }, 1000);
}

function toggleTheme() {
    if (document.body.hasAttribute('data-theme')) {
        document.body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙'; // Dark mode icon
    } else {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌞'; // Light mode icon
    }
}

