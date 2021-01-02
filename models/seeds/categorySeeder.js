const Category = require('../category')
const db = require('../../config/mongoose')

db.once('open', () => {
  Category.create(
    {
      name: '家居物業',
      image: '<i class="fas fa-home fa-fw"></i>',
    },
    {
      name: '交通出行',
      image: '<i class="fas fa-shuttle-van fa-fw"></i>',
    },
    {
      name: '休閒娛樂',
      image: '<i class="fas fa-grin-beam fa-fw"></i>',
    },
    {
      name: '餐飲食品',
      image: '<i class="fas fa-utensils fa-fw"></i>',
    },
    {
      name: '其他',
      image: '<i class="fas fa-pen fa-fw"></i>',
    }
  ).then(() => {
    console.log('Create category seed data done!')
    db.close()
  })
})
