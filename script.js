$(".top-left").click(function(){
    $(".top-left").text("Thank you for clicking me!");
    
    $(".top-left").css("background-color","green");
});

$(".top-right").dblclick(function(){
     $(".top-right").text("Thank you for double-clicking me!");
    
    $(".top-right").css("background-color","blue");
});

$(".bottom-left").hover(function(){
    $(".bottom-left").text("Thank you for hovering on me!");
    
    $(".bottom-left").css("background-color","yellow");

});

$(".bottom-right").mouseenter(function(){
    $(".bottom-right").text("Thank you for visiting");
    
    $(".bottom-right").css("background-color","red");
});

    