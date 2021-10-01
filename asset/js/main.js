const speed = 20;
const main = document.querySelector('#main');
const lis = document.querySelectorAll('.header__nav li');
const centerX = main.offsetLeft + main.offsetWidth / 2;
const centerY = main.offsetTop + main.offsetHeight / 2;

function setPosition(event) {
    const posX = (event.clientX - centerX) / speed;
    const posY = (event.clientY - centerY) / speed;
    main.style.backgroundPosition = `calc(50% - ${posX}px) calc(50% - ${posY}px)`;
}

for(const li of lis) {
    li.onclick = function() {
        for(const li_rm of lis) {
            li_rm.childNodes[0].classList.remove('chose-icon');
        }
        this.childNodes[0].classList.add('chose-icon');
    }

for(const li of lis) {
    li.onmouseover = function() {
       this.childNodes[1].classList.add('fadeIn');
    }
    
    li.onmouseout = function() {
        this.childNodes[1].classList.remove('fadeIn');
    }

}

}