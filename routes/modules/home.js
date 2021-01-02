const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', (req, res) => {
  let localRecords = {}
  let localCategories = {}
  let totalAmount = 0
  Record.find()
    .lean()
    .then((records) => (localRecords = records))
    .then((records) => {
      records.forEach((record) => {
        //Calculate total amount
        totalAmount += record.amount

        //Handle date format
        let date = new Date(record.date)
        record.dateString =
          date.getFullYear().toString() +
          '/' +
          (date.getMonth().toString() + 1) +
          '/' +
          date.getDate().toString()
      })
    })
    .catch((error) => console.log(error))

  return Category.find()
    .lean()
    .then((categories) => (localCategories = categories))
    .then(() =>
      res.render('index', {
        records: localRecords,
        categories: localCategories,
        totalAmount,
      })
    )
})

module.exports = router
