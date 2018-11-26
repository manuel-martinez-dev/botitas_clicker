/*
 * cat clicker function
 */

let clicksA = 0;
let clicksB =0;

//highlight and click counter
$(function(){
  $(".photoB").hover(highlight);
  $(".photoB").on("click", function(e){
    console.log('clicked');
    clicksB++;
    $("#clicksB").html(clicksB);
  })
});

$(function(){
  $(".photoA").hover(highlight);
  $(".photoA").on("click", function(e){
    console.log('clicked');
    clicksA++;
    $("#clicksA").html(clicksA);
  })
});

function highlight() {
  $(".photoB").toggleClass("highlighted");
  $(".photoA").toggleClass("highlighted");
}
