import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var lat, lon, events
var distance = 3000

/*
Template.hello.onCreated(function helloOnCreated() {
if ("geolocation" in navigator) {
navigator.geolocation.getCurrentPosition(function(position) {
	lat = position.coords.latitude
	lon = position.coords.longitude
});
} else {
	lat = 58.3671
	lon = 25.5974
}
});
*/

lat = 59.434316
lon = 24.745185

Template.hello.events({
  'click button'(event, instance) {
    Meteor.call('getEvents',
    	lat, lon, distance, function(err, res) {
  if (err) {
    alert(err);
  } else {
  	Session.set("Events", res)
  		var events = Session.get("Events");
  		console.log(events)
  }
});
}
});



Template.hello.helpers({
	events: function() {
	var events = Session.get("Events");
	if (!_.isEmpty(events)){
	  	return events.data.events
		}
	else {
		return []
	}
	}
})