"use strict";

angular.module('newsFeedApp').controller( 'MainController', MainController );

MainController.$inject = ['$cookies'];

function MainController( $cookies ) {
	var vm = this;


	vm.hello = "hello world!"


}


