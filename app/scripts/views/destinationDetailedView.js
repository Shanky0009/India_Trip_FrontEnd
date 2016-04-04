var vm = require('../viewModels/destinationViewModel');

vm.init()

var back=function()
{
	vm.destinationNo();
	return false;
}

var destinationDetailedView=function()
{
		return m("div[class=modal fade],[id=myModal], [role=dialog]",[
				m("div[class=modal-dialog modal-sm]",[
					m("div[class=modal-content]",[
						m("div[class=modal-header]",[
							m("button[type=button],[class=close],[data-dismiss=modal]",{onclick:back},'X'),
							m("h4[class=modal-title]","Destination Data")
							]),
						m("div[id=modal-body]",[
							m('table',[
									m("tr",[
											m('th',"Place"),
											m('th',"Description"),
											m('th',"Area"),
											m('th',"Altitude"),
											m('th',"Temperature"),
											m('th',"Rainfall"),
											m('th',"Season"),
											m('th',"Languages spoken"),
											m('th',"Clothing"),
											m('th',"Best Season"),
											m('th',"STD Code"),
											m('th',"Tourism Office"),
											m('th',"CONDUCTED TOURS"),
											m('th',"Places Covered Timings And Fare"),
											m('th',"Resvn")
										]),
									vm.list1.map(function(data){				
								
											return m("tr", [															
													 	m('td',data.Place),
													 	m('td',data.Description),
													 	m('td',data.Area),
													 	m('td',data.Altitude),
													 	m('td',data.Temperature),
													 	m('td',data.Rainfall),
													 	m('td',data.Season),
													 	m('td',data.Languages_spoken),
													 	m('td',data.Clothing),
													 	m('td',data.State),
													 	m('td',data.Best_Season),
													 	m('td',data.STD_Code),
													 	m('td',data.Tourism_Office),
													 	m('td',data.CONDUCTED_TOURS),
													 	m('td',data.Places_Covered_Timings_And_Fare),
													 	m('td',data.Resvn)
													 	
							                    ])
									})
							])
						])
					]) 
				])
			])

};

module.exports=destinationDetailedView;