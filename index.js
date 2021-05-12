const express = require('express')
const ejs = require('ejs')
const fileUpload = require("express-fileupload")
const session = require('express-session')

// load routes
const newsRoutes = require('./src/routes/news')
const adminRoutes = require('./src/routes/admin')
const userRoutes = require('./src/routes/user')

// defines
const PORT = process.env.PORT || 4001

const app = express()

// middlewares
app.use(express.urlencoded({ extended: true, }))
app.use(fileUpload())
app.use(express.json())
app.use(express.static("static"))
app.use(session({ secret: "MY_KEY",}))

app.engine("html", ejs.renderFile)

// settings
app.set("view engine", "html")
app.set("views", "src/views")

// routes
app.use(newsRoutes)
app.use(adminRoutes)
app.use(userRoutes)


app.listen(PORT, () => console.log("*:" + PORT))