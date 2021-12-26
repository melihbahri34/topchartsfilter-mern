const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let Blog = require('../models/blog.model');

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

router.get('/birds', function (req, res) {
	res.send('Birds home page');
});

router.get('/', async (req, res) => {
	try {
		const blogs = await Blog.find(); // use .select option to prevent that field coming back in res
		res.json(blogs);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

router.route('/add').post(upload.single('blogImage'), (req, res) => {
	const blogTitle = req.body.blogTitle;
	const blogSubtitle = req.body.blogSubtitle;
	const blogArticle = req.body.blogArticle;
	const blogImage = req.file.filename;
	const blogDate = req.body.blogDate;
	const blogAuthor = req.body.blogAuthor;
	const blogAuthorProfile = req.body.blogAuthorProfile;

	const newBlogData = {
		blogTitle,
		blogSubtitle,
		blogArticle,
		blogImage,
		blogDate,
		blogAuthor,
		blogAuthorProfile
	};

	const newBlog = new Blog(newBlogData);

	newBlog
		.save()
		.then(() => res.json('Blog Added'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;