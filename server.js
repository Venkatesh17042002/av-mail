const express = require('express');
const nodemailer = require('nodemailer');
const morgan = require("morgan")
require("dotenv").config()
const app = express();
const port = 8000;

app.use(express.json());
app.use(morgan('dev'));

app.post('/send-email', async (req, res) => {
  const {content}= req.body;

    if (!content) {
        res.json("Enter valid content")
    }
    else {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'aanandhaveedu@gmail.com',
                pass: process.env.GMAIL_PASS
            }
        });
    
        try {
            if(content?.action=="add"){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com"],
                    subject: content.subject,
                    html: ``
                });
                res.status(200).send('Email sent successfully');
            }
            
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while sending the email');
        }
    }
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
