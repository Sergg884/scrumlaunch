const { Router } = require('express')
const router = Router()

const {createAirTableRow} = require('../utils')

router.post('/send-cv', async (req, res) => {
  const fields = {
    Name: req.body.name,
    Email: req.body.email,
    English: req.body.english,
    cv: req.body.cv_attachment,
  }

  createAirTableRow(fields, 'CV')
    .then(() => {
      res.status(201).json({ success: true })
    })
    .catch(() => {
      res.status(400).json({ success: false })
    })
})

module.exports = router
