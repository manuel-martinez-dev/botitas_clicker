/*
 * cat clicker function
 */

let clicksA =0;
let clicksB =0;
let displayClicks = document.getElementsByClassName('counter');

//click counter
$(function(){
  $(".photoB").on("click", function(e){
    //console.log('clicked');
    clicksB++;
    $("#clicksB").html(clicksB);
    $(".photoB").removeClass("highlighted");
  })
});

$(function(){
  $(".photoA").on("click", function(e){
    //console.log('clicked');
    clicksA++;
    $("#clicksA").html(clicksA);
    $(".photoA").removeClass("highlighted");
  })
});

//highlights the images by adding a border

function highlight() {
  $(".photoB").toggleClass("highlighted");
  $(".photoA").toggleClass("highlighted");
}

//redo button on click action
let resetClicks = function () {
  $("#clicksB").html(clicksB);
  $("#clicksA").html(clicksA);
  $(".photoA").addClass("highlighted");
  $(".photoB").addClass("highlighted");
}

$(".restart").click(function(e){
  console.log('zero');
  clicksA= 0;
  clicksB= 0;
  resetClicks();
});
