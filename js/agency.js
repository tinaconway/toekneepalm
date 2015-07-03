/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.`navbar-fixed-top`'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var isChrome = !!window.chrome;

console.log("working");
if( isChrome ) {
$("#tymel").replaceWith($('<source src="img/tymelwed.webmsd.webm" type=video/webm >'));
$("#nateChristine").replaceWith($('<source src="img/natechristine.webmsd.webm" type=video/webm >'));
$("#nadiaMatt").replaceWith($('<source src="img/nadiamatt.webmsd.webm" type=video/webm >'));
$("#paradise").replaceWith($('<source src="img/paradise.webmsd.webm" type=video/webm >'));
$("#pizza").replaceWith($('<source src="img/pizza.webmsd.webm" type=video/webm >'));
$("#yoga").replaceWith($('<source src="img/yoga.webmsd.webm" type=video/webm >'));
$("#johnny").replaceWith($('<source src="img/johnny.webmsd.webm" type=video/webm >'));
$("#brad").replaceWith($('<source src="img/brad.webmsd.webm" type=video/webm >'));
$("#hometown").replaceWith($('<source src="img/homewtown.webmsd.webm" type=video/webm >'));
$("#ganon").replaceWith($('<source src="img/ganon.webmsd.webm" type=video/webm >'));
}
