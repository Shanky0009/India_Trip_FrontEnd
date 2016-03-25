// main.js

'use strict';

var _ = require('underscore');
var names = ['Mithril Project'];
 
_.each(names, function(n) {
	console.log(n);
});

//initialize the application


var user={};

user.model = require('./models/User');
user.view = require('./views/userView');
user.view1=require('./views/signView');
user.view2=require('./views/showView');
user.view3=require('./views/loginView');
user.resetview=require('./views/resetView');
user.forgotview=require('./views/forgotView');



var mainModule={controller: user.controller, view: user.view};
var signModule={controller: user.controller, view: user.view1};
var showModule={controller: user.controller, view: user.view2};
var loginModule={controller: user.controller, view: user.view3};
var resetModule={controller: user.controller, view: user.resetview};
var forgotModule={controller: user.controller, view: user.forgotview};



m.route(document.body, "/",{
		"/":mainModule,
	    "/login":loginModule,
	    "/show":showModule,
	    "/sign-up":signModule,
      "/reset":resetModule,
      "/forgot":forgotModule

	});






// m.module(document.getElementById("main-up"), {controller: user.controller, view: user.view});

