"use strict";


angular.module('newsFeedApp').filter( 'FromNow', FromNow );

function FromNow( ) {
	return function( date ) {
		return moment( date ).from("2013-11-09", true) + " " + "ago";
	}	
}