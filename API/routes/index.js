const router = require('express').Router();
const ApiController = require('../ApiController');
const { catchErrors } = require('../../middleware/errors');

const test = (req, res) => {
  res.json({ data: 'Dev Job Finder - API' });
};

const search = async (req, res) => {
  const { query } = req.query;
  const result = await ApiController.search(query);
  res.json(result);
};

router.get('/test', test);
router.get('/search', catchErrors(search));

module.exports = router;
