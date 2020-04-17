const router = require('express').Router()

router.route('/google').get((req, res) => {
    // handle with passport
    res.send('logging in with google')
})

module.exports = router