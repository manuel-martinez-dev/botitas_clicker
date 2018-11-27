/*
 * cat clicker function
 */

let clicksA =0;
let clicksB =0;
let displayClicks = document.getElementsByClassName('counter');

let resetClicks = function () {
  $("#clicksB").html(clicksB);
  $("#clicksA").html(clicksA);
}

//highlight and click counter
$(function(){
  $(".photoB").hover(highlight);
  $(".photoB").on("click", function(e){
    //console.log('clicked');
    clicksB++;
    $("#clicksB").html(clicksB);
  })
});

$(function(){
  $(".photoA").hover(highlight);
  $(".photoA").on("click", function(e){
    //console.log('clicked');
    clicksA++;
    $("#clicksA").html(clicksA);
  })
});

function highlight() {
  $(".photoB").toggleClass("highlighted");
  $(".photoA").toggleClass("highlighted");
}

//it resets to zero but the click counter is not displaying zero

$(".restart").click(function(e){
  console.log('zero');
  clicksA= 0;
  clicksB= 0;
  resetClicks();
});
