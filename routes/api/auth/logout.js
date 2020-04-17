const router = require('express').Router()

router.route('/logout').get((req, res) => {
    // handle with passport
    res.send('logout')
})

module.exports = router