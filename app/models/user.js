
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

var user = mongoose.model('User', UserSchema);


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
});*/

var PostSchema = new Schema({
	name: {type:String, default: ''},
	content: {type:String, default: ''},
	author: {type:String, default:''},
	comment_id: {type: Schema.Types.ObjectId, ref: 'CommentSchema'},
	post_cat_id: {type: Schema.Types.ObjectId, ref: 'PostCatSchema'}
});
var post = mongoose.model('PostSchema', PostSchema);

var CommentSchema = new Schema({
	content: {type:String, default: ''},
	post_id: {type: Schema.Types.ObjectId, ref: 'PostSchema'}
});

var comment = mongoose.model('CommentSchema', CommentSchema);	

var PostCatSchema = new Schema({
	name: {type:String, default: ''}
});

var postcat = mongoose.model('PostCatSchema', PostCatSchema);

var AlbumSchema = new Schema({
	img_id: {type: Schema.Types.ObjectId, ref: 'ImageSchema'},
	name: {type: String, default: ''}
});
var album = mongoose.model('AlbumSchema', AlbumSchema);


var ImageSchema = new Schema({
	//image: {type: Image},
	name: {type: String, default: ''}
}) ;

var image = mongoose.model('ImageSchema', ImageSchema);

//module.exports = ({'user': user}, {'post': post}, {'postcat': postcat}, {'comment': comment}, {'album': album}, {'image': image});
module.exports.post = (post, post);
module.exports.postcat = (postcat, postcat);
module.exports.comment = (comment, comment);
module.exports.user = (user, user);
module.exports.album = (album, album);
module.exports.image = (image, image);