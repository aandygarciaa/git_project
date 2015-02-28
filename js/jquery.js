$(function() {
  $('nav#menu').mmenu();
});

$("#the_only_table tr").onClick( function() {
  alert("blah");
  window.location = $(this).find('a').attr('href');
});
// }).hover( function() {
//   $(this).toggleClass('hover');
// });

function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(34.1442, 118.0019),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);