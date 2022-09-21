$(document).ready(function(){
    $("#animate").click(function(){
        $("#box").animate(
            {
                left:"200px",
                width:"300px",
                height:"300px"
            },
            4000
        );
        $("#box").animate({top:"200px", width:"10px",height:"10px"},5000);
    });
});