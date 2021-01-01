const Category = require('../category')
const db = require('../../config/mongoose')

db.once('open', () => {
  Category.create(
    {
      name: '家居物業',
      image: '<i class="fas fa-home"></i>',
    },
    {
      name: '交通出行',
      image: '<i class="fas fa-shuttle-van"></i>',
    },
    {
      name: '休閒娛樂',
      image: '<i class="fas fa-grin-beam"></i>',
    },
    {
      name: '餐飲食品',
      image: '<i class="fas fa-utensils"></i>',
    },
    {
      name: '其他',
      image: '<i class="fas fa-pen"></i>',
    }
  ).then(() => {
    console.log('Create category seed data done!')
    db.close()
  })
})
