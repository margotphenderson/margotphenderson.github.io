// rotate golden record on scroll
var goldenRecordOrig = document.getElementById("gr-orig");
window.addEventListener("scroll", function() {
    goldenRecordOrig.style.transform = "rotate("+window.pageYOffset+"deg)";
});

// ===== Scroll to Top (rocket) by  https://codepen.io/Askwithloud/pen/yNRPWB

jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop()<50){
        jQuery('#rocketmeluncur').slideUp(500);
    }else{
        jQuery('#rocketmeluncur').slideDown(500);
    }
    var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
    var scrolltoprocketmeluncur = $('rocketmeluncur');
var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
if (basewrocketmeluncur < 1000) {
var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)['left']);
leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
scrolltoprocketmeluncur.style.left = ( basewrocketmeluncur + leftrocketmeluncur ) + 'px';
} else {
scrolltoprocketmeluncur.style.left = 'auto';
scrolltoprocketmeluncur.style.right = '10px';
}
})

jQuery('#rocketmeluncur').click(function(){
    jQuery("html, body").animate({ scrollTop: '0px',display:'none'},{
            duration: 200,
            easing: 'linear'
        });

    var self = this;
    this.className += ' '+"launchrocket";
    setTimeout(function(){
      self.className = 'showrocket';
    },800)
});

//rotate links on scroll
// var allLinks = document.getElementById("all-links");
// window.addEventListener("scroll", function() {
//     allLinks.style.transform = "rotate("+window.pageYOffset+"deg)";
// });

// For later implementation...
// Fade in elements on scroll by  https://codepen.io/obadaa/pen/VQQYpN
// $(function(){  // $(document).ready shorthand
//   $('.container').fadeIn('slow');
// });
//
// $(document).ready(function() {
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//         /* Check the location of each desired element */
//         $('.hideme').each( function(i){
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
//                 $(this).animate({'opacity':'1'},1500);
//             }
//         });
//     });
// });
