const { Router } = require('express')
const router = Router()

const { createAirTableRow } = require('../utils')

router.post('/newsletter', (req, res) => {
  const fields = {
    Email: req.body.email
  }

  createAirTableRow(fields, 'Subscribers')
    .then(() => {
      res.status(201).json({ success: true })
    })
    .catch(() => {
      res.status(400).json({ success: false })
    })
})

module.exports = router 