  
var User=require('../models/User');


var Cookies= require('js-cookie');
var userViewModel=(function(){

	var vm={}
 
	vm.init=function(){ 

		vm.list=new User.userlist();

		vm.username=m.prop("");
		vm.emailID=m.prop("");
		vm.password=m.prop(""); 
		vm.answer=m.prop("");
		vm.token=m.prop("");
		vm.response=m.prop("");
		vm.response1=m.prop("");

		
//user registration			
		vm.add=function()
		{
			m.request({
				 method: "POST",
				 url: "http://localhost:3000/api/users",
				 data:{
				 	username:vm.username(),
				 	emailID:vm.emailID(),
				 	password:vm.password(),
				 	answer:vm.answer()
				 }
				}).then(function(data){
					if(data.username==""){
						vm.response1=(data.username+"you have registered successfully")
					}
					else
					{
						vm.response1=data;
					}
				})

			
		}

//user details
		vm.show=function()
		{

			m.request({
				 method: "GET",
				 url: "http://localhost:3000/api/user",
			
				}).then(function(data){
					if(data){

						if (vm.userData==undefined) 
						{
							vm.userData=data;
							console.log(vm.userData);
							for (var i = 0; i <=vm.userData.length - 1; i++) {
								vm.list.push(vm.userData[i]);			
							}
						}		
					}
				})
		}

//user login
		vm.login=function()
		{
			m.request({
				method:"POST",
				url:"http://localhost:3000/api/login",
				data:{
					emailID:vm.emailID(),
					password:vm.password(),
					cookieData:Cookies.get("data")
				}
			}).then(function(data){
				if(data.username!=undefined)
				{
					if(Cookies.get("data")==null)
					{
						m.route('/posts');
						// vm.response1=(data.username+" Logged In");
						Cookies.set("data",data, { expires: 1 });
						

					}
					else
					{
						m.route('/posts?response=another user logged in');
						vm.response1=("Another User Logged In");
					}
				}
				else vm.response1=data;

			})
		}



//user password reset request
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
					if(response!=null)
					{
						console.log(response);
						vm.token=response;
						console.log(data)	
					}
				})
		}

//user password update
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