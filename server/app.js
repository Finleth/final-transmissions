const express = require('express');
const logger = require('morgan'); 
const passport = require('passport');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 8000;

app.use(logger('dev')); 
app.use(express.json()); //takes the place of...
app.use(express.urlencoded()); //...body-parser
app.use('/assets', express.static(path.join(__dirname, '..', 'client', 'assets'))); // <---- get advice here 
app.use(session({ secret: 'wishbone' })); // 
app.use(passport.initialize()); 
app.use(passport.session()); 

require('./passport')(passport); // similar to scope, having access to certain variables
require('./routes/auth.js')(app, passport); // 




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'client', 'index.html'));
});


app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'client', 'signup.html'));
});


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'client', 'login.html'));
});


app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'client', 'profile.html'));
});


function errorHandler (err, req, res, next) { 
	if (res.headersSent) {
	  return next(err);
	}
	res.status(500);
	res.send('Error, something broke!');
}

app.listen(PORT, () => {
    console.log("Let's find some ghosts on port: ", PORT);
});



//mongoose schema resources mongolabs mongo university  