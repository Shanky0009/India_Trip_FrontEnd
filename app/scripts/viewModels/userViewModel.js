/*
Load all models here
*/  
var User=require('../models/User');
var Cookies= require('js-cookie');

/*
definig the user view-model
*/
var userViewModel=(function(){
	/*Empty view model method object.*/
	var vm={}

 	/*initializing view model.*/
	vm.init=function(){ 

		/*Running lists of model.*/
		vm.list=new User.userlist();

		/*Slot to store data of new model before it is created.*/
		vm.username=m.prop("");
		vm.emailID=m.prop("");
		vm.password=m.prop(""); 
		vm.answer=m.prop("");
		vm.token=m.prop("");
		vm.token1=m.prop("");
		vm.response=m.prop("");
		vm.response1=m.prop("");
		/*Slot to store data of new model before it is created ends here.*/
		

/**************************************************************************************************************************/
/***************************************** All view model methods goes here ***********************************************/
/**************************************************************************************************************************/
		
		/*****************************
  		New users gets registered here.
		*******************************/
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
					m.route('/sign-up')
				} else {
					m.route("/login")
				}
			})	
		}
		/**********************************
  		New users gets registered ends here.
		***********************************/


		/*************************************
  		Admin can view registered users details.
		**************************************/
		vm.show=function()
		{
			m.request({
				 method: "GET",
				 url: "http://localhost:3000/api/user"
			}).then(function(data){
				if(data) {
					if (vm.userData==undefined) {
						vm.userData=data;
						for (var i = 0; i <=vm.userData.length - 1; i++) {
							vm.list.push(vm.userData[i]);			
						}
					}		
				}
			})
		}
		/************************************************
  		Admin can view registered users details ends here.
		*************************************************/


		/*****************************
  		User login and authentication.
		******************************/
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
				if(data.username!=undefined||data=="admin") {
					if(Cookies.get("data")==null) {
						if(data=="admin") {
							m.route('/adminLogged');
							Cookies.set("data",data, { expires: 1 });
						} else {
							m.route('/logged');
							Cookies.set("data",data, { expires: 1 });
						}
					} else {
						vm.response1=("Another User Logged In");
						m.route('/logged');
					}
				}
				else vm.response1=data;
			})
		}
		/**************************************
  		User login and authentication ends here.
		***************************************/



		/********************************
  		User requests for password reset.
		*********************************/
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
				if(response!=null) {
					vm.token=response;
				}
			})
		}
		/*****************************************
  		User requests for password reset ends here.
		******************************************/

		/******************************************
  		User updates there old password using token.
		*******************************************/
		vm.PUpdate=function()
		{
			m.request({
				 method: "POST",
				 url: "http://localhost:3000/api/users/updatepassword",
				 data: {password:vm.password(),
				 		token:vm.token1(),
				 		emailID:vm.emailID()
				 	}
			}).then(function(response){
				if(response){
					m.route("/login");
				}
			})
		}
		/****************************************************
  		User updates there old password using token ends here.
		*****************************************************/
	}
/**************************************************************************************************************************/
/***************************************** All view model methods ends here ***********************************************/
/**************************************************************************************************************************/

	/*view model gets returned*/
	return vm;
}())

/*hotel view model exports here*/
module.exports=userViewModel;