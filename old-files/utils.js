import { BLOCKS } from '@contentful/rich-text-types'

const renderOptions = () => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return `<img
          src="https://${node.data.target.fields.file.url}"
          height="${node.data.target.fields.file.details.image.height}"
          width="${node.data.target.fields.file.details.image.width}"
          alt="${node.data.target.fields.description}"
        />`
    },
  },
})

function dateConverter(date_str, variant = 1) {
  const months_short = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const months_full = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const date_arr = date_str.match(/(\d{4,4})-(\d{1,2})-(\d{1,2})/)

  let date_output_str = ''

  switch (variant) {
    case 1: {
      const month =
        date_arr[2][0] === '0'
          ? parseInt(date_arr[2].substring(1)) - 1
          : parseInt(date_arr[2]) - 1
      const year =
        date_arr[1].length === 4 ? date_arr[1].substring(2) : date_arr[1]
      date_output_str = date_arr[3] + ' ' + months_short[month] + ' ' + year
      break
    }

    case 2: {
      const month =
        date_arr[2][0] === '0'
          ? parseInt(date_arr[2].substring(1)) - 1
          : parseInt(date_arr[2]) - 1
      const year = date_arr[1]
      date_output_str = months_full[month] + ' ' + date_arr[3] + ', ' + year
      break
    }
  }

  return date_output_str
}

const formatDate = (separator = '.', currentDate) => {
  const date_str = currentDate || new Date()
  const get_month = parseInt(date_str.getMonth())
  const year = parseInt(date_str.getFullYear())
  let month = get_month + 1
    month = month < 10 ? '0' + month : month
  const date =
    date_str.getDate() < 10 ? '0' + date_str.getDate() : date_str.getDate()

  return month + separator + date + separator + year
}

export { dateConverter, renderOptions, formatDate }
