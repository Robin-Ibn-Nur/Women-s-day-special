document.addEventListener('DOMContentLoaded', function () {
    // Function to generate a random hex color
    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    // Event listener for the button click
    document.getElementById('colorChangeBtn').addEventListener('click', function () {
        var card = document.querySelector('.card');
        card.style.backgroundColor = getRandomColor();
    });
});
