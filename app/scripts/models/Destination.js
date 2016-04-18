var Destination={};

Destination.destination=function(data){
	this.fileName=m.prop(data.fileName);
	this.placeData=m.prop(data.placeData);
}

Destination.destinationlist=Array;
Destination.destinationlist1=Array;
Destination.destinationlistH=Array;

module.exports=Destination;