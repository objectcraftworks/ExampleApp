'use strict';

angular.module('exampleAppApp')
.controller('MainCtrl', ['$scope', function ($scope) {

		$scope.scenarios=[
		{ section:'Form', links:
		[
		{name: 'Fill Form',link:'/form/fill', desc:'filling form with all input controls'},
		{name: 'Submit Form',link:'/form/fill', desc:'filling form with all input controls'},
		]},
		{section: 'Ajax', links:
		[
		{name: 'Waiting For calls',link:'/locators/by/id', desc:'Find elements by id'},

		]},

		{section: 'Header/Footer', links:
		[
		{name: 'By Id',link:'/locators/by/id', desc:'Find elements by id'},
		{name: 'By Name',link:'/locators/by/name', desc:'Find elements by name'}


		]},
		{section: 'Popups', links:
			[
			{name: 'By Id',link:'api/locators/by/id', desc:'Find elements by id'},
			{name: 'By Name',link:'/locators/by/name', desc:'Find elements by name'}


			]}

			];
			$scope.concepts =[
			{section: 'Element Locators', links:
				[
				{name: 'By Id',link:'/api/locators/by/id', desc:'Find elements by id'},
				{name: 'By Name',link:'/api/locators/by/name', desc:'Find elements by name'}


				]}];
}]);

