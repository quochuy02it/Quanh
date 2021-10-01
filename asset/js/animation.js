var navButtons = document.querySelectorAll('.header__nav li');
var chevronButtons = document.querySelectorAll('.header__buttons li');
var blockRight = document.querySelectorAll('.block_right_child');
var moveRight = document.querySelector('.move_slide_right');
var moveLeft = document.querySelector('.move_slide_left');

var count = 0;

for(let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click',function() {
        count = i;
        for(let j = 0; j < blockRight.length; j++) {
            blockRight[j].classList.remove('block_active');
        }
        blockRight[i].classList.add('block_active');
    })
}

function move() {
    for(let i = 0; i < blockRight.length; i++) {
        blockRight[i].classList.remove('block_active')
        navButtons[i].childNodes[0].classList.remove('chose-icon')
    }
    blockRight[count].classList.add('block_active');
    navButtons[count].childNodes[0].classList.add('chose-icon')
}

moveRight.onclick = function() {
    if (count == blockRight.length - 1) {
        count = 0;
    } else {
        count++;
    }
    move();
}

moveLeft.onclick = function() {
    if (count == 0) {
        count = blockRight.length - 1;
    } else {
        count--;
    }
    move();
}