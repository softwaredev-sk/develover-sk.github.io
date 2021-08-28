const nightBtn = document.querySelector('.header__menu-0');
// const nightBtnSpan = document.querySelector('#nightbtn');
const bdy = document.body;
const img = document.querySelector('.main__image');
const hdr1 = document.querySelector('#home');
const hdr2 = document.querySelector('#portfolio');
const hdr3 = document.querySelector('#contact');
const hdr4 = document.querySelector('#resume');
const foot = document.querySelector('.footer');
const name = document.querySelector('.main__text span');
nightBtn.addEventListener('click', () => {
    if (nightBtn.textContent === '🌑') {
        bdy.style.backgroundColor = 'black';
        bdy.style.color = 'white';
        hdr1.style.color = 'white';
        hdr2.style.color = 'white';
        hdr3.style.color = 'white';
        hdr4.style.color = 'white';
        name.style.filter = 'invert(100%)';
        nightBtn.textContent = '☀️';
        nightBtn.style.boxShadow = 'none';
        nightBtn.style.filter = 'brightness(100%)';
        img.style.filter = 'grayscale(100%)';
        foot.style.filter = 'invert(100%)';
    } else if (nightBtn.textContent === '☀️') {
        bdy.style.backgroundColor = 'white';
        bdy.style.color = 'black';
        hdr1.style.color = 'black';
        hdr2.style.color = 'black';
        hdr3.style.color = 'black';
        hdr4.style.color = 'black';
        name.style.filter = 'invert(0%)';
        nightBtn.textContent = '🌑';
        nightBtn.style.boxShadow = 'inset 0 0 10px 10px black, 0 0 10px 5px black';
        nightBtn.style.filter = 'brightness(10%)';
        img.style.filter = 'grayscale(0%)';
        foot.style.filter = 'invert(0%)';
    }
})