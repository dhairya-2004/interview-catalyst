const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const Mail = require('nodemailer/lib/mailer');
const User = require('../../models/login.model');

async function getForgotPassword(req, res) {
    const { mail } = req.body;
    try {
        const user = await User.findOne({ email: mail });

        if (!user) {
            return res.status(404).json({ status: true, resMesg: 'User Not Found' });
        }

        const token = jwt.sign({ userId: user._id }, "qwertyuioplkjhgfddsazxcvbnmlkjhgfdaqwertyuuioplkjhg", { expiresIn: '1h' });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'asmanijash61@gmail.com',
                pass: 'jgpj ntrp rgop llmb'
            }
        });

        const mailOptions = {
            from: 'asmanijash61@gmail.com',
            to: mail,
            subject: 'Welcome to NodeJS App',
            html: `
                <div style="padding:10px;border-style: ridge">
                    <p>You have a new request.</p>
                    <h3>Cofirm Password</h3>
                    <ul>
                    <li>Confirm Password: <a href="http://192.168.0.111:3000/confirm/${user._id}/${token}">Click here</a></li>
                    </ul>
                    </div>
                    `
        };
        // <li>Confirm Password: <a href="http://localhost:3000/confirm/${user._id}/${token}">Click here</a></li>

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.json({ status: true, resMesg: 'Email Not Sent Successfully' });
            } else {
                res.json({ status: false, resMesg: 'Email Sent Successfully' });
            }
        });
    } catch (err) {
        res.status(500).json({ status: true, resMesg: 'Internal Server Error' });
    }

}
module.exports = getForgotPassword;
