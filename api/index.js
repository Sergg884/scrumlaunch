const express = require('express')

const send_vc = require('./routes/send-cv')
const contact_us = require('./routes/contact-us')
const company_contact = require('./routes/company-contact')
const askAi = require('./routes/ask-ai')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(send_vc)
app.use(contact_us)
app.use(company_contact)
app.use(askAi)

module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
