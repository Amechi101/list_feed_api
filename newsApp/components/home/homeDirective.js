"use strict";

angular.module('newsFeedApp').directive( 'searchWatch', searchWatch );


function searchWatch() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(attrs.ngModel, function (value) {

            	if(typeof value === 'undefined') value = '';
            
            	console.log('value changed, new value is: ' + value);
                
            });
        }
    };
}