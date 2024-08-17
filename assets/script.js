function nav() {
    var open = document.getElementById('open');
    var close = document.getElementById('close');
    var nav = document.getElementById('nav');

    nav.classList.toggle('active');

    open.addEventListener('click', function() {
        open.style.display = 'none';
        close.style.display = 'block';
    });
    close.addEventListener('click', function() {
        open.style.display = 'block';
        close.style.display = 'none';
    });

}