// //show/hide
// $(document).ready(function(){
//     $("#hide").click(function(){
//         $(".p1").hide(2000);
//     });
// });
// $(document).ready(function(){
//     $("#Show").click(function(){
//         $(".p1").show(4000,function(){
//             alert(".p1aragraf gösterildi")
//         });
//     });
// });
// // $(document).ready(function(){
// //     $("#toggle").click(function(){
// //         $(".p1").toggle(3000);
// //     });
// // });


// FADE/SLIDE 

//slide
// $(document).ready(function(){
//     $("#slideUp").click(function(){
//         $("div").slideUp(3000);
//     });
//     $("#slideDown").click(function(){
//         $("div").slideDown(3000);
//     });
//     $("#toggle").click(function(){
//         $("div").slideToggle();
//     });
// });


//fade
$(document).ready(function(){
    $("#fadeIn").click(function(){
        $("div").fadeIn();
    });
    $("#fadeOut").click(function(){
        $("div").fadeOut();
    });
    $("#fadeTo").click(function(){
        $("div").fadeTo(3000, 1);
    });
    $("#toggle").click(function(){
        $("div").fadeToggle();
    });
});
