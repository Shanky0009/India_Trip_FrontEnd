// main.js

'use strict';

var _ = require('underscore');
var names = ['Mithril Project'];
 
_.each(names, function(n) {
	console.log(n);
});

//initialize the application

// var todo = {};
// todo.model = require('./models/Todo');
// todo.view = require('./views/todoView');


// m.module(document.getElementById("page-app"), {controller: todo.controller, view: todo.view});

var user={};
user.model = require('./models/User');
user.view = require('./views/userView');
// user.controller=require('/controllers/userController');

m.module(document.getElementById("sign-up"), {controller: user.controller, view: user.view});