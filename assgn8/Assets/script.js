// rotate golden record on scroll
var goldenRecordOrig = document.getElementById("gr-orig");
window.addEventListener("scroll", function() {
    goldenRecordOrig.style.transform = "rotate("+window.pageYOffset+"deg)";
});

// ScrollReveal().reveal('.headline');
// ScrollReveal().reveal('.tagline', { delay: 500 });
// ScrollReveal().reveal('.punchline', { delay: 2000 });

console.log(document.getElementById('gr-orig'))
console.log(document.getElementById('spacer'))

var recordHeight=document.getElementById('gr-orig').style.height;
var spacerHeight=document.getElementById('spacer').style.height;
console.log("spacer height =" + spacerHeight)
console.log("record height =" + recordHeight)

document.getElementById('gr-orig').style.height=spacerHeight;
console.log("new record height =" + recordHeight)

// if(recordHeight>(spacerHeight*2))
// {
//     document.getElementById('gr-orig').style.height=(spacerHeight*2);
// }
// else
// {
//     document.getElementById('leftdiv').style.height=right;
// }
