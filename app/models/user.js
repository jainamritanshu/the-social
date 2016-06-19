
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var userPlugin = require('mongoose-user');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var UserSchema = new Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  phone_no: { type: String, default: ''},
  hashed_password: { type: String, default: '' },
  salt: { type: String, default: '' },
  post_id: {type: Schema.Types.ObjectId, ref: 'PostSchema'}
});


/**var ashu = new UserSchema({
	name: 'ashu jain',
	email: 'jainamritanshu@gmail.com',
	phone_no: '9953108361',
	hashed_password: 'Ashujain@1997'
});

ashu.save(function(err){
	if(err)
		throw err;
	console.log('User saved successfully!');
});

var PostSchema = new Schema({
	name: {type:String, default: ''},
	content: {type:String, default: ''},
	author: {type:String, default:''},
	pub_date: {type: Date, default: 'Date.now'},  
	comment_id: {type: Schema.Types.ObjectId, ref: 'CommentSchema'},
	post_cat_id: {type: Schema.Types.ObjectId, ref: 'PostCatSchema'}
})

var CommentSchema = new Schema({
	content: {type:String, default: ''},
	post_id: {type: Schema.Types.ObjectId, ref: 'PostSchema'}
})	

var PostCatSchema = new Schema({
	name: {type:String, default: ''}
})

var AlbumSchema = new Schema({
	pub_date: {type: Date, default: 'Date.now'},
	img_id: {type: Schema.Types.ObjectId, ref: 'ImageSchema'},
	name: {type: String, default: ''}
})


var ImageSchema = new Schema({
	image: {type: Image},
	name: {type: String, default: ''},
	album = {type: Schema.Types.ObjectId, ref: 'AlbumSchema'}
}) */

module.exports = mongoose.model('User', UserSchema/**, {'Post': PostSchema}, {'PostCat': PostCatSchema}, {'Comment': CommentSchema}, {'Album': AlbumSchema}, {'Image': ImageSchema}*/);
