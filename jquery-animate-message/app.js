$(function(){
    $("#header").click(function(){
        $("#content").toggle("slow");
    });
    $("#close").click(function(){
        $("#message-box").hide(3000);
    });

});