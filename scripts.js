// Change background color when input is focused
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.backgroundColor = 'yellow';
    });
    input.addEventListener('blur', function() {
        this.style.backgroundColor = 'white';
    });
});

// Change background color of buttons on hover
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue';
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});
