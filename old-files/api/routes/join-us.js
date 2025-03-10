const { Router } = require('express')
const router = Router()

const {createAirTableRow} = require('../utils')

router.post('/join-us', (req, res) => {
  const fields = {
    Name: req.body.name,
    Email: req.body.email,
    Experience: req.body.experience,
    cv: req.body.cv_attachment,
  }

  createAirTableRow(fields, 'Join us form')
    .then(() => {
      res.status(201).json({ success: true })
    })
    .catch(() => {
      res.status(400).json({ success: false })
    })
})

module.exports = router
