const router = require("express").Router()
const db = require("../models");
const passport = require("../config/passport");

router.get("/images", function(req, res) {
    db.Image.findAll({where: {userId: req.params.id}}).then(function(result) {
      return res.json(result);
    })
})

router.post("/images", function(req, res) {
    db.Image.create(req.body)
    .then(() => {
        res.json(true);
    })
    .catch(err => {
        res.status(401).json(err);
    });
})

router.delete("/image/:user/:id", function(req, res) {
    db.Image.destroy({where: {UserId: req.params.user, nasa_id: req.params.id}})
    .then(() => {
        res.json(true);
    })
    .catch(err => {
        res.status(401).json(err);
    });
})

module.exports = router;