var express = require('express');
var router = express.Router();

var db = require('../models/index');

router.get('/articles', async (req, res, next) => {
  var apiResult = {
    code: '',
    data: {},
    result: '',
  };

  try {
    var articles = await db.Article.findAll();

    apiResult.code = '200';
    apiResult.data = articles;
    apiResult.result = 'Ok';
  } catch (err) {
    apiResult.code = '500';
    apiResult.data = null;
    apiResult.result = 'Failed';
  }

  res.json(apiResult);
});

router.post('/articles', async (req, res, next) => {
  var apiResult = {
    code: '',
    data: {},
    result: '',
  };

  try {
    var title = req.body.title;
    var contents = req.body.contents;

    var article = {
      board_type_code: 1,
      title,
      article_type_code: 1,
      contents,
      view_count: 0,
      ip_address: '111.111.111.222',
      is_display_code: req.body.is_display_code,
      reg_date: Date.now(),
      reg_member_id: 1,
    };

    var dbArticle = await db.Article.create(article);

    apiResult.code = '200';
    apiResult.data = dbArticle;
    apiResult.result = 'Ok';
  } catch (err) {
    apiResult.code = '500';
    apiResult.data = null;
    apiResult.result = 'Failed';
  }

  res.json(apiResult);
});

router.post('/articles/:aid', async (req, res, next) => {
  var apiResult = {
    code: '',
    data: {},
    result: '',
  };

  try {
    var articleId = req.params.aid;

    var title = req.body.title;
    var contents = req.body.contents;

    var article = {
      title,
      contents,
      is_display_code: req.body.is_display_code,
      ip_address: '111.111.111.222',
      edit_date: Date.now(),
      edit_member_id: 1,
    };

    var affectedCnt = await db.Article.update(article, {
      where: { article_id: articleId },
    });

    apiResult.code = '200';
    apiResult.data = affectedCnt;
    apiResult.result = 'Ok';
  } catch (err) {
    apiResult.code = '500';
    apiResult.data = null;
    apiResult.result = 'Failed';
  }

  res.json(apiResult);
});

router.get('/articles/:aid', async (req, res, next) => {
  var apiResult = {
    code: '',
    data: {},
    result: '',
  };

  try {
    var articleId = req.params.aid;

    var article = await db.Article.findOne({
      where: { article_id: articleId },
    });

    apiResult.code = '200';
    apiResult.data = article;
    apiResult.result = 'Ok';
  } catch (err) {
    apiResult.code = '500';
    apiResult.data = null;
    apiResult.result = 'Failed';
  }

  res.json(apiResult);
});

router.delete('/articles/:aid', async (req, res, next) => {
  var apiResult = {
    code: '',
    data: {},
    result: '',
  };

  try {
    var articleId = req.params.aid;
    var affectedCnt = await db.Article.destroy({
      where: { article_id: articleId },
    });

    apiResult.code = '200';
    apiResult.data = affectedCnt;
    apiResult.result = 'Ok';
  } catch (err) {
    apiResult.code = '500';
    apiResult.data = null;
    apiResult.result = 'Failed';
  }

  res.json(apiResult);
});

module.exports = router;
