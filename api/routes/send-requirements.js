const { Router } = require('express')
const router = Router()

const {createAirTableRow} = require('../utils')

router.post('/send-requirements', async (req, res) => {
  const fields = {
    Name: req.body.name,
    Email: req.body.email,
    PDF: req.body.pdf,
  }

  createAirTableRow(fields, 'BuildTeam')
    .then(() => {
      res.status(201).json({ success: true })
    })
    .catch(() => {
      res.status(400).json({ success: false })
    })
})

module.exports = router
