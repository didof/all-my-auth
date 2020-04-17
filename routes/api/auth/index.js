const router = require('express').Router()

router.route('/login').get(require('./login'))
router.route('/logout').get(require('./logout'))
router.route('/google').get(require('./google'))

module.exports = router