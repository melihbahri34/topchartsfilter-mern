const mongoose = require('mongoose');

const NewReleases = new mongoose.Schema(
	{
        data: { type: Object }
	},
	{ collection: 'new-releases' }
);

const model = mongoose.model('NewReleases', NewReleases);

module.exports = model;