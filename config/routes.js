'use strict';


const home = require('../app/controllers/home');
var Post = require('../models/users.js');
var PostCat = require('../models/users.js');
var Comment = require('../models/users.js');
var User = require('../models/users.js');
var Album = require('../models/users.js');
var Image = require('../models/users.js');


module.exports = function (app, passport) {

  app.get('/home', function(res, req)(
    res.send("Welcome Home!");
    console.log("ye to hua");
    ));

  app.post('/post/create', function(req, res){
    var post = new Post();

    post.name = req.body.name;
    post.content = req.body.content;
    post.author = req.User.name;
    post.pub_date = req.body.pub_date;

    post.save(function(err){
      if (err)
        res.send(err);

      res.send("Your post has been saved");
    });
  });

  app.get('/post/:id', function(req, res){
    var post = Post.findById(req.params.id);
    res.send(post);
  });  

  app.get('/post/:id/edit', function(req, res){
    var post = Post.findById(req.params.id);
    post.name = req.body.name;
    post.content = req.body.content;

    post.save(function(err){
      if (err)
        res.send(err);

      res.send("Your post has been successfully updated");
    })
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
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
