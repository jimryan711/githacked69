const express = require('express')
const app = express()

// app.get('/', (req, res) => res.send('Jamie likes gai boyz'))

app.use(express.static('public'))

app.listen(process.env.PORT || 4000, () => console.log(`Example app listening on port!`))
