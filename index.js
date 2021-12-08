const express = require("express")
const app = express()
const translation = require('./translations.json')
const port = 5000

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.get("/:lang?", (req, res) => {
  const { lang } = req.params //pour recupérer :lang
  //req.query pour récupérer ?username&password

  res.render('home', {
    translation,
    isFr: lang === "fr",
    isEn: lang === "en",
    isEs: lang === "es"
  })
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})