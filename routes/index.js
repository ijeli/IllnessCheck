const router = require('express').Router();
const path = require('path');
const profileController = require('../controller/profileController')

router.route('/api/profile').get(profileController.findAllProfile);

router.route('/create').post(profileController.create);

router.route('/:name').get(profileController.findNumber);

router.use('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;