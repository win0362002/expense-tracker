const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  Record.create(
    {
      name: '午餐',
      category: '餐飲食品',
      categoryImage: '<i class="fas fa-utensils"></i>',
      amount: 60,
    },
    {
      name: '晚餐',
      category: '餐飲食品',
      categoryImage: '<i class="fas fa-utensils"></i>',
      amount: 60,
    },
    {
      name: '捷運',
      category: '交通出行',
      categoryImage: '<i class="fas fa-shuttle-van"></i>',
      amount: 120,
    }
  ).then(() => {
    console.log('Create record seed data done!')
    db.close()
  })
})
