  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBm5h3QNFsa04Eap2nrTvi1MMnDgP0Ds6s",
    authDomain: "hackathon-65c39.firebaseapp.com",
    databaseURL: "https://hackathon-65c39.firebaseio.com",
    storageBucket: "hackathon-65c39.appspot.com",
    messagingSenderId: "617155210229"
  };
  firebase.initializeApp(config);


	var database = firebase.database().ref('driver');
	var driverData = firebase.database().ref('driver');
	driverData.on('value', function(snapshot) {
		  console.log(database.child("driver"));
	});

	database.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    //var childKey = childSnapshot.key();

        childSnapshot.forEach(function(child2Snapshot) {
        //var childKey = childSnapshot.key();
            var childData = child2Snapshot.val();
            console.log("childData "+childData+" childKey ");

         });
        console.log(childSnapshot.child("latitude").val());

        var latlng = new google.maps.LatLng(childSnapshot.child("latitude").val(),childSnapshot.child("longitude").val());
        createMarker(latlng,'name', 'address1', 'address2', 'postalCode','ambulance');
    
    });

  });

   console.log('test');

  firebase.database().ref().child("driver").once('value', function(snapshot) {
        //logs everything that is under /user
        console.log('test' + snapshot.val());
    
  });

  var starCountRef = firebase.database().ref('driver/ZT3YQYmiUIQie9u8xOxqRpoaCca2/accuracy');
    starCountRef.on('value', function(snapshot) {
      console.log('test 2' + snapshot.val());
    });
  
