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
user.aboutview = require('./views/aboutUsView');

var hotel={};
hotel.model=require('./models/Hotel');
hotel.view6=require('./views/hotelSearchView');
var hotelSearchModule={controller:hotel.controller, view:hotel.view6};
hotel.view7=require('./views/hotelBookingView');
var hotelBookingModule={controller:hotel.controller, view:hotel.view7};

var destination={};
destination.model = require('./models/Destination');
destination.destinationview=require('./views/destinationView');

var profile={};
profile.model=require('./models/Profile');
profile.loggedview=require('./views/loggedView');
profile.adminloggedview=require('./views/adminLoggedView');



var mainModule={controller: user.controller, view: user.view};
var signModule={controller: user.controller, view: user.view1};
var showModule={controller: user.controller, view: user.view2};
var loginModule={controller: user.controller, view: user.view3};
var resetModule={controller: user.controller, view: user.resetview};
var forgotModule={controller: user.controller, view: user.forgotview};
var aboutModule={controller: user.controller, view: user.aboutview};
var destinationModule={controller: destination.controller, view: destination.destinationview};
var loggedModule={controller: profile.controller, view: profile.loggedview};
var adminLoggedModule={controller: profile.controller, view: profile.adminloggedview};





m.route(document.getElementById("main"),"/",{
		"/":"/",
		"/login":loginModule,
	      "/show":showModule,
	      "/sign-up":signModule,
            "/reset":resetModule,
            "/forgot":forgotModule,
            "/posts":postModule,
            "/destinations":destinationModule,
            "/logged":loggedModule,
            "/adminLogged":adminLoggedModule,
            "/search":hotelSearchModule,
            "/hotels/book":hotelBookingModule,
            "/about":aboutModule
	});


