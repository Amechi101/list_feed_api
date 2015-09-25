/**
    Project: News Feed
    Version: 1.0.0
    Author: Amechi Egbe
    Website: http://amechiegbe.com
    Email: amechiegbe@gmail.com
 **/

"use strict";

//To avoid namespace collision
var NewsFeedInitilazer = (function ( core, angular ) {

    /***
     *Private Variables
     ****/


    /***
     *Public API
     ****/

    core.angularModule = function() {
    	
    	// create the angular module 
		angular.module('newsFeedApp', ['ngRoute','ngCookies']);
    
    }

    //Return Public Method
    return core;
    
})( NewsFeedInitilazer || {}, angular );


/***
*Call functions 
****/
NewsFeedInitilazer.angularModule();
