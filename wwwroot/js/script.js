// (function () {
$(document).ready(function() {
    $('#intro').hover(function(){
        $('#intro-description').toggle();
    });
    $('#hpe').hover(function(){
        $('#hpe-description').toggle();
    });
    $('#encompass').hover(function(){
        $('#encompass-description').toggle();
    });
    $('#csu').hover(function(){
        $('#csu-description').toggle();
    });
    $('#bcr').hover(function(){
        $('#bcr-description').toggle();
    });
    $('#parks').hover(function(){
        $('#parks-description').toggle();
    });
    $('#wa').hover(function(){
        $('#wa-description').toggle();
    });
    $('#cwu').hover(function(){
        $('#cwu-description').toggle();
    });
    $('#msu').hover(function(){
        $('#msu-description').toggle();
    });

    $(".pull-me").click(function(){
        $("#header").slideToggle();
    });

    // var scrollHandle = 0,
    //     scrollStep = 5,
    //     parent = $(window);

    // //Start the scrolling process
    // $(".panner").on("mouseenter", function () {
    //     var data = $(this).data('scrollModifier'),
    //         direction = parseInt(data, 10);        

    //     $(this).addClass('active');

    //     startScrolling(direction, scrollStep);
    // });

    // //Kill the scrolling
    // $(".panner").on("mouseleave", function () {
    //     stopScrolling();
    //     $(this).removeClass('active');
    // });

    // //Actual handling of the scrolling
    // function startScrolling(modifier, step) {
    //     if (scrollHandle === 0) {
    //         scrollHandle = setInterval(function () {
    //             var newOffset = parent.scrollLeft() + (scrollStep * modifier);

    //             parent.scrollLeft(newOffset);
    //         }, 10);
    //     }
    // }

    // function stopScrolling() {
    //     clearInterval(scrollHandle);
    //     scrollHandle = 0;
    // }
});
// }());