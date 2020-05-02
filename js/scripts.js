$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){

        var carouselIcon = $("#carouselButton").children("i");
       
        if (carouselIcon.hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            carouselIcon.removeClass("fa-pause");
            carouselIcon.addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            carouselIcon.removeClass("fa-play");
            carouselIcon.addClass("fa-pause"); 
        }
    });

    

});

$(function(){
    $("#reserveButton").click(function(){
    console.log("reserveButton")
        $("#reserveModal").modal("show");
    });

    $("#loginButton").click(function(){
        console.log("loginButton")
        $("#loginModal").modal("show");
    }) 
})