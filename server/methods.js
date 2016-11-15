import { Meteor } from 'meteor/meteor';
import geocoder from 'geocoder';
var lat, lng, url, response, locationCoords


function test(url) {
	Meteor.call('getEvents', url)
}
Meteor.methods({
	'geCoordinates': function(distance,location) {
		geocoder.geocode(location, function ( err, data ) {
			if (err) {
				console.log("See on error " + err)
			 } else {
			 	locationCoords = data;
			 	console.log(locationCoords)
		  		lat = data.results[0].geometry.location.lat 
		  		lng = data.results[0].geometry.location.lng
     	  		url = 'http://localhost:3005/events?lat='+lat+'&lng='+lng+'&distance='+distance+'&sort=venue&accessToken=1048427405248222|u4dBjiRw-9gdsgml1puWYFGrEvw'
     	  		//var response = HTTP.call( 'GET', url, {})
     	  		test(url)
			}

		})
		console.log(locationCoords)
		return locationCoords
	},
	'getEvents': function (url) {
		console.log("works")
	response = HTTP.call( 'GET', url, {})
		return response
	}
})