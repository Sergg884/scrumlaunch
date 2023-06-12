const Airtable = require('airtable')
const {formatDate} = require('../utils')

const base = new Airtable({ apiKey: 'keyaqXAOg3U3od8Jw' }).base(
  'appWxByzB6c8rBuQ9'
)

function cleanString(text) {
  const replacedNewlines = text.replace(/\n+/g, '');
  const removedExtraSpaces = replacedNewlines.replace(/\s{2,}/g, ' ');
  const replacedQuotes = removedExtraSpaces.replace(/'/g, '"');
  return replacedQuotes;
}

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export const createAirTableRow = (fields, tableName) => {
  return new Promise((res, rej) => {
    base(tableName).create(
      [
        {
          fields: {
            ...fields,
            Date: formatDate(),
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

module.exports = {
  createAirTableRow,
  cleanString,
  delay
};