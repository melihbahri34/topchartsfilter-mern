const router = require('express').Router();
let TopCharts = require('../models/topcharts.model');

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'images'); // saves to backend/images
		// cb(null, '..frontend/public/images'); // saves to frontend/public/images
	},
	filename: function (req, file, cb) {
		cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
	},
});

const fileFilter = (req, file, cb) => {
	const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
	if (allowedFileTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

let upload = multer({ storage, fileFilter, limits: { fileSize: 2 * 1024 * 1024 } });

router.get('/', async (req, res) => {
	try {
		const topcharts = await TopCharts.find(); // use .select option to prevent that field coming back in res
		res.json(topcharts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;