var Destination=require('../models/Destination');
var Cookies= require('js-cookie');

var destinationViewModel=(function(){
	var vm={}; 
	vm.init=function(){

		vm.list=new Destination.destinationlist();
		vm.list1=new Destination.destinationlist1();
		vm.fileName=m.prop("");

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

		vm.destinationda=function(e)
		{
			vm.list1.pop();
			vm.list1.push(e);
		}

		

		vm.logOne=function()
		{	
			a=Cookies.get("data");
				
			if(a==null) {
				console.log("hello")
				m.route("/login");
			}
			else if(a=="admin") {
				m.route('/adminLogged');
			}
			else {
				console.log("bye")
				m.route("/logged");
			}	
		}
	}
	return vm;
}());

module.exports=destinationViewModel;