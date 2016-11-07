import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var lat, lon

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

Template.hello.events({
  'click button'(event, instance) {
  	console.log(lat, lon)
    var distance = 10000
    Meteor.call('getEvents',
    	lat, lon, distance, function(err, res) {
  if (err) {
    alert(err);
  } else {
    console.log(res)
  }
});
}
});
