var vm = require('../viewModels/userViewModel');

vm.init()

var showsubmit= function(){
	vm.show();
	return false;
}

// var book=function(h, w, url) {
//   leftOffset = (screen.width/2) - w/2;
//   topOffset = (screen.height/2) - h/2;
//   window.open(url, 'left=' + leftOffset + ',top=' + topOffset + ',width=' + w + ',height=' + h + ',resizable,scrollbars=yes');

// }

var showView=function()
{
		return m("div[id=show]",[
				m("form",{onsubmit:showsubmit},{id:"show"},[
							m("button","Show")
				]),
				m("br"),
				// m("form",{onsubmit:book(300, 300, 'http://www.trivago.in/')},[
				// 	m("h1","Book a hotel room"),
				// 	m("button","Book Hotel")
				// ]),
				m("iframe[src='http://www.trivago.in/']",{config:m.route},"Book"),
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


module.exports=showView;