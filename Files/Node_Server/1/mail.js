const nodemailer = require('nodemailer');


const connectMailer = async (req,res) => {

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
        text: 'This is an email using nodemail in interview-catalist',
    }


    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, resMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, resMesg: 'Email Sent Successfully'})
        }
     
      });
}



module.exports = {
    connectMailer:connectMailer,
};
