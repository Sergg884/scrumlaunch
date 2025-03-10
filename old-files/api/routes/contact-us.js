const { Router } = require('express')
const router = Router()

const {createAirTableRow} = require('../utils')

router.post('/contact-us', (req, res) => {
  const fields = {
    Name: req.body.name,
    Email: req.body.email,
    Details: req.body.details,
    cv_attachment: req.body.cv_attachment,
  }

  createAirTableRow(fields, 'Contact form')
    .then(() => {
      res.status(201).json({ success: true })
    })
    .catch(() => {
      res.status(400).json({ success: false })
    })
})

module.exports = router
