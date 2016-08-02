var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'sumulasapp');
//mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/
//var db = mongoose.createConnection($OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT, 'sumulajs');
//var db = mongoose.createConnection('localhost', 'sumulajs');
//var SumulaSchema = require('../models/Sumula.js').SumulaSchema;
//var Sumula = db.model('sumulas', SumulaSchema);
//var AtletaSchema = require('../models/Atleta.js').AtletaSchema;
//var Atleta = db.model('atletas', AtletaSchema);
exports.indexSumula = function(req, res) {
	res.render('sumula', {title: 'Sumulas'});
};
exports.indexAtleta = function(req, res) {
	res.render('atleta', {title: 'Atletas'});
};
exports.indexArtilharia = function(req, res) {
	res.render('artilharia', {title: 'Artilharia'});
};
// JSON API for list of sumulas
exports.listSumula = function(req, res) {
//	Sumula.find({}, function(error, sumulas) {
//		res.json(sumulas);
//	});
};
// JSON API for getting a single sumula
exports.sumula = function(req, res) {
	var sumulaId = req.params.id;
//	Sumula.findById(sumulaId, '', { lean: true }).populate('atletas.idAtleta').exec(function(err, sumula) {
//		if(sumula) {
//			res.json(sumula);
//		} else {
//			res.json({error:true});
//		}
//	});
};
// JSON API for creating a new sumula
exports.createSumula = function(req, res) {
	var reqBody = req.body;
//			atletas = reqBody.atletas.filter(function(v) { return v.idAtleta != ''; }),
//			atletas = reqBody.atletas;
	
//	var atletas = [];
//	reqBody.atletas.forEach(function(item) {
//		var itemAtleta = {idAtleta: item._id, gols: item.gols};
//			
//		atletas.push(itemAtleta);
//	});
//	
//	var sumulaObj = {data: reqBody.data, quadro: reqBody.quadro, adversario: reqBody.adversario, golsFavor: reqBody.golsFavor, golsContra: reqBody.golsContra, atletas: atletas};
//	var sumula = new Sumula(sumulaObj);
//	sumula.save(function(err, doc) {
//		if(err || !doc) {
//			throw 'Error';
//		} else {
//			res.json(doc);
//		}	 
//	});
};
//JSON API for list of atletas
exports.listAtleta = function(req, res) {
//	Atleta.find({}, function(error, atletas) {
//		res.json(atletas);
//	});
};
// JSON API for getting a single atleta
exports.atleta = function(req, res) {  
//	var atletaId = req.params.id;
//	Atleta.findById(atletaId, '', { lean: true }, function(err, atleta) {
//		if(atleta) {
//			res.json(atleta);
//		} else {
//			res.json({error:true});
//		}
//	});
};
// JSON API for creating a new atleta
exports.createAtleta = function(req, res) {
//	var reqBody = req.body,
//			atletaObj = {nome: reqBody.nome};
//	var atleta = new Atleta(atletaObj);
//	atleta.save(function(err, doc) {
//		if(err || !doc) {
//			throw 'Error';
//		} else {
//			res.json(doc);
//		}	 
//	});
};
//JSON API for list of artilharia
exports.listArtilharia = function(req, res) {	
//	Sumula.aggregate(
//			[
//				{
//					$unwind : "$atletas"
//				},
//				{
//					$group : {
//						_id: "$atletas.idAtleta",
//						gols: { $sum: "$atletas.gols" }
//					}
//				},
//				{
//					$lookup: {
//						from: "atletas",
//						localField: "_id",
//						foreignField: "_id",
//						as: "atl"
//					}
//				},
//				{
//					$sort : { gols : -1 }
//				}
//			],
//			function(error, artilheiros) {
//				res.json(artilheiros);
//			}
//	);
};
