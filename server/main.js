import { Meteor } from 'meteor/meteor';

CommentsList = new Mongo.Collection('comments');
Meteor.publish('theComments',function(){
   return CommentsList.find();
});

Meteor.methods({
	'insertComment' : function(postedAt,postedBy,comment){
		CommentsList.insert({
			postedAt : postedAt, postedBy : postedBy, comment : comment
		});
	}
});

Meteor.startup(() => {
  // code to run on server at startup
});
