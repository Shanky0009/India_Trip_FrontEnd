/*
Load all models here
*/
var Destination=require('../models/Destination');
var Cookies= require('js-cookie');

/*
define the view-model
*/
var destinationViewModel=(function(){
	/*Empty view model method object.*/
	var vm={}; 

	/*initializing view model.*/
	vm.init=function(){

		/*Running lists of model.*/
		vm.list=new Destination.destinationlist();
		vm.list1=new Destination.destinationlist1();

		/*Slot to store data of new model before it is created.*/
		vm.fileName=m.prop("");


/**************************************************************************************************************************/
/***************************************** All view model methods goes here ***********************************************/
/**************************************************************************************************************************/
		

		/*********************************************************
  		Add destination data to the list by requesting from server.
		**********************************************************/
		vm.destinationNo=function()
		{
			m.request({
				 method: "GET",
				 url: "http://localhost:3000/api/destination/number"
				}).then(function(data){
					if(data){
						if(vm.placeData==undefined)	{ 
							vm.placeData=data;							
							for (var i = 0; i <=vm.placeData.length - 1; i++) {
								vm.list.push(vm.placeData[i]);			
							}
						}								
					}
					m.route("/destinations");				
				})
		} 
		/*******************************************************************
  		Add destination data to the list by requesting from server ends here.
		********************************************************************/


		/*************************************************
  		Add data of the requested destination in the list.
		**************************************************/
		vm.destinationda=function(e)
		{
			vm.list1.pop();
			vm.list1.push(e);
		}
		/***********************************************************
  		Add data of the requested destination in the list ends here.
		************************************************************/

		
		/**************************************************************
  		users and admin gets routed according to their browsers cookie.
		***************************************************************/
		vm.logOne=function()
		{	
			a=Cookies.get("data");
				
			if(a==null) {
				m.route("/login");
			} else if(a=="admin") {
				m.route('/adminLogged');
			} else {
				m.route("/logged");
			}	
		}
		/***********************************************************************
  		users and admin gets routed according to their browsers cookie ends here.
		*************************************************************************/
	}

	/**************************************************************************************************************************/
	/***************************************** All view model methods ends here ***********************************************/
	/**************************************************************************************************************************/
	
	/*view model is returned*/
	return vm;
}());

/*destination view model exports here*/
module.exports=destinationViewModel;