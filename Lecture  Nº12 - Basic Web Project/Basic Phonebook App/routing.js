const phonebookController = require('./controllers/phonebook-controller');
const router = require('express').Router();


router.get('/', phonebookController.index);
router.post('/add', phonebookController.addPhonebookPost);


module.exports = router;
