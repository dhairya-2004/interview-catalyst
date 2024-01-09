// confirm.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Database/Login_Schema'); 

const router = express.Router();

router.post('/confirm/:_id/:token', async (req, resp) => {

    const { _id, token } = req.params;
    const { password, confirm_password } = req.body;

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const hashedConfirmPassword = await bcrypt.hash(confirm_password, saltRounds);

        jwt.verify(token, "jwt_secret_key", async (err, decoded) => {
            if (err) {
                return resp.json({ Status: "Error with token" });
            }

            try {

                const user = await User.findById(_id);
                if (!user) {
                    return resp.json({ Status: "User not found" });
                }


                user.password = hashedPassword;
                user.confirm_password = hashedConfirmPassword;


                await user.save();

                resp.json({ Status: "Success" });
            } catch (error) {
                resp.status(500).send({ Status: error.toString() });
            }
        });
    } catch (err) {
        resp.status(500).send({ Status: err.toString() });
    }

});

module.exports = router;
