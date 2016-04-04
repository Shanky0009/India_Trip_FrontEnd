var Hotel={};

Hotel.hotel=function(data){


	this.hotelName=m.prop(data.hotelName);
	this.hotelemail=m.prop(data.hotelemail);
	this.hotelPhone=m.prop(data.hotelPhone);
	this.hotelPrice=m.prop(data.hotelPrice);
	this.hotelType=m.prop(data.hotelType);
	this.startDate=m.prop(data.startDate);
	this.userID=m.prop(data.userID);
	this.typeOfRoom=m.prop(data.typeOfRoom);
	this.noOfRoom=m.prop(data.noOfRoom);
	this.offer=m.prop(data.offer);
	this.payment=m.prop(data.payment);
}


Hotel.hotellist=Array;


module.exports=Hotel;
