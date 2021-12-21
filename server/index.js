// MERN = Mongo + Express + React + Node

const express = require('express');

// image
// const path = require('path');
// const fileRoute = require('./routes/file');

// mongo
require('./db/db');

const app = express();

// image
/*
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(fileRoute);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});
*/

// cors
const cors = require('cors');
app.use(cors());

app.use(express.json());

// jsonwebtoken
const jwt = require('jsonwebtoken');
// bcrypt.js
const bcrypt = require('bcryptjs');
// model
const User = require('./models/user.model');

// auth
app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})
app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

// user
app.get('/api/user', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await User.findOne({ email: email })

		return res.json({ status: 'ok', 
		    name: user.name, 
			email: user.email, 
			password: user.password, 
			phone: user.phone, 
			title: user.title, 
			currentPosition: user.currentPosition,
		    about: user.about,
		    location: user.location })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})
app.post('/api/user', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await User.updateOne(
			{ email: email },
			{ $set: 
				{ 
					name: req.body.name, 
					email: req.body.email, 
					password: req.body.password, 
					phone: req.body.phone,
				    title: req.body.title,
				    currentPosition: req.body.currentPosition,
				    about: req.body.about,
				    location: req.body.location 
			}   }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

// routers
const usersRouter = require('./routes/user');
app.use(usersRouter);

const blogsRouter = require('./routes/blog');
app.use(blogsRouter);

// listen
app.listen(1337, () => {
	console.log('Server started on port: 1337');
})
