const newsModel = require('../model/query')
const { rows } = require('../../database/pg')

let x = false

const all = async (req, res) => {
  if ( typeof(req.session.user_id) === 'number') {
    x = true
  } else { x = false }

  // console.log(typeof(req.session.user_id));

  res.render("index", {
    news: await rows(newsModel.SQL),
    isLoggedIn: x,
  })
}

const byId = async (req, res) => {
  const news = await rows(newsModel.GET_ITEM, req.params.id)

  let count = (news[0].views) + 1

  await rows(newsModel.UPDATE_VIEWS, count, req.params.id)

  res.render("item", {
    news: await rows(newsModel.GET_ITEM, req.params.id),
  })
}

const search = async (req, res) => {
  if ( typeof(req.session.user_id) === 'number') {
    x = true
  } else { x = false }

  res.render("index", {
    news: await rows(newsModel.SEARCH_SQL, `%${req.query.title}%`),
    isLoggedIn: x,
  })
}

module.exports.all = all
module.exports.byId =byId
module.exports.search =search