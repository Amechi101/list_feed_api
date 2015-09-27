"use strict";

angular.module('newsFeedApp').directive( 'searchWords', searchWords );
angular.module('newsFeedApp').directive( 'searchSubmitted', searchSubmitted );

searchWords.$inject = ['$cookies'];
searchSubmitted.$inject = ['$cookies'];

function searchWords( $cookies ) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            //watch the value in the word input field
            scope.$watch(attrs.ngModel, function (value) {
            	
            	//check for undefined values
            	if( value === '' || value === null || value === undefined ) value = '';
            	
            	//create cookie key
            	$cookies.put('searchWords', value);

            });           
        }
    };
}


function searchSubmitted( $cookies ) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            //watch the value in the submitted drop down
            scope.$watch(attrs.ngModel, function (value) {
        	
            	//check for empty or null values
            	if( value === '' || value === null || value === undefined ) value = '';
            	
            	//create cookie key
            	$cookies.put('searchSubmitted', value);

            });           
        }
    };
}