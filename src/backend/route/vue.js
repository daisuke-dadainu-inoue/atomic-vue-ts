const express = require('express');
const router = express.Router();

/* GET manage page. */
router.get('/', function (_req, res) {
  res.render('index', { title: 'Vue-Typescript' });
});

module.exports = router;
