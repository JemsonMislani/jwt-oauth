const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3009;
app.listen(PORT, () => {
    console.log(`Jem! Your server is running on Port ${PORT}`)
})