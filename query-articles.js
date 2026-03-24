const fetch = require('node-fetch');

const query = `*[_type == "article"] | order(_createdAt desc) {_id, title, _type}`;
const encoded = encodeURIComponent(query);

fetch(`https://wl0eb4zu.api.sanity.io/v2021-06-07/data/query/production?query=${encoded}`, {
  headers: { 'Authorization': `Bearer ${process.env.SANITY_API_TOKEN}` }
})
.then(r => r.json())
.then(d => {
  console.log(JSON.stringify(d.result, null, 2));
  d.result.forEach((a, i) => console.log(`[${i}] ${a.title} (${a._id})`));
})
.catch(e => console.error(e.message));
