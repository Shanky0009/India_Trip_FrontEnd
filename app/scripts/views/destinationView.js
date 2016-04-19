/*
Loads view models here 
*/
var vm = require('../viewModels/destinationViewModel');

/*
view model initialized
*/
vm.init()

/*
onsubmit method
*/
var destinationDa=function(e){
	console.log(vm.list);
	vm.destinationda(e);	
	return false;
}
/*
onsubmit method ends here
*/  

/***********************************************
All destination view with their details in modal
*************************************************/
var destinationView=function()
{
	return m("div[id=destination]",[
	    m("ul",[
			vm.list.map(function(data,index){
				return m("li",data.Place,[
					m("a[href=#],[data-toggle=modal], [data-target=#myModal]",{onclick:destinationDa.bind(vm,data),config:m.route},[
						m("img",{src:data.url,alt:data.Place})
					])												
				])												
    		})
		]),
		m("div[class=modal fade],[id=myModal], [role=dialog]",[
			m("div[class=modal-dialog modal-sm]",[
				m("div[class=modal-content]",[
					m("div[class=modal-header]",[
						m("button[type=button],[class=close],[data-dismiss=modal]",'X'),
						m("h4[class=modal-title]","Destination Data")
					]),
					m("div[id=modal-body]",[
						vm.list1.map(function(data){				
							return m("div[class=areaData]",[	
							 	m("span",[ 
									m("label[for='Place']","Place"),
									m("p[name=Place]",data.Place)
								]),
								m("span",[ 
									m("label[for='Description']","Description"),
									m("p[name=Description]",data.Description)
								]),
								m("span[class=desc]",[ 
									m("label[for='Altitude']","Altitude"),
									m("p[name=Altitude]",data.Altitude)
								]),
								m("span[class=desc]",[ 
									m("label[for='Temperature']","Temperature"),
									m("p[name=Temperature]",data.Temperature)
								]),
								m("span[class=desc]",[ 
									m("label[for='Season']","Season"),
									m("p[name=Season]",data.Season)
								]),
								m("span[class=desc]",[ 
									m("label[for='Language_Spoken']","Language Spoken"),
									m("p[name=Language_Spoken]",data.Language_Spoken)
								]),
								m("span[class=desc]",[ 
									m("label[for='Clothing']","Clothing"),
									m("p[name=Clothing]",data.Clothing)
								]),
								m("span[class=desc]",[ 
									m("label[for='State']","State"),
									m("p[name=State]",data.State)
								]),
								m("span",[ 
									m("label[for='Tourism_Office']","Tourism Office"),
									m("p[name=Tourism_Office]",data.Tourism_Office)
								])				 	
			                ])
						})
					])
				]) 
			])
		])
	])					
};

/*********************************************************
All destination view with their details in modal ends here
**********************************************************/

module.exports=destinationView;