  
var User=require('../models/User');



var userViewModel=(function(){

	var vm={}
 
	vm.init=function(){

		vm.list=new User.userlist();

		vm.username=m.prop("");
		vm.emailID=m.prop("");
		vm.password=m.prop(""); 
		vm.answer=m.prop("");
		vm.token=m.prop("");

		
		
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
					if(data!=null){
						console.log(data.username)
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

						if (vm.userData==undefined) 
						{
							vm.userData=data;
							for (var i = 0; i <=vm.userData.length - 1; i++) {
								vm.list.push(vm.userData[i]);			
							}
							console.log(vm.userData);
						}	

						
						
						
					}
				})
		}


		vm.Username=m.prop("");
		vm.Password=m.prop("");
		vm.response=m.prop("");

		vm.login=function()
		{
			m.request({
				method:"POST",
				url:"http://localhost:3000/api/login",
				data:{
					username:vm.Username(),
					password:vm.Password()
				}
			}).then(function(data){
				if(data.username!=undefined)
				{
					vm.response=(data.username+" Logged In");
					
				}
				else vm.response=data;

			})
		}

		vm.PReset=function()
		{
			m.request({
				 method: "POST",
				 url: "http://localhost:3000/api/users/passwordreset",
				 data:{
				 	emailID:vm.emailID,
				 	answer:vm.answer
				 }			
				}).then(function(response){
					if(response!=null){
						console.log(response);
						vm.token=response;
						
						console.log(data)

						
					}
				})
		}

		vm.PUpdate=function()
		{
			m.request({
				 method: "POST",
				 url: "http://localhost:3000/api/users/updatepassword",
				 data: {password:vm.password(),
				 		token:vm.token(),
				 		emailID:vm.emailID()
				 	}
				}).then(function(response){
					if(response){
						console.log(response)
						m.route("/");
					}
				})
		}

	}

	return vm;
}())




module.exports=userViewModel;