/*
Definning components
*/
var Post={};
var Comment={};

/*
Properties of post
*/
Post.post=function(data){
	this.postID=m.prop(data.postID);
	this.postBody=m.prop(data.postBody);
}

/*
List of post component
*/
Post.postLike=Array;

/*
Properties of comment
*/
Comment.comment=function(data){
	this.comment=m.prop(data.comment);
	this.postComment=m.prop(data.postComment);
}

/*
Lists of comment component
*/
Comment.commentlike=Array;

/*
models exports here
*/
module.exports=Post;
module.exports=Comment;
