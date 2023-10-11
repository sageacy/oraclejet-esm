/* Danish initialisation for the jQuery UI date picker plugin. */
/* Written by Jan Christensen ( deletestuff@gmail.com). */
( function( factory ) {
	"use strict";

	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
  } else if (typeof module === 'object' && module.exports) {
    require("../widgets/datepicker");
    module.exports = factory( require( "jquery" ) );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
} )( function( datepicker ) {
"use strict";

datepicker.regional.da = {
	closeText: "Luk",
	prevText: "Forrige",
	nextText: "Næste",
	currentText: "I dag",
	monthNames: [ "Januar", "Februar", "Marts", "April", "Maj", "Juni",
	"Juli", "August", "September", "Oktober", "November", "December" ],
	monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun",
	"Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
	dayNames: [ "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag" ],
	dayNamesShort: [ "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør" ],
	dayNamesMin: [ "Sø", "Ma", "Ti", "On", "To", "Fr", "Lø" ],
	weekHeader: "Uge",
	dateFormat: "dd-mm-yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.da );

return datepicker.regional.da;

} );
