import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  venue: belongsTo('venue'),
  group: belongsTo('group', { inverse: null }),

  created: attr('date'),
  description: attr('string'),
  duration: attr('number'),
  link: attr('sting'),
  name: attr('string'),
  status: attr('string'),
  time: attr('number'),
  updated: attr('date'),
  utcOffset: attr('number'),
  visibility: attr('string'),
  waitlistCount: attr('number'),
  yesRsvpCount: attr('number')
});
