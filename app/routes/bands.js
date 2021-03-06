import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.findAll('band');
    },
    actions: {
        didTransition() {
            document.title = 'Bands - Rock & Roll';
        },
        createBand() {
            var controller = this.get('controller');
            var band = this.store.createRecord('band', controller.getProperties('name'));
            band.save().then(() => {
                controller.set('name', '');
                this.transitionTo('bands.band.songs', band);
            });
        }
    }
});