/*
Loads view models here 
*/
var vm = require('../viewModels/postViewModel');

/*
view model initialized
*/
vm.init()

/*
onsubmit methods
*/
var submit= function(){
	vm.userPost();
	return false;
}
var logoutsubmit=function(){
	vm.logout();
	return false;
}
/*
onsubmit methods ends here
*/

/***************
User post view
****************/
var postView=function()
{
	return m("div[id=post]",[
		m("form",{onsubmit:submit},[
			m("input[required]",{onchange:m.withAttr("value", vm.postBody), value:vm.postBody(), placeholder:"Enter your post"}),
			m("br"),
			m("button","Submit"),
			m("br")						
		]),
		m("form",{onsubmit:logoutsubmit},[
			m("button","Logout")
		]),
		m("h",vm.response=m.route.param("response"))	
	])			
};
/***********************
User post view ends here
************************/
 
var post={};
post.model = require('../models/Post');
var postModule={controller: post.controller, view: postView};

module.exports=postView;