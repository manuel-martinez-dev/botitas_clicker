/*
 * cat clicker function
 */

let clicks = 0;

//highlight and click counter
$(function(){
  $(".photoB").hover(highlight);
  $(".photoB").on("click", function(e){
    console.log('clicked');
    clicks++;
    $("#clicksB").html(clicks);
  })
});

$(function(){
  $(".photoA").hover(highlight);
  $(".photoA").on("click", function(e){
    console.log('clicked');
    clicks++;
    $("#clicksA").html(clicks);
  })
});

function highlight() {
  $(".photoB").toggleClass("highlighted");
  $(".photoA").toggleClass("highlighted");
}
