// Managing the sumula list
function SumulaListCtrl($scope, Sumula) {
	$scope.sumulas = Sumula.query();
}
// viewing sumula results
function SumulaItemCtrl($scope, $routeParams,  Sumula) { 
	$scope.sumula = Sumula.get({sumulaId: $routeParams.sumulaId});
}
// Creating a new sumula
function SumulaNewCtrl($scope, $location, Sumula, Atleta) {
	$scope.sumula = {
		data: '',
		quadro: '',
		adversario: '',
		golsFavor: '',
		golsContra: '',
//		atletas: [ { idAtleta: '', gols: '' }, { idAtleta: '', gols: '' }, { idAtleta: '', gols: '' }, { idAtleta: '', gols: '' }, { idAtleta: '', gols: '' } ]
		atletas: Atleta.query()
	};
//	var sumula = $scope.sumula;
//	alert(sumula.atletas.length);
//	for(var i = 0, ln = $scope.sumula.atletas.length; i < ln; i++) {
//		alert('for');
//		$scope.sumula.atletas[i].idAtleta = $scope.sumula.atletas[i]._id;
//	}
//	alert($scope.sumula.atletas);
	
//	$scope.sumula.atletas = Atleta.query();
//	alert('AQUI');
//	$scope.atletasTeste = 'teste atleta';
//	$scope.atletasTeste = Atleta.query();
	
	$scope.addChoice = function() {
		$scope.sumula.atletas.push({ idAtleta: '', gols: '' });
	};
	$scope.createSumula = function() {
		var sumula = $scope.sumula;
		if(sumula.adversario.length > 0) {
//			var atletasCount = 0;
//			for(var i = 0, ln = sumula.atletas.length; i < ln; i++) {
//				var atleta = sumula.atletas[i];			  
//				if(atleta.idAtleta.length > 0) {
//					atletasCount++
//				}
//			}
//			if(atletasCount > 4) {
				var newSumula = new Sumula(sumula);			 
				newSumula.$save(function(p, resp) {
					if(!p.error) { 
						$location.path('sumulas');
					} else {
						alert('Could not create sumula');
					}
				});
//			} else {
//				alert('You must enter at least five atletas');
//			}
		} else {
			alert('You must enter a adversario');
		}
	};
}
//Managing the atleta list
function AtletaListCtrl($scope, Atleta) {
	$scope.atletas = Atleta.query();
}
//viewing atleta results
function AtletaItemCtrl($scope, $routeParams,  Atleta) { 
	$scope.atleta = Atleta.get({atletaId: $routeParams.atletaId});
}
// Creating a new atleta
function AtletaNewCtrl($scope, $location, Atleta) {
	$scope.atleta = {
		nome: ''
	};
	$scope.createAtleta = function() {
		var atleta = $scope.atleta;
		if(atleta.nome.length > 0) {
				var newAtleta = new Atleta(atleta);			 
				newAtleta.$save(function(p, resp) {
					if(!p.error) { 
						$location.path('atletas');
					} else {
						alert('Could not create atleta');
					}
				});
		} else {
			alert('You must enter a nome');
		}
	};
}