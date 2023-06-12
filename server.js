const express = require('express');
const nodemailer = require('nodemailer');
const morgan = require("morgan")
require("dotenv").config()
const app = express();
const port = 8000;

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(morgan('dev'));



app.post('/sendEmail', async (req, res) => {
    console.log("req got");
  const content= req.body?.content;

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
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com","bharathprakash2395@hotmail.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
                            *{
                            font-family: 'Roboto', sans-serif;
                            }
                            .center{
                                display: flex;
                                justify-content: center;
                                font-weight: bold;
                            }
                            .column{
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                            }
                            a{
                                text-decoration: none;
                                color: rgb(103,58,183);
                            }
                            a:active{
                                color: rgb(103,58,183);
                            }
                            span{
                                margin-left: 5px;
                                color: rgb(255, 24, 24)
                            }
                            .content{
                                border-top: 2px solid rgb(45,92,255);
                                border-bottom: 2px solid rgb(45,92,255);
                                margin-bottom: 15px;
                            }
                            .tab{
                                padding-left: 30px;
                            }
                            h2{
                                margin: -5px 0px 15px 0px;
                                color: rgb(255, 24, 24)
                            }
                        </style>
                    </head>
                    <body>
                        <a target="_blank" class="header column" href="http://aanandhaveedu.netlify.app/">
                            <img src="https://aanandhaveedu.netlify.app/assets/av_logo.png" alt="av_logo" height="107px" width="100px">
                            <h1 >Aanandhaveedu</h1>
                            <h2 >${content.component} Notification</h2>
                        </a>
                        <div class="content">
                            <h3>Hello,</h3>
                            <p class="tab">${content.name}, Added ${content.item} in ${content.component}</p>
                            <p class="tab">New-Description: ${content.item}</p>
                            <p class="tab">New-Amount: ${content.amount}</p>
                            <p class="tab">Current Balance: ${content.balance}</p>
                            <p class="center" align="center">Thank you!</p>
                        </div>
                        <div class="center">Created By <span>Venkatesh</span> </div>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }else if(content?.action=="delete" && content?.component=="budget" ){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com","bharathprakash2395@hotmail.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
                            *{
                            font-family: 'Roboto', sans-serif;
                            }
                            .center{
                                display: flex;
                                justify-content: center;
                                font-weight: bold;
                            }
                            .column{
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                            }
                            a{
                                text-decoration: none;
                                color: rgb(103,58,183);
                            }
                            a:active{
                                color: rgb(103,58,183);
                            }
                            span{
                                margin-left: 5px;
                                color: rgb(255, 24, 24)
                            }
                            .content{
                                border-top: 2px solid rgb(45,92,255);
                                border-bottom: 2px solid rgb(45,92,255);
                                margin-bottom: 15px;
                            }
                            .tab{
                                padding-left: 30px;
                            }
                            h2{
                                margin: -5px 0px 15px 0px;
                                color: rgb(255, 24, 24)
                            }
                        </style>
                    </head>
                    <body>
                        <a target="_blank" class="header column" href="http://aanandhaveedu.netlify.app/">
                            <img src="https://aanandhaveedu.netlify.app/assets/av_logo.png" alt="av_logo" height="107px" width="100px">
                            <h1 >Aanandhaveedu</h1>
                            <h2 >${content.component} Notification</h2>
                        </a>
                        <div class="content">
                            <h3>Hello,</h3>
                            <p class="tab">${content.name}, Deleted ${content.item} in ${content.component}</p>
                            <p class="tab">Amount: ${content.amount}</p>
                            <p class="tab">Current Balance: ${content.balance}</p>
                            <p class="center">Thank you!</p>
                        </div>
                        <div class="center">Created By <span>Venkatesh</span> </div>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }else if(content?.action=="edit" && content?.component=="budget"){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com","bharathprakash2395@hotmail.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
                            *{
                            font-family: 'Roboto', sans-serif;
                            }
                            .center{
                                display: flex;
                                justify-content: center;
                                font-weight: bold;
                            }
                            .column{
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                            }
                            a{
                                text-decoration: none;
                                color: rgb(103,58,183);
                            }
                            a:active{
                                color: rgb(103,58,183);
                            }
                            span{
                                margin-left: 5px;
                                color: rgb(255, 24, 24)
                            }
                            .content{
                                border-top: 2px solid rgb(45,92,255);
                                border-bottom: 2px solid rgb(45,92,255);
                                margin-bottom: 15px;
                            }
                            .tab{
                                padding-left: 30px;
                            }
                            h2{
                                margin: -5px 0px 15px 0px;
                                color: rgb(255, 24, 24)
                            }
                        </style>
                    </head>
                    <body>
                        <a target="_blank" class="header column" href="http://aanandhaveedu.netlify.app/">
                            <img src="https://aanandhaveedu.netlify.app/assets/av_logo.png" alt="av_logo" height="107px" width="100px">
                            <h1 >Aanandhaveedu</h1>
                            <h2 >${content.component} Notification</h2>
                        </a>
                        <div class="content">
                            <h3>Hello,</h3>
                            <p class="tab">${content.name}, Edited ${content.item} in ${content.component}</p>
                            <p class="tab">Current Balance: ${content.balance}</p>
                            <p class="center">Thank you!</p>
                        </div>
                        <div class="center">Created By <span>Venkatesh</span> </div>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }
            else if(content?.action=="add" && (content?.component=="tobuy" || content?.component=="stock")){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com","bharathprakash2395@hotmail.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
                            *{
                            font-family: 'Roboto', sans-serif;
                            }
                            .center{
                                display: flex !important;
                                justify-content: center !important;
                                font-weight: bold !important;
                            }
                            .column{
                                display: flex !important;
                                flex-direction: column !important;
                                align-items: center !important;
                            }
                            a{
                                text-decoration: none;
                                color: rgb(103,58,183);
                            }
                            a:active{
                                color: rgb(103,58,183);
                            }
                            span{
                                margin-left: 5px;
                                color: rgb(255, 24, 24)
                            }
                            .content{
                                border-top: 2px solid rgb(45,92,255);
                                border-bottom: 2px solid rgb(45,92,255);
                                margin-bottom: 15px;
                            }
                            .tab{
                                padding-left: 30px;
                            }
                            h2{
                                margin: -5px 0px 15px 0px;
                                color: rgb(255, 24, 24)
                            }
                        </style>
                    </head>
                    <body>
                        <a target="_blank" class="header column" href="http://aanandhaveedu.netlify.app/">
                            <img src="https://aanandhaveedu.netlify.app/assets/av_logo.png" alt="av_logo" height="107px" width="100px">
                            <h1 >Aanandhaveedu</h1>
                            <h2 >${content.component} Notification</h2>
                        </a>
                        <div class="content">
                            <h3>Hello,</h3>
                            <p class="tab">${content.name}, Added ${content.item} in ${content.component}</p>
                            <p class="center">Thank you!</p>
                        </div>
                        <div class="center">Created By <span>Venkatesh</span> </div>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }else if(content?.action=="delete" && (content?.component=="tobuy" || content?.component=="stock") ){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com","bharathprakash2395@hotmail.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
                            *{
                            font-family: 'Roboto', sans-serif;
                            }
                            .center{
                                display: flex;
                                justify-content: center;
                                font-weight: bold;
                            }
                            .column{
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                            }
                            a{
                                text-decoration: none;
                                color: rgb(103,58,183);
                            }
                            a:active{
                                color: rgb(103,58,183);
                            }
                            span{
                                margin-left: 5px;
                                color: rgb(255, 24, 24)
                            }
                            .content{
                                border-top: 2px solid rgb(45,92,255);
                                border-bottom: 2px solid rgb(45,92,255);
                                margin-bottom: 15px;
                            }
                            .tab{
                                padding-left: 30px;
                            }
                            h2{
                                margin: -5px 0px 15px 0px;
                                color: rgb(255, 24, 24)
                            }
                        </style>
                    </head>
                    <body>
                        <a target="_blank" class="header column" href="http://aanandhaveedu.netlify.app/">
                            <img src="https://aanandhaveedu.netlify.app/assets/av_logo.png" alt="av_logo" height="107px" width="100px">
                            <h1 >Aanandhaveedu</h1>
                            <h2 >${content.component} Notification</h2>
                        </a>
                        <div class="content">
                            <h3>Hello,</h3>
                            <p class="tab">${content.name}, Deleted ${content.item} in ${content.component}</p>
                            <p class="center">Thank you!</p>
                        </div>
                        <div class="center">Created By <span>Venkatesh</span> </div>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }else if(content?.action=="edit" && (content?.component=="tobuy" || content?.component=="stock")){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com","bharathprakash2395@hotmail.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
                            *{
                            font-family: 'Roboto', sans-serif;
                            }
                            .center{
                                display: flex;
                                justify-content: center;
                                font-weight: bold;
                            }
                            .column{
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                            }
                            a{
                                text-decoration: none;
                                color: rgb(103,58,183);
                            }
                            a:active{
                                color: rgb(103,58,183);
                            }
                            span{
                                margin-left: 5px;
                                color: rgb(255, 24, 24)
                            }
                            .content{
                                border-top: 2px solid rgb(45,92,255);
                                border-bottom: 2px solid rgb(45,92,255);
                                margin-bottom: 15px;
                            }
                            .tab{
                                padding-left: 30px;
                            }
                            h2{
                                margin: -5px 0px 15px 0px;
                                color: rgb(255, 24, 24)
                            }
                        </style>
                    </head>
                    <body>
                        <a target="_blank" class="header column" href="http://aanandhaveedu.netlify.app/">
                            <img src="https://aanandhaveedu.netlify.app/assets/av_logo.png" alt="av_logo" height="107px" width="100px">
                            <h1 >Aanandhaveedu</h1>
                            <h2 >${content.component} Notification</h2>
                        </a>
                        <div class="content">
                            <h3>Hello,</h3>
                            <p class="tab">${content.name}, Edited ${content.item} in ${content.component}</p>
                            <p class="center">Thank you!</p>
                        </div>
                        <div class="center">Created By <span>Venkatesh</span> </div>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }
            else{
                console.log("no tesst case matched");
                res.status(200).send('no tesst case matched');
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
