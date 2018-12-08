const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Jamie likes boyz'))

app.listen(process.env.PORT || 4000, () => console.log(`Example app listening on port ${port}!`))
