import * as Contentful from 'contentful'

const client = Contentful.createClient({
  space: 'psyys3eoga8f',
  accessToken: 'bOobZ65YNxX9q52-lWtWpmOmQZgdsjAR5sWkhJopKfg',
})

function getCategories() {
  client.getEntries().then(function (entries) {
    // log the title for all the entries that have it
    console.log(entries, entries.items);
    entries.items.forEach(function (entry) {
      if (entry.fields.productName) {
        console.log(entry.fields.productName);
      }
    });
  });
}

export default getCategories;