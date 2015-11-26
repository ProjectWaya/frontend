import Ember from 'ember';

export default Ember.Controller.extend({
	countries: ['France', 'Austria', 'Germany', 'Spain'],
	cities: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
	actions: {
		onCountrySelected() { 
			console.log("selected country");
    	},
    	onCitySelected() {
    		console.log("selected city");
    	}
	}
});
