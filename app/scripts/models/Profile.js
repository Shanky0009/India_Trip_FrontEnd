var Profile={};

Profile.profile=function(data){


	this.first_name=m.prop(data.first_name);
	this.last_name=m.prop(data.last_name);
	this.city=m.prop(data.city);
	this.state=m.prop(data.state);
	this.country=m.prop(data.country);
	this.gender=m.prop(data.gender);
	this.address=m.prop(data.address);
	this.phoneNo=m.prop(data.phoneNo);
	this.DOB=m.prop(data.DOB);
	this.UserID=m.prop(data.UserID);
	this.pinCode=m.prop(data.pinCode);
}


Profile.userlist=Array;


module.exports=Profile;
