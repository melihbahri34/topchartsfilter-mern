const mongoose = require('mongoose');

const TopCharts = new mongoose.Schema(
	{
        data: { type: Object },
		date: { type: String }
	},
	{ collection: 'top-charts' }
);

const model = mongoose.model('TopCharts', TopCharts);

module.exports = model;

/*
categoryID: { type: String, required: true },
categoryName: { type: String, required: true },

gameBundleID: { type: String, required: true },
gameID: { type: String, required: true },
gameLink: { type: String, required: true },
gameLogo: { type: String, required: true },
gameName: { type: String, required: true },
gamePrice: { type: String, required: true },

releaseDate: { type: String, required: true },
screenshot: { type: String, required: true },
summary: { type: String, required: true },

publisherName: { type: String, required: true },
publisherLink: { type: String, required: true },

copyright: { type: String, required: true },
*/