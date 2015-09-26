"use strict";

angular.module('newsFeedApp').controller( 'HomeController', HomeController );

HomeController.$inject = ['ArticleData'];

function HomeController( ArticleData ) {
	
	var home = this;

	//helper for iterating through the articles
	function Pageditems(arr, offset, limit) {
		return arr.slice(offset, offset + limit);
	}

	ArticleData.getArticlesPrimary().then(function( articles ) {

		var data = articles.data;
		var totalArticles = articles.data.length;
		var currentPage = 0;
		var articlesPerPage = 10;


		// display first set of articles
		home.articlesOnPage = Pageditems(data, currentPage * articlesPerPage, articlesPerPage);

		
	 	home.LoadMore = function() {
			currentPage++;

			var moreArticles = Pageditems(data, currentPage * articlesPerPage, articlesPerPage);

			home.articlesOnPage = home.articlesOnPage.concat(moreArticles);

			if( currentPage === 3 ) {
				ArticleData.getArticlesExtra().then(function( articles ) {

				 	var dataExtra = articles.data;

				 	home.articlesOnPage = home.articlesOnPage.concat(dataExtra.slice(0,10));
				 	
				});
			} else if( currentPage === 4 ) {
				ArticleData.getArticlesExtra().then(function( articles ) {
				 	var dataExtra = articles.data;

				 	home.articlesOnPage = home.articlesOnPage.concat(dataExtra.slice(10,20));
				});
			
			} else if ( currentPage === 5 ) {
				ArticleData.getArticlesExtra().then(function( articles ) {

				 	var dataExtra = articles.data;

				 	home.articlesOnPage = home.articlesOnPage.concat(dataExtra.slice(20,30));
				 	
				 	
				});
			}
		};

	});

}


