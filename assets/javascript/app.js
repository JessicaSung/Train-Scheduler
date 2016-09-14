// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBmRQGGDRAYPh_j5_urgHgQhnS80NVHils",
    authDomain: "train-time-70216.firebaseapp.com",
    databaseURL: "https://train-time-70216.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "919046156008"
  };
  firebase.initializeApp(config);


  // VARIABLES
	var database = firebase.database();

	var trainName = "";
	var destination = "";
	var firstTrainTime = "";
	var frequency = 0;


// FUNCTIONS + EVENTS
$("addTrain").on("click", function() {

  trainName = $('#nameInput').val().trim();
  destination = $('#destinationInput').val().trim();
  firstTrainTime = $('#firstTrainInput').val().trim();
  frequency = $('#frequencyInput').val().trim();

  console.log(trainName);
  console.log(destination);
  console.log(firstTrainTime);
  console.log(frequency);

  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency
  });

    return false;
});


// MAIN PROCESS + INITIAL CODE
  database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());

    // update the variable with data from the database
    trainName = snapshot.val().trainName;
    destination = snapshot.val().destination;
    firstTrainTime = snapshot.val().firstTrainTime;
    frequency = snapshot.val().frequency;

    // add table
    var tr = $('<tr>');
    var a = $('<td>');
    var b = $('<td>');
    var c = $('<td>');
    var d = $('<td>');
    var e = $('<td>');
    a.append(trainName);
    b.append(destination);
    c.append(frequency);
    d.append("Next Arrival");
    e.append("Minutes Away");
    tr.append(a).append(b).append(c).append(d).append(e);
    $('#newTrains').append(tr);


    }, function (errorObject) {

    // In case of error this will print the error
      console.log("The read failed: " + errorObject.code);
  
  });



