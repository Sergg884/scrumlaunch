const { Router } = require('express')
const router = Router()

const {createAirTableRow} = require('../utils')

router.post('/company-contact', async (req, res) => {
  const  fields ={
    Name: req.body.name,
    Email: req.body.email,
    Company: req.body.company,
    Details: req.body.details,
    Size: req.body.size,
    Budget: req.body.budget,
  }

  createAirTableRow(fields, 'Companies')
    .then(() => {
      res.status(201).json({ success: true })
    })
    .catch(() => {
      res.status(400).json({ success: false })
    })
})

module.exports = router
