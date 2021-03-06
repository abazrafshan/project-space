const router = require("express").Router();
const db = require("../models");

// get all posts
router.get("/posts", function (req, res) {
  db.Post.findAll({
    include: [db.Response, db.User]
  }).then(function (getPostsResult) {
    res.json(getPostsResult);
  });
});

//get all posts in a specific category
router.get("/posts/:category", function(req, res) {
  console.log(req.params.category)
  db.Post.findAll({where: {category: req.params.category}, include: [db.Response, db.User]})
  .then(function(categoryResults) {
    res.json(categoryResults)
  })
})

// create new post
router.post("/posts", function (req, res) {
  db.Post.create(req.body).then(function (dbPost) {
    res.json(dbPost);
  });
});

// get single post with responses
router.get("/post/:id", function (req, res) {
    db.Post.findOne({where: {id: req.params.id}, include: [db.Response, db.User]})
    .then(function(response){
      console.log(response)
        res.json(response)
    });
});

// delete post
router.delete("/post/:id", function (req, res) {
  db.Post.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (deletePostResult) {
    res.json(deletePostResult);
  });
});

// update post
router.put("/post/:id", function (req, res) {
  db.Post.update({
    where: {
      id: req.params.id,
    },
  }).then(function (updatePostResult) {
    res.json(updatePostResult);
  });
});

module.exports = router;
