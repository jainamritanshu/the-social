
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
  post_id: {type: String, default: 'PostSchema.post_id'}
});

mongoose.model('User': UserSchema);

/**
 * User plugin
 */

UserSchema.plugin(userPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

UserSchema.method({

});

/**
 * Statics
 */

UserSchema.static({

});

/**
 * Register
 */

var PostSchema = new Schema({
	name: {type:String, default: ''},
	content: {type:String, default: ''},
	author: {type:String, default:''},
	pub_date: {type: Date, default: 'Date.now'},  
	comment_id: {type: Schema.Types.ObjectId, ref: 'Comment'},
	post_cat_id: {type: Schema.Types.ObjectId, ref: 'PostCat'}
})

module.exports = mongoose.model('Post': PostSchema);

var CommentSchema = new Schema({
	content: {type:String, default: ''},
	post_id: {type: Schema.Types.ObjectId, ref: 'Post'}
})	

module.exports = mongoose.model('Comment': CommentSchema);

var PostCatSchema = new Schema({
	name: {type:String, default: ''}
})

module.exports = mongoose.model('PostCat': PostCatSchema);

var AlbumSchema = new Schema({
	album_id: ObjectId,
	pub_date: {type: Date, default: 'Date.now'},
	img_id: {type: Schema.Types.ObjectId, default: 'Image'},
	name: {type: String, default: ''}
})

module.exports = mongoose.model('Album': AlbumSchema);

var ImageSchema = new Schema({
	//url for image
})

module.exports = mongoose.model('Image': ImageSchema);
