var vm = require('../viewModels/postViewModel');

vm.init()

var submit= function(){
	vm.userPost();
	return false;
}
var logoutsubmit=function(){
	vm.logout();
	return false;
}

var postView=function()
{
		return m("div[id=post]",[
				m("form",{onsubmit:submit},[
						m("input",{onchange:m.withAttr("value", vm.postBody), value:vm.postBody(), placeholder:"Enter your post"}),
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
 
var post={};

post.model = require('../models/Post');

var postModule={controller: post.controller, view: postView};

// m.route(document.getElementById('First'),"/",{
// 	"/":"/",
// 	"/posts":postModule
// });

module.exports=postView;