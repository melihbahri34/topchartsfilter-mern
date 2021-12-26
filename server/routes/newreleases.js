const router = require('express').Router();
let NewReleases = require('../models/newreleases.model');

router.get('/', async (req, res) => {
	try {
		const newreleases = await NewReleases.find(); // use .select option to prevent that field coming back in res
		res.json(newreleases);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;