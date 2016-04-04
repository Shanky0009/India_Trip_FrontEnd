var vm = require('../viewModels/destinationViewModel');

vm.init()

var destinationDa=function(e){
	vm.destinationda(e);	
	return false;
}


  
var destinationView=function()
{
		return m("div[id=destination]",[
					m("table",[
						vm.list.map(function(data,index){									
							return m("button[type=button], [class=btn btn-info btn-lg], [data-toggle=modal], [data-target=#myModal],[style=background:url(/images/images.jpg)]",{onclick:destinationDa.bind(vm,data),config:m.route},[
										m("tr", [ 
										 	m('td', data.Place)
				                    ])
							])

                		})
					])
				])
};

module.exports=destinationView;