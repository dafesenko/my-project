 export function myMap() {
   console.log(map);
  var myCenter = new google.maps.LatLng(50.529491,30.454880);
  var mapProp= {
      center: myCenter,
      zoom: 15,
      mapTypeId:google.maps.MapTypeId.HYBRID
  };

  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({position:myCenter, animation: google.maps.Animation.BOUNCE});
  marker.setMap(map);

  google.maps.event.addListener(marker,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Visit Us!"
    });
  infowindow.open(map,marker);
  });
}