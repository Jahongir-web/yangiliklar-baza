const newsModel = require('../model/query')
const { rows } = require('../../database/pg')

const GET = async (req, res) => {

  req.session.user_id = null

  res.render("login")
  // console.log(typeof(req.session.user_id));
}

const POST = async (req, res) => {
  const { username, password } = req.body

  const user = await rows(newsModel.GET_USER, username, password)

  if (user.length === 1) {
    req.session.user_id = user[0].user_id

    res.redirect('admin')
  } else {
    req.session.user_id = null
  }
  res.status(401).end()
}



module.exports.GET = GET
module.exports.POST = POST