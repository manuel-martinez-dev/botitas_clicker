/*
 * cat clicker function
 */

let clicks = 0;

//document.getElementById('photo').addEventListener('click', function(event){
  //console.log('clicked')
//}, false);

$(function(){
  $("img").on("mouseover mouseleave", highlight);
  $("img").on("click", function(e){
    clicks++;
    $("#clicks").html(clicks);
  })
});

function highlight() {
  $("img").toggleClass("highlighted");
}
