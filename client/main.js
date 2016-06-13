import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
CommentsList = new Mongo.Collection('comments');
Meteor.subscribe('theComments');

Template.addCommentForm.events({
	'submit form': function(event){
		event.preventDefault();
		var comment = event.target.commentBox.value;
		var postedAt = new Date();
		var postedBy = Meteor.user().emails[0].address;
        Meteor.call('insertComment',postedAt,postedBy,comment);
        event.target.commentBox.value = "";
	}
});
Template.showComments.helpers({
   getComments() {
      return CommentsList.find({},{sort: {postedAt: -1}});
	}
});


