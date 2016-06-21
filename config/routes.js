'use strict';


const home = require('../app/controllers/home');
var Post = require('../app/models/user.js').post;
var PostCat = require('../app/models/user.js').postcat;
var Comment = require('../app/models/user.js').comment;
var User = require('../app/models/user.js').user;
var Album = require('../app/models/user.js').album;
var Image = require('../app/models/user.js').image;


module.exports = function (app, passport) {

  app.get('/home', function(req, res){
    res.send("Hello!");
    console.log("ho gya");
  });


  app.post('/post', function(req, res){
    var post = new Post();

    post.name = req.body.name;
    post.content = req.body.content;
    post.author = req.User.name;

    post.save(function(err){
      if (err)
        res.send(err);

      res.send("Your post has been saved");
      console.log("post saved!");
    });
  });

  app.get('/post', function(req, res){
    var posts = new Post();
    res.send(posts);
  });

  app.post('/user/create', function(req, res){
    var user = new User;

    user.name = 'ashu';
    user.email = 'jainamritanshu@gmail.com';
    user.phone_no = '995310861';

    user.save(function(err){
      if (err)
        throw err;

      console.log('ho gya bc!');
    });
  });

  app.get('/post/:id', function(req, res){
    var post = Post.findById(req.params.id);
    res.send(post);
  });  

  app.put('/post/:id', function(req, res){
    var post = Post.findById(req.params.id);
    post.name = req.body.name;
    post.content = req.body.content;

    post.save(function(err){
      if (err)
        res.send(err);

      res.send("Your post has been successfully updated");
    });
  });

  app.get('/post/comments', function(req, res){
    var comments = Comment.findById(req.params.post_id);
      res.send(comments);
       //Is this logic correct to display all the comments?
  });

  app.get('/comment/:id', function(req, res){
    var comment = Comment.findById(req.params.id);
    res.send(comment);
  });

  app.put('/comments/:id', function(req, res){
    var comment = Comment.findById(req.params.id);
    comment.content = req.body.content;
    comment.save(function(err){
      if(err)
        res.send(err);
      res.send("Your comment was saved successfully!");
    });
  });
    

  


  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).send('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).send('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
