console.log('hi there');
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const form = document.getElementById('form');
    const list = document.getElementById('list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (input.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = input.value;
        list.appendChild(listItem);
        input.value = '';
    }
});

});