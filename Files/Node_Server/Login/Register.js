// register.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../Database/Login_Schema'); 

const router = express.Router();

router.post('/register', async (req, resp) => {
    
        try {
            const { email, password, confirm_password } = req.body;
    
            console.log(req.body);
            if (password !== confirm_password) {
                return resp.status(400).json({ message: 'Passwords do not match' });
            }
    
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const hashedConfirmPassword = await bcrypt.hash(confirm_password, saltRounds);
    
            const user = new User({ email, password: hashedPassword, confirm_password: hashedConfirmPassword });
    
            await user.save();
    
            resp.status(201).json({ message: 'Registration successful' });
        }
        catch (e) {
            resp.status(500).json({ message: 'Internal Server Error' });
            console.error('Registration Error:', e);
        }
    })
    
    

module.exports = router;
