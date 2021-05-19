const { v4 } = require("uuid")
const path = require("path")

const newsModel = require('../model/query')
const { rows } = require('../../database/pg')
const uploadsDir = path.join(__dirname, "../../static/images")

const GET = async (req, res) => {
  if ( typeof(req.session.user_id) === 'number') {
    res.render("admin", {
      news: await rows(newsModel.SQL),
    })
  } else {
    res.redirect("login")
  }

}

const search = async (req, res) => {
  res.render("admin", {
    news: await rows(newsModel.SEARCH_SQL, `%${req.query.title}%`),
  })
}

const POST = async (req, res) => {
  const photo = req.files.photo
  const name = v4() + "." + photo.mimetype.split("/")[1]
  const addresImage = "/images/" + name
  photo.mv(path.join(uploadsDir, name), (error) => {
		if(error) {console.error(error)}
	})

  await rows(newsModel.POST_SQL, addresImage, req.body.title, req.body.content)

  res.render("admin", {
    news: await rows(newsModel.SQL),
  })
}

const DEL = async (req, res) => {
  const { id } = req.params

  await rows(newsModel.DEL_SQL, id)

  res.render("admin", {
    news: await rows(newsModel.SQL),
  })
}

const getForEdit = async (req, res) => {
  const { id } = req.params

  res.render("edit", {
    news: await rows(newsModel.GET_ITEM, id),
  })
}

const edit = async (req, res) => {

  const { title, content, oldphoto } = req.body
  const { id } = req.params

  console.log(oldphoto + '1');

  try {
    const photo = req.files.photo
    const name = v4() + "." + photo.mimetype.split("/")[1]
    const addresImage = "/images/" + name
    photo.mv(path.join(uploadsDir, name), (error) => {
    if(error) {console.error(error)}
    })

    await rows(newsModel.UPDATE_SQL, addresImage, title, content, id)

  }
  catch (error) {
    if (error) {
      addresImage = oldphoto

      await rows(newsModel.UPDATE_SQL, addresImage, title, content, id)
    }
  }

  res.render("edit", {
    news: await rows(newsModel.GET_ITEM, id),
  })
}


module.exports.GET = GET
module.exports.search = search
module.exports.POST = POST
module.exports.DEL = DEL
module.exports.getForEdit =getForEdit
module.exports.edit =edit