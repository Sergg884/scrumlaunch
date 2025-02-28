const express = require('express')

const send_vc = require('./routes/send-cv')
const join_us = require('./routes/join-us')
const contact_us = require('./routes/contact-us')
const company_contact = require('./routes/company-contact')
const askAi = require('./routes/ask-ai')
const send_requirements = require('./routes/send-requirements')
const send_information = require('./routes/send-information')
const newsletter = require('./routes/newsletter')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(send_vc)
app.use(join_us)
app.use(contact_us)
app.use(company_contact)
app.use(send_requirements)
app.use(askAi)
app.use(send_information)
app.use(newsletter)

module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
