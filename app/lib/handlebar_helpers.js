require('app/lib/helpers');

Ember.Handlebars.registerBoundHelper('formatCurrency', Balanced.Utils.formatCurrency);

Ember.Handlebars.registerBoundHelper('formatNumber', Balanced.Utils.formatNumber);

Ember.Handlebars.registerBoundHelper('capitalize', Balanced.Utils.capitalize);

Ember.Handlebars.registerBoundHelper('titleCase', Balanced.Utils.toTitleCase);

Ember.Handlebars.registerBoundHelper('prettyPrint', Balanced.Utils.prettyPrint);

Ember.Handlebars.registerBoundHelper('colorizeStatus', function (status) {
    var statusClass = status.match(/2\d\d/) ? 'ok': 'error';
    return new Ember.Handlebars.SafeString(
        '<span class="status-{0}">{1}</span>'.format(statusClass, status)
    );
});

Ember.Handlebars.registerHelper('linkToEntity', Balanced.Utils.linkToEntity);

Ember.Handlebars.registerBoundHelper('humanReadableDateShort', Balanced.Utils.humanReadableDateShort);
Ember.Handlebars.registerBoundHelper('humanReadableDateLong', Balanced.Utils.humanReadableDateLong);
Ember.Handlebars.registerBoundHelper('inflection', function (property, options) {
	var length, singularForm, str;
	if(options){
		length = property, singularForm = options.hash["singular"];
		if((parseInt(length,10) > 1) || (parseInt(length,10) === 0)){
			str = length + " " + singularForm  + "s";
		} else {
			str = length + " " + singularForm;
		}
	}
	return new Ember.Handlebars.SafeString(str);
});