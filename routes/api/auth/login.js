const router = require('express').Router()

router.route('/login').get((req, res) => {
	res.send('eo')
})

module.exports = router
