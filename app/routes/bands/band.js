import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.findRecord('band', params.id);
    },
    
    afterModel: function() {
        this.transitionTo('bands.band.index');
    }
});
