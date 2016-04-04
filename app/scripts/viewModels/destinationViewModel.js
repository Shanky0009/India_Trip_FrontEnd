var Destination=require('../models/Destination');


var Cookies= require('js-cookie');
var destinationViewModel=(function(){

	var vm={}; 
 
	vm.init=function(){

		vm.list=new Destination.destinationlist();
		vm.list1=new Destination.destinationlist1();

		vm.fileName=m.prop("");
		// vm.placeData=m.prop("");


		vm.destinationNo=function()
		{

			m.request({
				 method: "GET",
				 url: "http://localhost:3000/api/destination/number",
			
				}).then(function(data){
					if(data){

						// console.log("data",data);
						// console.log("place",vm.placeData);

						if(vm.placeData==undefined)
						{ 
							// console.log("data",data)
							vm.placeData=data;
							// console.log("place",vm.placeData)
							
							for (var i = 0; i <=vm.placeData.length - 1; i++) {
								vm.list.push(vm.placeData[i]);			
							}
							// console.log(vm.list);

						}
						// else
						// {
						// 	console.log("place not empty")
						// 	vm.placeData="";
						
						// }		
					}
					m.route("/destinations");
					
				})
		} 

		vm.destinationda=function(e)
		{
			console.log(e.Place);
			vm.list1.pop();
			vm.list1.push(e);
			console.log(vm.list1);
			m.route("/destinations/info");

		}
	}

	return vm;
}());

module.exports=destinationViewModel;