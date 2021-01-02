const express = require('express')
const home = require('./modules/home')
const records = require('./modules/records')
const filter = require('./modules/filter')

const router = express.Router()

router.use('/', home)
router.use('/records', records)
router.use('/filter', filter)

module.exports = router
