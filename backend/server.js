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

// create login
app.post('/createLogin', async (req, res) => {

    try {
        const { email, password } = req.body;
        const result = await pool.query('SELECT * FROM users WHERE email=$1', [
            email
        ])

        if(result.rows.length === 0){
            return res.status(400).send({message: 'User not found'})
        }

        const user = result.rows[0]
        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(400).json({message: 'Invalid credentials.'})
        }

        const token = jwt.sign({id: user.id}, 'YOUR_JWT_SECRET', {expiresIn: '1h'})
        return res.json({
            token,
            user: {id: user.id, email: user.email}
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Server error')
    }
})

const PORT = 3009;
app.listen(PORT, () => {
    console.log(`Jem! Your server is running on Port ${PORT}`)
})