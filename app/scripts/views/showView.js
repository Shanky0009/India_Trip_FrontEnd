/*
Loads view models here 
*/
var vm = require('../viewModels/userViewModel');

/*
view model initialized
*/
vm.init()

/*
onsubmit method
*/
var showsubmit= function(){
	vm.show();
	return false;
}
/*
onsubmit method ends here
*/

/*******************************************
Displays registered users info to Admin view
********************************************/
var showView=function()
{
	return m("div[id=show]",[
		m("form",{onsubmit:showsubmit},{id:"show"},[
					m("button","Show")
		]),
		m("br"),
		m("h1",vm.userData),
		m("table",[
			vm.list.map(function(data){
				return m("tr", [
                    m("a[href='/']",{config:m.route},m('td', data.username)),
                    m("td",data.emailID)
                ])
        	})
		])
	])		
};
/************************************************
Displays registered users info to Admin ends here
*************************************************/

module.exports=showView;