/*
Defining destinations component
*/
var Destination={};


/*
Properties of Destination
*/
Destination.destination=function(data){
	this.fileName=m.prop(data.fileName);
	this.placeData=m.prop(data.placeData);
}

/*
Lists of Destination component
*/
Destination.destinationlist=Array;
Destination.destinationlist1=Array;
Destination.destinationlistH=Array;


/*
Destination model exports here
*/
module.exports=Destination;