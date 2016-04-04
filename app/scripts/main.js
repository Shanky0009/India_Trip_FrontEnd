// main.js

'use strict';
var Cookies= require('js-cookie');
var _ = require('underscore');
var names = ['Mithril Project'];
 
_.each(names, function(n) {
	console.log(n);
});

//initialize the application


var user={};
var post={};
post.model=require('./models/Post');
post.view4=require('./views/postView');
var postModule={controller:post.controller, view:post.view4};

user.model = require('./models/User');
user.view = require('./views/userView');
user.view1=require('./views/signView');
user.view2=require('./views/showView');
user.view3=require('./views/loginView');
user.resetview=require('./views/resetView');
user.forgotview=require('./views/forgotView');

var destination={};
destination.model = require('./models/Destination');
destination.destinationview=require('./views/destinationView');
destination.destinationdetailedview=require('./views/destinationDetailedView');



var mainModule={controller: user.controller, view: user.view};
var signModule={controller: user.controller, view: user.view1};
var showModule={controller: user.controller, view: user.view2};
var loginModule={controller: user.controller, view: user.view3};
var resetModule={controller: user.controller, view: user.resetview};
var forgotModule={controller: user.controller, view: user.forgotview};
var destinationModule={controller: destination.controller, view: destination.destinationview};
var destinationDetailedModule={controller: destination.controller, view: destination.destinationdetailedview};




if(Cookies.get("data")==null)
{
m.route(document.getElementById("main"),"/",{
		"/":"/",
		"/login":loginModule,
	    "/show":showModule,
	    "/sign-up":signModule,
      "/reset":resetModule,
      "/forgot":forgotModule,
      "/posts":postModule,
      "/destinations":destinationModule,
      "/destinations/info":destinationDetailedModule

	});

}
else
{
m.route(document.getElementById('main'),"/posts",{
	"/":mainModule,
	"/posts":postModule,
	"/show":showModule,
	    "/sign-up":signModule,
      "/reset":resetModule,
      "/forgot":forgotModule,
      "/destinations":destinationModule
});

}






// m.module(document.getElementById("main-up"), {controller: user.controller, view: user.view});

