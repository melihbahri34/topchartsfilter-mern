const router = require('express').Router();
let TopCharts = require('../models/topcharts.model');

router.get('/', async (req, res) => {
	try {
		const topcharts = await TopCharts.find(); // use .select option to prevent that field coming back in res
		res.json(topcharts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.route('/add').post((req, res) => {

	const blogTitle = req.body.blogTitle;
	const blogSubtitle = req.body.blogSubtitle;
	const blogArticle = req.body.blogArticle;
	const blogImage = req.file.filename;
	const blogDate = req.body.blogDate;
	const blogAuthor = req.body.blogAuthor;
	const blogAuthorProfile = req.body.blogAuthorProfile;

	const newTopChartsData = {
		blogTitle,
		blogSubtitle,
		blogArticle,
		blogImage,
		blogDate,
		blogAuthor,
		blogAuthorProfile
	};

	const newTopCharts = new Blog(newTopChartsData);

	newTopCharts
		.save()
		.then(() => res.json('Blog Added'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;