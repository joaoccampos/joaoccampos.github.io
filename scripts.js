function goToByScroll(){
    $('html,body').animate({
        scrollTop: $("#infoContainer").offset().top}, 1000);
}

$(".header-content-inner .container > a").click(function(e) { 
    // Prevent a page reload when a link is pressed
    e.preventDefault(); 
    // Call the scroll function
    goToByScroll();           
});