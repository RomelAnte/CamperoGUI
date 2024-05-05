var carouselWidth = $(".carousel-inner1")[0].scrollWidth;
var cardWidth = $(".carousel-item1").width();

var scrollPosition = 0;

$(".carousel-control-next").on("click",function(){
    if(scrollPosition < (carouselWidth - (cardWidth * 4))){
        console.log("next");
        scrollPosition = scrollPosition + cardWidth;
        $(".carousel-inner1").animate({scrollLeft: scrollPosition},600);
    }
});
$(".carousel-control-prev").on("click",function(){
    if(scrollPosition > 0){
        console.log("prev");
        scrollPosition = scrollPosition - cardWidth;
        $(".carousel-inner1").animate({scrollLeft: scrollPosition},600);
    }
});