 
var User=function(data){

	this.username=m.prop(data.username);
	this.emailID=m.prop(data.emailID);
	this.password=m.prop(data.password);
	this.answer=m.prop(data.answer);
}

module.exports=User; 