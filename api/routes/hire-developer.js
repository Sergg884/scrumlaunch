const { Router } = require('express')
const router = Router()

const {createAirTableRow} = require('../utils')

router.post('/hire-developer', async (req, res) => {
  const fields = {
    Name: req.body.name,
    Email: req.body.email,
    DeveloperName: req.body.nameHired,
  }

  createAirTableRow(fields, 'Hire developer form')
    .then(() => {
      res.status(201).json({ success: true })
    })
    .catch(() => {
      res.status(400).json({ success: false })
    })
})

module.exports = router
