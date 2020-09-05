const express = require('express');
const router = express.Router();

const phoneBookController = require('../controllers/phoneBookController');

router
  .route('/')
  .get(phoneBookController.getAllContact)
  .post(phoneBookController.createContact);

router.route('/:phone').get(phoneBookController.getContact);

router
  .route('/:id')
  .patch(phoneBookController.updateContact)
  .delete(phoneBookController.deleteContact);

module.exports = router;
