var vm = require('../viewModels/userViewModel');

vm.init()

var showsubmit= function(){
	vm.show();
	return false;
}

var showView=function()
{
		return m("html",[
			m("body",[
				m("form",{onsubmit:showsubmit},{id:"show"},[
							m("button","Show")
				]),
				m("br"),
				m("h1",vm.userData),
				m("table",[
					vm.list.map(function(data){
						return m("tr", [
	                        
	                        m("a[href='/']",m('td', data.username)),
	                        m("td",data.emailID)
	                    ])

                	})
				])
			])	
		])
};

module.exports=showView;