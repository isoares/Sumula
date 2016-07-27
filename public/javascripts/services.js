angular.module('sumulaServices', ['ngResource']).
  factory('Sumula', function($resource) {
    return $resource('sumulas/:sumulaId', {}, {
      query: { method: 'GET', params: { sumulaId: 'sumulas' }, isArray: true }
    })
  }).
  factory('Atleta', function($resource) {
	    return $resource('atletas/:atletaId', {}, {
	      query: { method: 'GET', params: { atletaId: 'atletas' }, isArray: true }
	    })
	  });
angular.module('atletaServices', ['ngResource']).
  factory('Atleta', function($resource) {
    return $resource('atletas/:atletaId', {}, {
      query: { method: 'GET', params: { atletaId: 'atletas' }, isArray: true }
    })
  });