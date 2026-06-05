const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const app = express()

app.use(cors())
app.use(express.json())

const pool = new Pool({
    user: 'postgres',
    password: 'Im_Jem23*',
    host: 'localhost',
    database: 'jwt_oauth_db',
    port: 5432
})

// create users
app.post('/createUsers', async (req, res) => {

    try {
        const { email, password} = req.body
        const hashedPw = await bcrypt.hash(password, 10)

        const result = await pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [
            email, hashedPw
        ])
        res.json(result.rows[0])

    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
})

const PORT = 3009;
app.listen(PORT, () => {
    console.log(`Jem! Your server is running on Port ${PORT}`)
})