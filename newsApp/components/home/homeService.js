"use strict";

angular.module('newsFeedApp').factory( 'ArticleData', ArticleData );

ArticleData.$inject = ['$http', '$q'];

function ArticleData( $http, $q ) {


	var service = {},
		_baseUrl = 'newsApp/assets/data/',
	 	_articlesPrimary = 'articles.json',
	    _articlesExtra = 'more-articles.json';


	service.getArticlesPrimary = function() {

		
		var deffered = $q.defer();

		$http({
			url: _baseUrl + _articlesPrimary,
			method: 'GET'
		})
		.then(function( data ) {

			//success
			deffered.resolve( data );
	
		}, function() {
			
			//error
			deffered.reject( 'Data Unavailable' );
		
		});

		return deffered.promise;

	};

	service.getArticlesExtra = function() {

		
		var deffered = $q.defer();

		$http({
			url: _baseUrl + _articlesExtra,
			method: 'GET'
		})
		.then(function( data ) {
			
			//success
			deffered.resolve( data );
	
		}, function() {
			
			//error
			deffered.reject( 'Data Unavailable' );
		
		});

		return deffered.promise;

	};

	return service;		
}