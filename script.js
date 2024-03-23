function moveNoButton() {
    var buttonNo = document.querySelector('.button-container button:nth-child(2)');
    var randomPositionX = Math.floor(Math.random() * window.innerWidth);
    var randomPositionY = Math.floor(Math.random() * window.innerHeight);
    buttonNo.style.position = 'absolute';
    buttonNo.style.left = randomPositionX + 'px';
    buttonNo.style.top = randomPositionY + 'px';
}
function redirectToPage() {
    window.location.href = 'yes.html';
}
function respond(responce) {
    if(responce===1) {
        window.location.href = 'no1.html';
    }else if(responce===2) {
        window.location.href = 'no2.html';
    }else if(responce===3) {
        window.location.href = 'no3.html';
    }
}