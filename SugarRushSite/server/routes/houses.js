const express = require('express');
const router = express.Router();
const House = require('../../models/housemodel')

/* GET api listing. */
router.get('/', async (req, res) => {
   try {
      const list = await House.find(req.query);
      res.json(list);
   } catch (error) {
      res.status(500).json({ error });
   }
});

module.exports = router;
