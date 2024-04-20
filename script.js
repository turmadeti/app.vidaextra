var parentCardCarousel = document.getElementById("card-carousel"),
    cardsCarousel = document.getElementsByClassName("cards"),
    btnCarousel = document.getElementsByClassName("btn-carousel"),
    btnCarousel1 = document.getElementById("next"),
    btnCarousel2 = document.getElementById("prev"),
    activeBtnCaousel,
    orderBtnActiveCarousel,
    orderBtnCarousel,
    findOrderCarousel,
    carouselWidth = 0,
    carouselWidth2 = 0,
    cardsWidth = 0,
    cardsOrder = 0;

for ( let i = 1 ; i < cardsCarousel.length ; i = i + 1 ) {

    cardsWidth = cardsWidth + cardsCarousel[i].offsetWidth;
    cardsCarousel[i].style.left = cardsWidth + "px";
}

btnCarousel[cardsOrder].classList.add("activebtncarousel");

for ( let i = 0 ; i < btnCarousel.length ; i = i + 1 ) {

    btnCarousel[i].setAttribute("data-order",i);

    btnCarousel[i].onclick = function () {

        activeBtnCaousel = document.querySelector(".activebtncarousel");
        orderBtnActiveCarousel = parseInt(activeBtnCaousel.getAttribute("data-order"));

        activeBtnCaousel.classList.remove("activebtncarousel");

        orderBtnCarousel = parseInt(this.getAttribute("data-order"));

        cardsOrder = orderBtnCarousel;

        this.classList.add("activebtncarousel");

        if ( orderBtnActiveCarousel < orderBtnCarousel ) {

            //parentCardCarousel.style.transition = "all 0.5s linear";

            findOrderCarousel = orderBtnCarousel - orderBtnActiveCarousel;
            
            carouselWidth += cardsCarousel[0].offsetWidth * findOrderCarousel;

            parentCardCarousel.style.right = carouselWidth + "px";

        } else if ( orderBtnActiveCarousel > orderBtnCarousel ) {

            parentCardCarousel.style.transition = "all 0.5s linear";

            findOrderCarousel = orderBtnActiveCarousel - orderBtnCarousel;

            carouselWidth -= cardsCarousel[0].offsetWidth * findOrderCarousel;

            parentCardCarousel.style.right = carouselWidth + "px";

        }

    }

}

btnCarousel1.onclick = function () {

    activeBtnCaousel = document.querySelector(".activebtncarousel");
    activeBtnCaousel.classList.remove("activebtncarousel");

    if ( cardsOrder < btnCarousel.length - 1 ) {

        //parentCardCarousel.style.transition = "all 0.5s linear";

        cardsOrder = cardsOrder + 1;

        btnCarousel[cardsOrder].classList.add("activebtncarousel");

        carouselWidth += cardsCarousel[0].offsetWidth;

        parentCardCarousel.style.right = carouselWidth + "px";

    } else {

        cardsOrder = 0;

        btnCarousel[cardsOrder].classList.add("activebtncarousel");

        carouselWidth = 0;

       // parentCardCarousel.style.transition = "all 0s linear";
        parentCardCarousel.style.right = carouselWidth + "px";

    }

}

btnCarousel2.onclick = function () {

    activeBtnCaousel = document.querySelector(".activebtncarousel");
    activeBtnCaousel.classList.remove("activebtncarousel");

    if ( cardsOrder > 0 ) {

        //parentCardCarousel.style.transition = "all 0.5s linear";

        carouselWidth -= cardsCarousel[0].offsetWidth;

        parentCardCarousel.style.right = carouselWidth + "px";
    
        cardsOrder= cardsOrder - 1;
    
        btnCarousel[cardsOrder].classList.add("activebtncarousel");

    } else {
    
        //parentCardCarousel.style.transition = "all 0s linear";

        cardsOrder = btnCarousel.length - 1;
    
        btnCarousel[cardsOrder].classList.add("activebtncarousel");

        carouselWidth = cardsCarousel[0].offsetWidth * (btnCarousel.length-1);

        parentCardCarousel.style.right = carouselWidth + "px";

        console.log("second");

    }
    
}