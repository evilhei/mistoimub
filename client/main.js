import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Meteor.startup(function() {
  GoogleMaps.load({
    key: 'AIzaSyDgFfEsYtB56JDhYXLvvMLgpqfKY1886vw',
    libraries: 'places'  // also accepts an array if you need more than one
  });
});

var lat, lon, events
var distance = 3000
var location;
var eventsView;


function test(url) {
  console.log(url + " tere funktsioonist")
}
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


Template.hello.events({
  'click #searchEvents'(event, instance) {
  delete events;
  console.log(events)
  location = document.getElementById("pac-input").value;
  console.log(location)
    Meteor.call('geCoordinates',
      distance, location, function(err, res) {
  if (err) {
    alert(err);
  } else {
    url = res;
    console.log(url)
    Meteor.call('getEvents', url, function(err, res) {
      if (err) {
        alert(err)

      } else {
        Session.set("Events", res)
        var events = Session.get("Events");
        Blaze.render(Template.eventsData, document.getElementById('eventsData'))
        console.log(events)
      }
    })
  }
});
}
});

Template.eventsData.helpers({
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

Template.placeAutoComplete.onRendered(function() {
  this.autorun(function () {
    if (GoogleMaps.loaded()) {
      $("#pac-input").geocomplete();
    }
  });
})

