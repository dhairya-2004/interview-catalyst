const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./Database/DbConnection')
const User = require('./Database/Login_Schema');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




// Middleware for parsing JSON
app.use(express.json());


// enable cors
app.use(cors())



// Registration
app.post('/register', async (req, res) => {
    try {
        const { username,email, password  } = req.body;

        console.log(req.body);
       

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        

        const user = new User({  username, email, password: hashedPassword });

        await user.save();

        res.status(201).json({ message: 'Registration successful' });
    }
    catch (e) {
        res.status(500).json({ message: 'Internal Server Error' });
        console.error('Registration Error:', e);
    }
})


// Login
// app.use(loginRouter);
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid Username or Password' });

        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ message: 'Invalid Username or Password' });

        }


        res.status(200).json({ message: 'Login successful' });
    }
    catch (e) {
        res.status(500).json({ message: 'login Error' });
    }
})


// confirm
app.post('/confirm/:_id/:token', async (req, res) => {
    const { _id, token } = req.params;
    const { password, confirm_password } = req.body;

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const hashedConfirmPassword = await bcrypt.hash(confirm_password, saltRounds);

        jwt.verify(token, "jwt_secret_key", async (err, decoded) => {
            if (err) {
                return res.json({ Status: "Error with token" });
            }

            try {
                
                const user = await User.findById(_id);
                if (!user) {
                    return res.json({ Status: "User not found" });
                }

                
                user.password = hashedPassword;
                user.confirm_password = hashedConfirmPassword;

                
                await user.save();

                res.json({ Status: "Success" });
            } catch (error) {
                res.status(500).send({ Status: error.toString() });
            }
        });
    } catch (err) {
        res.status(500).send({ Status: err.toString() });
    }
});

connectDB();

// ------------------------------------------------

app.post('/mail', (req, res) => {


    const { email } = req.body;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.send({ Status: "User not existed" })
            }

            const token = jwt.sign({ id: user._id }, "jwt_secret_key", { expiresIn: "1d" })

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'asmanijash61@gmail.com',
                    pass: 'jgpj ntrp rgop llmb'
                }
            })



            const mailOptions = {
                from: 'asmanijash61@gmail.com',
                to: req.body.email,
                subject: 'Welcome to NodeJS App',
                text: `http://localhost:3000/confirm/${user._id}/${token}`
            }


            transporter.sendMail(mailOptions, function (error, info) {
                if (!error) {
                    res.json({ status: false, message: 'Email Sent  Successfully' })
                }
                else {
                    res.json({ status: true, message: 'Email Sent Not Successfully' })
                }

            });
        })

})

app.listen(port, () => {
    console.log('server is running');
})