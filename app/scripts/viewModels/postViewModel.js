var User=require('../models/User');
var Post=require('../models/Post');
var Cookies= require('js-cookie');

var postViewModel=(function(){
	var vm={}
	vm.init=function(){
		vm.postID=m.prop("");
		vm.postBody=m.prop("");
		vm.postComment=m.prop(""); 
		vm.commetID=m.prop("");
		vm.response=m.prop("");


		vm.userPost=function(){
			m.request({
				method:"POST",
				url:"http://localhost:3000/api/post",
				data:{
					userdata:Cookies.get("data"),
					postBody:vm.postBody	
				}
			}).then(function(data){
				if(data!=null) {
					vm.response=data;
				} else {
					vm.response=data;
				}
			})
		}

		//user logout
		vm.logout=function()
		{ 
			var a=Cookies.get("data");
			if(a!=null) {	
				Cookies.remove("data");
				vm.response=("User Logged Out");
				m.route("http://localhost:9000/");
			} else {
				vm.response=("No User Logged In");
			}	
		}		
	}
	return vm;	
}())

module.exports=postViewModel;		