import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    descript: DS.attr(),
    songs: DS.hasMany('song'),
});
