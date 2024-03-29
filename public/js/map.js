// *
// * Add multiple markers
// * 2013 - en.marnoto.com
// *

// necessary variables
var map;
var infoWindow;
var markers=[];
var count=0;

// markersData variable stores the information necessary to each marker
//    {
//       lat: 40.6386333,
//       lng: -8.745,
//       name: "Camping Praia da Barra",
//       address1:"Rua Diogo Cão, 125",
//       address2: "Praia da Barra",
//       postalCode: "3830-772 Gafanha da Nazaré" // don't insert comma in the last item of each marker
//    },
//    {
//       lat: 40.59955,
//       lng: -8.7498167,
//       name: "Camping Costa Nova",
//       address1:"Quinta dos Patos, n.º 2",
//       address2: "Praia da Costa Nova",
//       postalCode: "3830-453 Gafanha da Encarnação" // don't insert comma in the last item of each marker
//    },
//    {
//       lat: 40.6247167,
//       lng: -8.7129167,
//       name: "Camping Gafanha da Nazaré",
//       address1:"Rua dos Balneários do Complexo Desportivo",
//       address2: "Gafanha da Nazaré",
//       postalCode: "3830-225 Gafanha da Nazaré" // don't insert comma in the last item of each marker
//    } // don't insert comma in the last item
// ];


function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(13.0827,80.2707),
      zoom: 11 ,
      mapTypeId: 'roadmap',
   };

   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   // a new Info Window is created
   infoWindow = new google.maps.InfoWindow();

   // Event that closes the Info Window with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
   //displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);


// This function will iterate over markersData array
// creating markers with createMarker function
// function displayMarkers(){

//    // this variable sets the map bounds according to markers position
//    var bounds = new google.maps.LatLngBounds();
   
//    // for loop traverses markersData array calling createMarker function for each marker 
//    for (var i = 0; i < markersData.length; i++){

//       var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
//       var name = markersData[i].name;
//       var address1 = markersData[i].address1;
//       var address2 = markersData[i].address2;
//       var postalCode = markersData[i].postalCode;

//       createMarker(latlng, name, address1, address2, postalCode);

//       // marker position is added to bounds variable
//       bounds.extend(latlng);  
//    }

//    // Finally the bounds variable is used to set the map bounds
//    // with fitBounds() function
//    map.fitBounds(bounds);
// }

// This function creates each marker and it sets their Info Window content
function createMarker(latlng, name,phone, type){
 

   // var image = {
   //    url: 'images/ambulance.png',
   //    size: new google.maps.Size(256, 256),
   //    origin: new google.maps.Point(0, 0),
   //    anchor: new google.maps.Point(17, 34),
   //    scaledSize: new google.maps.Size(30, 30)
   // };
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      title: name,
      // icon: image,
      // anchorPoint: new google.maps.Point(-5, -20)
   });
   

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
      
      // Creating the content to be inserted in the infowindow
      var iwContent = '<div id="iw_container" style="float:left;">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + phone + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });

    var div = document.createElement('div');

    div.className = 'row';

    div.innerHTML = '<center>' + name + ' '+  '(+91' + phone + ")" + '</center>'+'<br />';


   div.addEventListener('click', function() {
      
      // Creating the content to be inserted in the infowindow
      var iwContent = '<div id="iw_container_list" style="float:left;">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + '+91'+phone + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });

   document.getElementById('driver_list').appendChild(div);
   markers[count]=marker;

   count++;
}

function removeAll(){
   for(var i=0; i < count; i++){
    markers[i].setMap(null);
  }
  count=0;
}