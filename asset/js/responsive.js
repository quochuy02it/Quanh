if(screen.width <= 1023) {

    const page = document.querySelector('body');
    const subnames = document.querySelectorAll('.block__subname p ');

    var mouseX,  mouse = false, count = 0, next = 1, prev = subnames.length - 1;

    for(let subname of subnames) {
        subname.addEventListener('touchstart',function(event1) {
            mouseX = event1.touches[0].pageX;
            mouse = true;
            page.addEventListener('touchmove',function(event2) {
                if(mouse == true) {
                    subnames[count].classList.add('fadeIn');
                    subnames[next].classList.add('fadeIn');
                    subnames[prev].classList.add('fadeIn');

                    subnames[count].classList.remove('transition');
                    subnames[next].classList.remove('transition')
                    subnames[prev].classList.remove('transition');
                    
                    subnames[count].style.left = `calc(${event2.touches[0].pageX}px - ${mouseX}px)`;
                    subnames[next].style.left = `calc(100% + ${event2.touches[0].pageX}px - ${mouseX}px)`;
                    subnames[prev].style.left = `calc(-100% + ${event2.touches[0].pageX}px - ${mouseX}px)`
                }
            })
            page.ontouchend= function() {
                subnames[count].classList.add('transition');
                    style = getComputedStyle(subnames[count]);
                    if(parseFloat(style.left) < 0) {
                        subnames[next].classList.add('transition');
                        subnames[count].style.left = "-100%";
                        subnames[next].style.left = "0%";
                        if(count == subnames.length - 1) {
                            count = 0;
                        }
                        else {
                            count++;
                        }
                    }
                    
                    else if (parseFloat(style.left)  > 0) {
                        subnames[prev].classList.add('transition');
                        subnames[count].style.left = "100%";
                        subnames[prev].style.left = "0%";
                        if(count == 0) {
                            count = subnames.length - 1;
                        }
                        else {
                            count--;
                        }
                    }

                    // else {
                    //     subnames[count].style.left = "0%";
                    //     mouse = false;
                    //     return;
                    // }
        
                    if(count == 0) {
                        prev = subnames.length - 1;
                        next = count + 1;
                    }
                    else if (count == subnames.length - 1) {
                        next = 0;
                        prev = count - 1;
                    }
        
                    else {
                        next = count + 1;
                        prev = count - 1;
                    }
                    
                    mouse = false;
            }
        
        })
    }
       
 



}