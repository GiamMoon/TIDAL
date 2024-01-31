if (window.matchMedia("(min-width:768px)").matches) {
    const carouselWidth = $(".carousel-inner")[0].scrollWidth;
const cardWidth = $(".carousel-item").width();

let scrollPosition = 0;

$(".carousel-control-next").on("click", function(){
    if (scrollPosition < (carouselWidth-(cardWidth*4) )) {
        scrollPosition = scrollPosition + cardWidth;
        $(".carousel-inner").animate({scrollLeft: scrollPosition}, 600);
    }
 
});
$(".carousel-control-prev").on("click", function(){
    if (scrollPosition > 0) {
        scrollPosition = scrollPosition - cardWidth;
        $(".carousel-inner").animate({scrollLeft: scrollPosition}, 600);
    }
 
});

}


document.addEventListener("DOMContentLoaded", function() {
    const albumContainer = document.getElementById("albumContainer");
    let scrollPosition = 0;

    const albumSection = document.querySelector(".albumes");
    const sectionTop = albumSection.offsetTop;

    window.addEventListener("scroll", function() {
        const newScrollPosition = window.scrollY;

        if (newScrollPosition >= (sectionTop - 400)) {
            if (newScrollPosition > scrollPosition) {
                // Scrolling down
                if (scrollPosition < (albumContainer.scrollWidth - albumContainer.clientWidth)) {
                    scrollPosition = scrollPosition + 10;  // Puedes ajustar la velocidad de desplazamiento aquí
                }
            }

            albumContainer.style.transform = "translateX(-" + scrollPosition + "px)";
        } else if (scrollPosition > 0) {
            // Si estás por encima de la sección y la posición actual es mayor que 0, regresa gradualmente a la posición original
            scrollPosition = Math.max(0, scrollPosition - 10);  // Puedes ajustar la velocidad de regreso aquí
            albumContainer.style.transform = "translateX(-" + scrollPosition + "px)";
        }
    });
});


 