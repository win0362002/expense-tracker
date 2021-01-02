const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  Record.create(
    {
      name: '午餐',
      categoryImage: '<i class="fas fa-utensils"></i>',
      amount: 60,
    },
    {
      name: '晚餐',
      categoryImage: '<i class="fas fa-utensils"></i>',
      amount: 60,
    },
    {
      name: '捷運',
      categoryImage: '<i class="fas fa-shuttle-van"></i>',
      amount: 120,
    }
  ).then(() => {
    console.log('Create record seed data done!')
    db.close()
  })
})
