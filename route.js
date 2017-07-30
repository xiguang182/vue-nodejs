/**
 * Created by Real on 2017-07-30.
 */

var express = require('express');
var router = express.Router();
var Task = require('./task');
router.get('/select/:id?', function(req, res, next) {
    if (req.params.id) {
        Task.getUserById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Task.getAllUsers(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});
router.get('/email/:parent?', function(req, res, next) {
    if (req.params.parent) {
        Task.sendEmail(req.params.parent, function (err) {
            if (err)
                console.log(err);
            else console.log("email sent");
        });
    } else {
        console.log("no target")
    }
});
module.exports = router;