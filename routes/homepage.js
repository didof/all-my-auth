const router = require('express').Router()

router.route('/').get((req, res) => {
	res.render('home/homepage', { title: 'Homepage', theme: 'primary' })
})

module.exports = router
