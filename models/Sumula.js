var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sumulaAtletas = new mongoose.Schema({
	idAtleta: { type: Schema.Types.ObjectId, ref: 'atletas' },
	gols: Number
});
exports.SumulaSchema = new mongoose.Schema({
	data: Date,
	quadro: Number,
	adversario: String,
	golsFavor: Number,
	golsContra: Number,
	atletas: [sumulaAtletas]
});