"use strict";

angular.module('newsFeedApp').directive( 'searchWords', searchWords );
angular.module('newsFeedApp').directive( 'searchSubmitted', searchSubmitted );

searchWords.$inject = ['$cookies'];
searchSubmitted.$inject = ['$cookies'];

function searchWords( $cookies ) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            //watch the value in the word  input field
            scope.$watch(attrs.ngModel, function (value) {
            	
            	if(typeof value === 'undefined') value = '';
            	
            	//create variable for search 
            	$cookies.put('searchWords', value);

            	console.log('value changed, new value is: ' + value);

            });           
        }
    };
}


function searchSubmitted( $cookies ) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            //watch the value in the word  input field
            scope.$watch(attrs.ngModel, function (value) {
            	
            	if(typeof value === 'undefined') value = 'Search By submitted';
            	
            	//create variable for search 
            	$cookies.put('searchSubmitted', value);

            	console.log('value changed, new value is: ' + value);

            	console.log($cookies.getAll());

            });           
        }
    };
}