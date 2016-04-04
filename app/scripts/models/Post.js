var Post={};
var Comment={};

Post.post=function(data){


	this.postID=m.prop(data.postID);
	this.postBody=m.prop(data.postBody);
	// this.postLike=m.prop(data.postLike);	
}

Post.postLike=Array;

Comment.comment=function(data){

	this.comment=m.prop(data.comment);
	this.postComment=m.prop(data.postComment);
	// this.commentLike=m.prop(data.commentLike);
}

Comment.commentlike=Array;


module.exports=Post;
module.exports=Comment;
