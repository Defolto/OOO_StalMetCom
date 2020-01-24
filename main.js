$('.col-md-6').hide();
$('.info').hide();

// $(document).ready( function(){
//   $('.navbar').hide().animate({
//     width: "toggle"
//   }, 700);
// } );

$(document).ready( function(){
  setTimeout( function(){
    $('.col-md-6').slideDown(900);
  }, 700);
  setTimeout( function(){
    $('.info').show(500);
  }, 1600);
} );



