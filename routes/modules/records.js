const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

//Add new page route handle
router.get('/new', (req, res) => {
  return Category.find()
    .lean()
    .then((categories) => res.render('new', { categories }))
})

//Create new express record
router.post('/', (req, res) => {
  const { name, date, category, amount } = req.body
  let categoryImage = ''

  Category.find()
    .lean()
    .then((categories) => {
      categories.forEach((category) => {
        //Get target category icon from Category model
        if (category.name.trim() === req.body.category.trim()) {
          categoryImage = category.image
        }
      })
    })
    .then(() => {
      //Create new expense and modify content
      const record = new Record({
        name: name,
        date: date,
        category: category,
        categoryImage: categoryImage,
        amount: amount,
      })

      //Save to Record model
      return record
        .save()
        .then(() => res.redirect('/'))
        .catch((error) => console.log(error))
    })
})
module.exports = router
