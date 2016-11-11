angular.module('sumulas', ['sumulaServices'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/sumulas', { templateUrl: 'partials/sumula/list', controller: SumulaListCtrl }).
			when('/sumula/:sumulaId', { templateUrl: 'partials/sumula/item', controller: SumulaItemCtrl }).
			when('/newSumula', { templateUrl: 'partials/sumula/new', controller: SumulaNewCtrl }).
			otherwise({ redirectTo: '/sumulas' });
	}]);
angular.module('atletas', ['atletaServices'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/atletas', { templateUrl: 'partials/atleta/list.html', controller: AtletaListCtrl }).
			when('/atleta/:atletaId', { templateUrl: 'partials/atleta/item.html', controller: AtletaItemCtrl }).
			when('/newAtleta', { templateUrl: 'partials/atleta/new.html', controller: AtletaNewCtrl }).
			otherwise({ redirectTo: '/atletas' });
	}]);
angular.module('artilheiros', ['artilhariaServices'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/artilheiros', { templateUrl: 'partials/artilharia/list.html', controller: ArtilhariaListCtrl }).
		otherwise({ redirectTo: '/artilheiros' });
}]);