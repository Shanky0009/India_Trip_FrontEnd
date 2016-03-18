 
var User=require('../models/User');




var userViewModel=(function(){

	var vm={}
   
	vm.init=function(){

		vm.username=m.prop("");
		vm.emailID=m.prop("");
		vm.password=m.prop(""); 
		vm.answer=m.prop("");
		
		vm.add=function()
		{
			console.log("hello")
			console.log(vm.username);

			
			
			m.request({
				 method: "POST",
				 url: "http://localhost:3000/api/user",
				 data:{
				 	username:vm.username(),
				 	emailID:vm.emailID(),
				 	password:vm.password(),
				 	answer:vm.answer()
				 }
				}).then(function(data){
					if(data){
						console.log("data done")
					}
					else
					{
						console.log("no user created")
					}
				})

			
		}

		vm.show=function()
		{

			m.request({
				 method: "GET",
				 url: "http://localhost:3000/api/users",
			
				}).then(function(data){
					if(data){
						console.log(data)
						
					}
				})
		}
	}
	return vm;
}())

module.exports=userViewModel;