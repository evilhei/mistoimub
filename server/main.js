import { Meteor } from 'meteor/meteor';
import geocoder from 'geocoder';

Meteor.startup(() => {
geocoder.geocode("Atlanta, GA", function ( err, data ) {
  console.log(data.results) 
});
});
