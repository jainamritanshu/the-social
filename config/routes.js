'use strict';


const home = require('../app/controllers/home');
var Post = require('../app/models/user.js').post;
var PostCat = require('../app/models/user.js').postcat;
var Comment = require('../app/models/user.js').comment;
var User = require('../app/models/user.js').user;
var Album = require('../app/models/user.js').album;
var Image = require('../app/models/user.js').image;
var route = express.router();


module.exports = function (app, passport) {

  app.get('/home', function(req, res){
    res.send("Hello!");
    console.log("ho gya");
  });

  app.post('/user/authenticate', function(req, res) {

  // find the user
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresInMinutes: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'mil gya token!',
          token: token
        });
      }   

    }

  });
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
    var posts = Post.find(function(err, posts){
      if err
        throw err;

      res.json(posts);
    });
  });

  app.post('/user', function(req, res){
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

  app.get('/post/:id/comments', function(req, res){
    var comments = Comment.map(post_id);
    res.json(comments);
       //Is this logic correct to display all the comments?
    });

  app.post('/comment', function(req, res){
    comment = Comment();
    post = Post();

    comment.content = req.body.content;
    comment.post_id = req.post.id;
    comment.save(function(err){
      if (err)
        throw err;

      res.send('Your comment was published successfully!');
    });
  });

  app.get('/comment/:id', function(req, res){
    var comment = Comment.findById(req.params.id);
    res.send(comment);
  });

  app.put('/comments/:id', function(req, res){
    var comment = Comment.findById(req.params.id);
    comment.content = req.body.content;
    comment.save(function(err){
      if (err)
        res.send(err);
      res.send("Your comment was saved successfully!");
    });
  });

  app.delete('/user/:id', function(req, res){
    user = User.findById(req.params.id);
    user.remove(function(err){
      if err
        throw err;

      res.send('User deleted successfully!');
    });
  });

  app.delete('/post/:id', function(req,res){
    post = Post(req.params.id);
    post.remove(function(err){
      if err
        throw err;

      res.send('post removed successfully!');
    });
  });

  app.delete('/comment/:id', function(res, req){
    comment = Comment(req.params.id);
    comment.remove(function(err){
      if err
        throw err;

      res.send('you comment has been successfully deleted!');
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
