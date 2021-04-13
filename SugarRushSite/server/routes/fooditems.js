const express = require('express');
const router = express.Router();
const FoodItem = require('../../models/fooditemmodel')

/* GET api listing. */
router.get('/', async (req, res) => {
   try {
      const list = await FoodItem.find(req.query);
      res.json(list);
   } catch (error) {
      res.status(500).json({ error });
   }
});

module.exports = router;
