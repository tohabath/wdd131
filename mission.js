const themeSelector = document.getElementById('lightDark');
const logo = document.getElementById('logo');

function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
    document.body.className = 'dark';
    logo.src = 'byui-logo_white.png';
    } else {
    document.body.className = 'light';
    logo.src = 'byui-logo_blue.png';
    }
}

themeSelector.addEventListener('change', changeTheme);