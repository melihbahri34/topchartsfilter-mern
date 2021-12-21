const express = require('express');
const Router = express.Router();

let Blog = require('../models/blog.model');

// Router.get, Router.post
Router.post('/api/blog-data', async (req, res) => {
	console.log(req.body)
	try {
		await Blog.create({
			blogTitle: req.body.blogTitle,
			blogSubtitle: req.body.blogSubtitle,
			blogArticle: req.body.blogArticle,
			blogImage: req.body.blogImage,
			blogDate: req.body.blogDate,
			blogAuthor: req.body.blogAuthor,
			blogAuthorProfile: req.body.blogAuthorProfile,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Server error' })
	}
})

Router.route('/blog-data').get((req, res) => {
  Blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = Router;