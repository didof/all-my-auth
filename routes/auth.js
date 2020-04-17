const router = require('express').Router()

router.route('/login').get((req, res) => {
	res.render('auth/login', { title: 'Login', theme: 'primary' })
})

module.exports = router
