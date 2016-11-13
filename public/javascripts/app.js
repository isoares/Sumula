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
			when('/atletas', { templateUrl: 'partials/atleta/list', controller: AtletaListCtrl }).
			when('/atleta/:atletaId', { templateUrl: 'partials/atleta/item', controller: AtletaItemCtrl }).
			when('/newAtleta', { templateUrl: 'partials/atleta/new', controller: AtletaNewCtrl }).
			otherwise({ redirectTo: '/atletas' });
	}]);
angular.module('artilheiros', ['artilhariaServices'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/artilheiros', { templateUrl: 'partials/artilharia/list', controller: ArtilhariaListCtrl }).
		otherwise({ redirectTo: '/artilheiros' });
}]);