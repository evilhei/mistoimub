import { Meteor } from 'meteor/meteor';
import geocoder from 'geocoder';
var lat, lng, url, response, locationCoords

Meteor.methods({
	'geCoordinates': function(distance,location) {
		this.unblock();
		var Future = Npm.require( 'fibers/future' ); 
		var fut = new Future();
		console.log(fut + " see")
		geocoder.geocode(location, function ( err, data ) {
			if (err) {
				console.log("See on error " + err)
			 } else {
		  		lat = data.results[0].geometry.location.lat 
		  		lng = data.results[0].geometry.location.lng
				url = 'http://localhost:3005/events?lat='+lat+'&lng='+lng+'&distance='+distance+'&sort=venue&accessToken=1048427405248222|u4dBjiRw-9gdsgml1puWYFGrEvw'
		  		fut.return( url );
			}
		})
		return fut.wait();
	},
	'getEvents': function (url) {
		console.log("works")
	response = HTTP.call( 'GET', url, {})
		return response
	}
})