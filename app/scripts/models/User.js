var User={};

User.user=function(data){
	this.username=m.prop(data.username);
	this.emailID=m.prop(data.emailID);
	this.password=m.prop(data.password);
	this.answer=m.prop(data.answer);
	this.token=m.prop(data.token);
	this.userData=m.prop(data.userData);
}

User.userlist=Array;

module.exports=User;