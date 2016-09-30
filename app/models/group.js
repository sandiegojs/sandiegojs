import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  created: attr('number'),
  joinMode: attr('string'),
  lat: attr('number'),
  lon: attr('number'),
  name: attr('string'),
  urlname: attr('string'),
  who: attr('string')
});
