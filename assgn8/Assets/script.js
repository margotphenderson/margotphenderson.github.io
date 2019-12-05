// rotate golden record on scroll
var goldenRecordOrig = document.getElementById("gr-orig");
window.addEventListener("scroll", function() {
    goldenRecordOrig.style.transform = "rotate("+window.pageYOffset+"deg)";
});

// ScrollReveal().reveal('.headline');
// ScrollReveal().reveal('.tagline', { delay: 500 });
// ScrollReveal().reveal('.punchline', { delay: 2000 });

// console.log(document.getElementById('gr-orig'))
// console.log(document.getElementById('spacer'))
//
// var recordHeight=document.getElementById('gr-orig').style.height;
// var spacerHeight=document.getElementById('spacer').style.height;
// console.log("spacer height =" + spacerHeight)
// console.log("record height =" + recordHeight)
//
// document.getElementById('gr-orig').style.height=spacerHeight;
// console.log("new record height =" + recordHeight)

// if(recordHeight>(spacerHeight*2))
// {
//     document.getElementById('gr-orig').style.height=(spacerHeight*2);
// }
// else
// {
//     document.getElementById('leftdiv').style.height=right;
// }





// ===== Scroll to Top by  https://codepen.io/rdallaire/pen/apoyx

// $(window).scroll(function() {
//     if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
//         $('#return-to-top').fadeIn(200);    // Fade in the arrow
//     } else {
//         $('#return-to-top').fadeOut(200);   // Else fade out the arrow
//     }
// });
// $('#return-to-top').click(function() {      // When arrow is clicked
//     $('body,html').animate({
//         scrollTop : 0                       // Scroll to top of body
//     }, 500);
// });


// ===== Scroll to Top by  https://codepen.io/Askwithloud/pen/yNRPWB

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
