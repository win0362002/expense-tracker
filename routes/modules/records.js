const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

//Add new page route handle
router.get('/new', (req, res) => {
  return Category.find()
    .lean()
    .then((categories) => res.render('new', { categories }))
    .catch((error) => console.log(error))
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
        category: category,
        categoryImage: categoryImage,
        amount: amount,
        date: date,
      })

      //Save to Record model
      return record
        .save()
        .then(() => res.redirect('/'))
        .catch((error) => console.log(error))
    })
    .catch((error) => console.log(error))
})

//Add edit page route handle
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  let localCategories = []
  let localRecord = []

  Record.findById(id)
    .lean()
    .then((record) => {
      localRecord = record
      const year = record.date.getFullYear()
      const month = record.date.getMonth()
      const date = record.date.getDate()

      localRecord.dateString =
        year +
        '-' +
        (month > 8 ? month + 1 : '0' + (month + 1)) +
        '-' +
        (date > 9 ? date : '0' + date)
    })
    .then(() => {
      return Category.find()
        .lean()
        .then((categories) => {
          categories.forEach((category) => {
            if (category.name.trim() !== localRecord.category.trim()) {
              localCategories.push(category)
            }
          })
        })
        .then(() => {
          res.render('edit', {
            record: localRecord,
            categories: localCategories,
          })
        })
        .catch((error) => console.log(error))
    })
    .catch((error) => console.log(error))
})

//Save edit express record result
router.put('/:id', (req, res) => {
  const id = req.params.id
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
      //Find target record and modify content then save
      return Record.findById(id)
        .then((record) => {
          record.name = name
          record.category = category
          record.categoryImage = categoryImage
          record.amount = amount
          record.date = date
          return record.save()
        })
        .then(() => res.redirect('/'))
        .catch((error) => console.log(error))
    })
    .catch((error) => console.log(error))
})

//Delete expense record
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then((record) => {
      record.remove()
      res.redirect('/')
    })
    .catch((error) => console.log(error))
})

module.exports = router
