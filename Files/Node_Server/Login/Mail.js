const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const User = require('../Database/Login_Schema'); 
const router= express.Router();

router.post('/mail', (req, resp) => {


    const { email } = req.body;

    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return resp.send({ Status: "User not existed" })
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
                    resp.json({ status: false, message: 'Email Sent  Successfully' })
                }
                else {
                    resp.json({ status: true, message: 'Email Sent Not Successfully' })
                }

            });
        })



});

module.exports = router;
