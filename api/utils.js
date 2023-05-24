const Airtable = require('airtable')

const base = new Airtable({ apiKey: 'keyaqXAOg3U3od8Jw' }).base(
  'appWxByzB6c8rBuQ9'
)

export const createAirTableRow = (fields, tableName) => {

  const date_str = new Date()
  const get_month = parseInt(date_str.getMonth())
  const year = parseInt(date_str.getFullYear())
  let month = get_month + 1
    month = month < 10 ? '0' + month : month
  const date =
    date_str.getDate() < 10 ? '0' + date_str.getDate() : date_str.getDate()

  return new Promise((res, rej) => {
    base(tableName).create(
      [
        {
          fields: {
            ...fields,
            Date: month + '.' + date + '.' + year,
          }
        },
      ],
      function (err) {
        if (err) {
          console.error(err)
          rej()
        }

        res()
      }
    )
  })
}