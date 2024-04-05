var express = require('express');
var router = express.Router();

let messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Yo Wassup",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* GET /new page. */
router.get('/new', function(req, res, next) {
  res.render("form", {title: "New Message"});
});

// POST /new page
router.post('/new', function(req, res, next){
  // console.log('author: ' + req.body.authorName)
  // console.log('message: ' + req.body.messageTxt)
  messages.push({text: req.body.messageTxt, user: req.body.user, added: new Date() })
  res.redirect('/')
})

module.exports = router;
