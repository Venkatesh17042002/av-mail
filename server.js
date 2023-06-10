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
            if(content?.action=="add" && content?.component=="budget"){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            .thankyou{
                                text-align: center;
                            }
                        </style>
                    </head>
                    <body>
                        <p>Hello, ${content.name} Added ${content.item} in ${content.component}</p>
                        <p>Amount: ${content.amount}</p>
                        <p>current Balance: ${content.balance}</p>
                        <p class="thankyou">Thank you!</p>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }else if(content?.action=="delete" && content?.component=="budget" ){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            .thankyou{
                                text-align: center;
                            }
                        </style>
                    </head>
                    <body>
                        <p>Hello, ${content.name} Deleted ${content.item} in ${content.component}</p>
                        <p>current Balance: ${content.balance}</p>
                        <p class="thankyou">Thank you!</p>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }else if(content?.action=="edit" && content?.component=="budget"){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            .thankyou{
                                text-align: center;
                            }
                        </style>
                    </head>
                    <body>
                        <p>Hello, ${content.name} Edited ${content.item} in ${content.component}</p>
                        <p>current Balance: ${content.balance}</p>
                        <p class="thankyou">Thank you!</p>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }
            else if(content?.action=="add" && (content?.component=="tobuy" || content?.component=="stock")){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            .thankyou{
                                text-align: center;
                            }
                        </style>
                    </head>
                    <body>
                        <p>Hello, ${content.name} Added ${content.item} in ${content.component}</p>
                        <p class="thankyou">Thank you!</p>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }else if(content?.action=="delete" && (content?.component=="tobuy" || content?.component=="stock") ){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            .thankyou{
                                text-align: center;
                            }
                        </style>
                    </head>
                    <body>
                        <p>Hello, ${content.name} Deleted ${content.item} in ${content.component}</p>
                        <p class="thankyou">Thank you!</p>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }else if(content?.action=="edit" && (content?.component=="tobuy" || content?.component=="stock")){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            .thankyou{
                                text-align: center;
                            }
                        </style>
                    </head>
                    <body>
                        <p>Hello, ${content.name} Edited ${content.item} in ${content.component}</p>
                        <p class="thankyou">Thank you!</p>
                    </body>
                    </html>`
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
