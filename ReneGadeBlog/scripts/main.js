/********************************
    Page Fade
 *******************************/

$(document).ready(function () {

    setTimeout(function () {
    $('body').fadeIn(500);
    }, 600);

   
    
    $('a').on('click', function (event) {
        if (!$(this).hasClass('comment-toggle') && !$(this).parents('.sub').length) {

            event.preventDefault();

            newLocation = this.href;

            $('body').fadeOut(500, newpage);
        }
     });
    

    function newpage() {

        window.location = newLocation;

    }

});


/********************************
    Navigation
 *******************************/
$("nav#navigation ul li.sub > a").on("click", function (e) {
    e.preventDefault();

    var this_parent = $(this).parent("li"),
        this_sub = $(this).siblings("ul"),
        all_active = $("nav#navigation ul li.current").not($(this).parents("li.current"));

    if (this_parent.hasClass("current")) {

        this_sub.slideUp(200);
        setTimeout(function () {
            this_parent.removeClass("current");
        }, 200);

    } else {

        all_active.children("ul").slideUp(200);
        setTimeout(function () {
            all_active.removeClass("current");
        }, 200);

        this_sub.slideDown(200);
        setTimeout(function () {
            this_parent.addClass("current");
        }, 200);

    }
});

/********************************
    Toggle Comments
 *******************************/

$('.comment-toggle').on('click', function (event) {

    event.preventDefault();

    $('.comment-hide').slideToggle('slow');
   
});


/********************************
    Google Map
 *******************************/

/*-- GOOGLE MAP --*/

    $(".google-map").width("100%").height("400px").gmap3({
        map: {
            options: {
                center: [51.5209564, 0.157134],
                zoom: 15,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        },
        marker: {
            latLng: [51.5209564, 0.157134]
        }
    });

/*-- GOOGLE MAP END --*/




