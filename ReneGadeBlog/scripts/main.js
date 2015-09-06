/********************************
    Page Fade
 *******************************/

$(document).ready(function () {

    setTimeout(function () {
    $('body').fadeIn(500);
    }, 600);

   
    
    $('a').on('click', function (event) {
        if (!$(this).hasClass('comment-toggle') && !$(this).parents('.sub').length && !$(this).parents('.social-icons')) {

            event.preventDefault();

            newLocation = this.href;

            $('body').fadeOut(500, newpage);
        }
     });
    

    function newpage() {

        window.location = newLocation;

    }

    setTimeout(function () {

        /********************************
            Accordion Height
         *******************************/

        var sidebarHeight = $('.sidebar').height();
        var accordionHeight = $('.accordion').height();

        if (sidebarHeight > accordionHeight) {

            $('.accordion').height(sidebarHeight);
        }

    /********************************
            Google Map
         *******************************/

    /*-- GOOGLE MAP --*/
    function initialize() {

        var myLatLng = new google.maps.LatLng(56.164048, 10.212357),
            myOptions = {
                zoom: 15,
                center: myLatLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                scrollwheel: false,
                streetViewControl: false,
                draggable: true,
                //styles: [{ "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#d3d3d3" }] }, { "featureType": "transit", "stylers": [{ "color": "#808080" }, { "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "visibility": "on" }, { "color": "#b3b3b3" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "weight": 1.8 }] }, { "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [{ "color": "#d7d7d7" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#ebebeb" }] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "color": "#a7a7a7" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#efefef" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#696969" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "visibility": "on" }, { "color": "#737373" }] }, { "featureType": "poi", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#d6d6d6" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, {}, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#dadada" }] }]

            },
            map = new google.maps.Map(document.getElementById('map'), myOptions),
            marker = new google.maps.Marker({ position: myLatLng, map: map });

        marker.setMap(map);

    }

    initialize();



    }, 700);
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
     Mobile Menu
*******************************/

$('.mobile a').on('click', function (e) {
    e.preventDefault();

    $('#navigation').toggleClass('not-active');
    $('#navigation').toggleClass('active');
    $('.mobile a i').toggleClass('fa-bars');
    $('.mobile a i').toggleClass('fa-times')
});

/********************************
    Toggle Comments
 *******************************/

$('.comment-toggle').on('click', function (event) {

    event.preventDefault();

    $(this).closest('.post').find('.comment-hide').slideToggle('slow');
   
});


/********************************
    SoMe Share Buttons
 *******************************/

$('#twitter').sharrre({
    share: { twitter: true },
    url: 'http://www.paulund.co.uk',
    enableHover: false,
    enableTracking: true,
    template: '<a href="#"><i class="fa fa-twitter"></i></a>',
    buttons: { twitter: { via: 'renegadedreng' } },
    click: function (api, options) {
        api.simulateClick();
        api.openPopup('twitter');
    }
});

$('#facebook').sharrre({
    share: { facebook: true },
    url: 'http://www.paulund.co.uk',
    enableHover: false,
    enableTracking: true,
    template: '<a href="#"><i class="fa fa-facebook"></i></a>',
    click: function (api, options) {
        api.simulateClick();
        api.openPopup('facebook');
    }
});

$('#google').sharrre({
    share: {
        linkedin: true
    },
    template: '<a href="#"><i class="fa fa-linkedin"></i></a>',
    enableHover: false,
    enableTracking: true,
    click: function (api, options) {
        api.simulateClick();
        api.openPopup('linkedin');
    }
});

/********************************
    Accordion instantiate
 *******************************/

$(function ($) {

    $(document).ready(function () {
        $(".accordion").smk_Accordion({
            closeAble: true
        });
    });

});








