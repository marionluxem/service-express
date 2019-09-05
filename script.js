"use strict";

// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter
app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function SearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			url: 'https://www.serviceexpress.com/storage-maintenance/dell/',
			title: 'Dell',
			image: 'https://stagese.wpengine.com/wp-content/uploads/2016/12/dell-maintenance-and-support.png'
		},
		{
			url: 'https://www.serviceexpress.com/storage-maintenance/emc/',
			title: 'EMC',
			image: 'https://stagese.wpengine.com/wp-content/uploads/2016/12/emc-maintenance-and-support.png'
		},
		{
			url: 'https://www.serviceexpress.com/storage-maintenance/hitachi/',
			title: 'Hitachi',
			image: 'https://stagese.wpengine.com/wp-content/uploads/2016/12/hitachi-maintenance.png'
		},
		{
			url: 'https://www.serviceexpress.com/storage-maintenance/hpe/',
			title: 'HP',
			image: 'https://stagese.wpengine.com/wp-content/uploads/2016/12/hp-maintenance-and-support.png'
		},
		{
			url: 'https://www.serviceexpress.com/storage-maintenance/ibm/',
			title: 'IBM',
			image: 'https://stagese.wpengine.com/wp-content/uploads/2016/12/ibm-maintenance-and-support.png'
		},
		{
			url: 'https://www.serviceexpress.com/storage-maintenance/netapp/',
			title: 'NetApp',
			image: 'https://stagese.wpengine.com/wp-content/uploads/2016/12/netapp-maintenance.png'
		},
		{
			url: 'https://www.serviceexpress.com/storage-maintenance/oracle/',
			title: 'Oracle',
			image: 'https://stagese.wpengine.com/wp-content/uploads/2016/12/oracle-maintenance.png'
        },
        {
			url: 'https://www.serviceexpress.com/storage-maintenance/storagetek/',
			title: 'StorageTek',
			image: 'https://stagese.wpengine.com/wp-content/uploads/2016/12/stk-maintenance.png'
        },
        {
			url: 'https://www.serviceexpress.com/storage-maintenance/vce/',
			title: 'VCE',
			image: 'https://stagese.wpengine.com/wp-content/uploads/2016/12/vce.png'
        },
        {
			url: 'https://www.serviceexpress.com/storage-maintenance/supermicro/',
			title: 'Supermicro',
			image: 'https://stagese.wpengine.com/wp-content/uploads/2019/05/supermicro.png'
        }
	];


}
