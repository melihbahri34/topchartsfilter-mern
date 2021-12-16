// MERN = Mongo + Express + React + Node

// Development = Node.js server + React server

// MEN

// E - Express

// import postRoutes from './routes/users.js';
// const postRoutes = require('./routes/users');

// express
const express = require('express')
const app = express()

// cors
const cors = require('cors')

// mongoose
const mongoose = require('mongoose')

// model
const User = require('./models/user.model')
const Feed = require('./models/feed.model')

// json web token
const jwt = require('jsonwebtoken')

// b crypt.js
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://melihbahri:_Gamer404@cluster0.mq3gk.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useUnifiedTopology', false);

app.listen(1337, () => {
	console.log('Server started on 1337')
})