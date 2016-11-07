import { Meteor } from 'meteor/meteor';

Meteor.methods({
	'getEvents': function(lat, len, distance){
		console.log(distance)
		url = 'http://localhost:3005/events?lat='+lat+'&lng='+len+'&distance='+distance+'&sort=venue&accessToken=1331698156864408|RAFp-U2V7a96P5ToXDoieXLmgSs'
		console.log(url)
		var response = HTTP.call( 'GET', url , {} );
		return response;
	}
})