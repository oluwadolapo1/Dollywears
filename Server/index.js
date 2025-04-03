const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5300
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

let allCountries = [
  {
    name: 'Nigeria',
    capital: 'Abuja',
    population: 200000000,
  },
  {
    name: 'United States',
    capital: 'Washington, D.C.',
    population: 331000000,
  },
]
app.get('/test', (req, res) => {
  res.send(allCountries)
})

app.listen(port, () =>console.log(`Server started at port ${port}`))