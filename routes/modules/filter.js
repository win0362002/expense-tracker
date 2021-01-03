const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

router.post('/', (req, res) => {
  const targetCategory = req.body.category.trim()
  let totalAmount = 0
  let filteredRecords = []
  let localCategories = []
  Record.find({ category: targetCategory })
    .lean()
    .then((records) => {
      records.forEach((record) => {
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

        filteredRecords.push(record)
      })
    })
    .then(() => {
      return Category.find()
        .lean()
        .then((categories) => {
          categories.forEach((category) => {
            if (category.name.trim() !== targetCategory) {
              localCategories.push(category)
            }
          })
        })
        .then(() =>
          res.render('index', {
            records: filteredRecords,
            categories: localCategories,
            totalAmount,
            targetCategory,
          })
        )
        .catch((error) => console.log(error))
    })
    .catch((error) => console.log(error))
})

module.exports = router
