import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  address1: attr('string'),
  city: attr('string'),
  country: attr('string'),
  lat: attr('number'),
  localizedCountryName: attr('string'),
  lon: attr('number'),
  name: attr('string'),
  repinned: attr('boolean'),
  state: attr('string'),
  zip: attr('string')
});
