const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', (req, res) => {
  let localRecords = []
  let localCategories = []
  let totalAmount = 0
  Record.find()
    .lean()
    .then((records) => (localRecords = records))
    .then((records) => {
      records.forEach((record) => {
        //Calculate total amount
        totalAmount += record.amount

        //Handle date format
        let newDate = new Date(record.date)
        const year = newDate.getFullYear()
        const month = newDate.getMonth()
        const date = newDate.getDate()

        record.dateString =
          year +
          '/' +
          (month > 8 ? month + 1 : '0' + (month + 1)) +
          '/' +
          (date > 9 ? date : '0' + date)
      })
    })
    .then(() => {
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
        .catch((error) => console.log(error))
    })
    .catch((error) => console.log(error))
})

module.exports = router
