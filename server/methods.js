import { Meteor } from 'meteor/meteor';

Meteor.methods({
	'getEvents': function(lat, len, distance){
		console.log(distance)
		url = 'http://localhost:3005/events?lat='+lat+'&lng='+len+'&distance='+distance+'&sort=venue&accessToken=1048427405248222|u4dBjiRw-9gdsgml1puWYFGrEvw'
		console.log(url)
		var response = HTTP.call( 'GET', url , {} );
		return response;
	}
})