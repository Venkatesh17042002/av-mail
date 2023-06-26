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

  const social={Venkatesh:{whatsapp:"https://wa.me/+918807979776",skype:"https://join.skype.com/invite/rdeChZifJ0vQ",instagram:"https://ig.me/m/venki_1742",telegram:"https://t.me/venkat_vlt"},
                Bharath:{whatsapp:"https://wa.me/+919788774929",skype:"https://join.skype.com/invite/pXepmcF9sVei",instagram:"https://ig.me/m/bharath.01",telegram:"https://t.me/Bharath_prakash"},
                Ajay:{whatsapp:"https://wa.me/+919345682746",skype:"https://join.skype.com/invite/yHSsvrHscn3l",instagram:"https://ig.me/m/ajay_._407",telegram:"https://t.me/+919345682746"},
                Abishek:{whatsapp:"https://wa.me/+916379666100",skype:"https://join.skype.com/invite/xmJ7QCqx0qJl",instagram:"https://ig.me/m/craz_raja",telegram:"https://t.me/+916379666100"}}

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
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com","heciga2173@anwarb.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
                            *{
                            font-family: 'Roboto', sans-serif;
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
                        <a target="_blank" href="http://aanandhaveedu.netlify.app/">
                        <div style="text-align: center">
                        <img  src="https://aanandhaveedu.netlify.app/assets/av_logo.png" alt="av_logo" height="107px" width="100px">
                        </div>
                        <h1 style="text-align: center">Aanandhaveedu</h1>
                            <h2 style="text-align: center">${content.component} Notification</h2>
                        </a>
                        <div class="content">
                            <h3>Hello,</h3>
                            <p class="tab">${content.name}, Added ${content.item} in ${content.component}</p>
                            <p class="tab">Amount: ${content.amount}</p>
                            <p class="tab">Current Balance: ${content.balance}</p>
                            <br>
                            <br>
                            <div style="text-align: center">
                                <p> Send message to <strong>${content.name}</strong></p>
                                <a target="_blank" href="${social[content.name].whatsapp}" > <img style="padding: 10px;" src="https://aanandhaveedu.netlify.app/assets/whatsapp_logo.png" alt="whatsapp_logo" height="31px" width="31px"></a>
                                <a target="_blank" href="${social[content.name].skype}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/skype_logo.png" alt="skype_logo" height="27px" width="27px"></a>
                                <a target="_blank" href="${social[content.name].instagram}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/instagram_logo.png" alt="instagram_logo" height="31px" width="31px"></a>
                                <a target="_blank" href="${social[content.name].telegram}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/telegram_logo.png" alt="telegram_logo" height="28px" width="28px"></a>
                            </div>
                            <br>
                            <h3 style="text-align: center">Thank you!</h3>
                        </div>
                        <h3 style="text-align: center">Created By <a target="_blank" href="https://instagram.com/venki_1742?igshid=NGExMmI2YTkyZg==" ><span>Venkatesh</span></a> </h3>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }else if(content?.action=="delete" && content?.component=="budget" ){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com","heciga2173@anwarb.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
                            *{
                            font-family: 'Roboto', sans-serif;
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
                        <a target="_blank"  href="http://aanandhaveedu.netlify.app/">
                        <div style="text-align: center">
                        <img  src="https://aanandhaveedu.netlify.app/assets/av_logo.png" alt="av_logo" height="107px" width="100px">
                        </div>
                        <h1 style="text-align: center">Aanandhaveedu</h1>
                            <h2 style="text-align: center">${content.component} Notification</h2>
                        </a>
                        <div class="content">
                            <h3>Hello,</h3>
                            <p class="tab">${content.name}, Deleted ${content.item} in ${content.component}</p>
                            <p class="tab">Current Balance: ${content.balance}</p>
                            <br>
                            <br>
                            <div style="text-align: center">
                                <p> Send message to <strong>${content.name}</strong></p>
                                <a target="_blank" href="${social[content.name].whatsapp}" > <img style="padding: 10px;" src="https://aanandhaveedu.netlify.app/assets/whatsapp_logo.png" alt="whatsapp_logo" height="31px" width="31px"></a>
                                <a target="_blank" href="${social[content.name].skype}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/skype_logo.png" alt="skype_logo" height="27px" width="27px"></a>
                                <a target="_blank" href="${social[content.name].instagram}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/instagram_logo.png" alt="instagram_logo" height="31px" width="31px"></a>
                                <a target="_blank" href="${social[content.name].telegram}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/telegram_logo.png" alt="telegram_logo" height="28px" width="28px"></a>
                            </div>
                            <br>
                            <h3 style="text-align: center">Thank you!</h3>
                        </div>
                        <h3 style="text-align: center">Created By <a target="_blank" href="https://ig.me/m/venki_1742" ><span>Venkatesh</span></a> </h3>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }else if(content?.action=="edit" && content?.component=="budget"){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com","heciga2173@anwarb.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
                            *{
                            font-family: 'Roboto', sans-serif;
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
                        <a target="_blank"  href="http://aanandhaveedu.netlify.app/">
                        <div style="text-align: center">
                            <img  src="https://aanandhaveedu.netlify.app/assets/av_logo.png" alt="av_logo" height="107px" width="100px">
                        </div>    
                        <h1 style="text-align: center">Aanandhaveedu</h1>
                            <h2 style="text-align: center">${content.component} Notification</h2>
                        </a>
                        <div class="content">
                            <h3>Hello,</h3>
                            <p class="tab">${content.name}, Edited ${content.item} in ${content.component}</p>
                            <p class="tab">New-Amount: ${content.amount}</p>
                            <p class="tab">Current Balance: ${content.balance}</p>
                            <br>
                            <br>
                            <div style="text-align: center">
                                <p> Send message to <strong>${content.name}</strong></p>
                                <a target="_blank" href="${social[content.name].whatsapp}" > <img style="padding: 10px;" src="https://aanandhaveedu.netlify.app/assets/whatsapp_logo.png" alt="whatsapp_logo" height="31px" width="31px"></a>
                                <a target="_blank" href="${social[content.name].skype}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/skype_logo.png" alt="skype_logo" height="27px" width="27px"></a>
                                <a target="_blank" href="${social[content.name].instagram}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/instagram_logo.png" alt="instagram_logo" height="31px" width="31px"></a>
                                <a target="_blank" href="${social[content.name].telegram}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/telegram_logo.png" alt="telegram_logo" height="28px" width="28px"></a>
                            </div>
                            <br>
                            <h3 style="text-align: center">Thank you!</h3>
                        </div>
                        <h3 style="text-align: center">Created By <a target="_blank" href="https://ig.me/m/venki_1742" ><span>Venkatesh</span></a> </h3>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }
            else if(content?.action=="add" && (content?.component=="tobuy" || content?.component=="stock")){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com","heciga2173@anwarb.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
                            *{
                            font-family: 'Roboto', sans-serif;
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
                        <div style="text-align: center">
                        <img  src="https://aanandhaveedu.netlify.app/assets/av_logo.png" alt="av_logo" height="107px" width="100px">
                        </div>
                        <h1 style="text-align: center">Aanandhaveedu</h1>
                            <h2 style="text-align: center">${content.component} Notification</h2>
                        </a>
                        <div class="content">
                            <h3>Hello,</h3>
                            <p class="tab">${content.name}, Added ${content.item} in ${content.component}</p>
                            <br>
                            <br>
                            <div style="text-align: center">
                                <p> Send message to <strong>${content.name}</strong></p>
                                <a target="_blank" href="${social[content.name].whatsapp}" > <img style="padding: 10px;" src="https://aanandhaveedu.netlify.app/assets/whatsapp_logo.png" alt="whatsapp_logo" height="31px" width="31px"></a>
                                <a target="_blank" href="${social[content.name].skype}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/skype_logo.png" alt="skype_logo" height="27px" width="27px"></a>
                                <a target="_blank" href="${social[content.name].instagram}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/instagram_logo.png" alt="instagram_logo" height="31px" width="31px"></a>
                                <a target="_blank" href="${social[content.name].telegram}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/telegram_logo.png" alt="telegram_logo" height="28px" width="28px"></a>
                            </div>
                            <br>
                            <h3 style="text-align: center">Thank you!</h3>
                        </div>
                        <h3 style="text-align: center">Created By <a target="_blank" href="https://ig.me/m/venki_1742" ><span>Venkatesh</span></a> </h3>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }else if(content?.action=="delete" && (content?.component=="tobuy" || content?.component=="stock") ){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com","heciga2173@anwarb.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
                            *{
                            font-family: 'Roboto', sans-serif;
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
                        <a target="_blank" href="http://aanandhaveedu.netlify.app/">
                        <div style="text-align: center">
                        <img  src="https://aanandhaveedu.netlify.app/assets/av_logo.png" alt="av_logo" height="107px" width="100px">
                        </div>  
                            <h1 style="text-align: center">Aanandhaveedu</h1>
                            <h2 style="text-align: center">${content.component} Notification</h2>
                        </a>
                        <div class="content">
                            <h3>Hello,</h3>
                            <p class="tab">${content.name}, Deleted ${content.item} in ${content.component}</p>
                            <br>
                            <br>
                            <div style="text-align: center">
                                <p> Send message to <strong>${content.name}</strong></p>
                                <a target="_blank" href="${social[content.name].whatsapp}" > <img style="padding: 10px;" src="https://aanandhaveedu.netlify.app/assets/whatsapp_logo.png" alt="whatsapp_logo" height="31px" width="31px"></a>
                                <a target="_blank" href="${social[content.name].skype}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/skype_logo.png" alt="skype_logo" height="27px" width="27px"></a>
                                <a target="_blank" href="${social[content.name].instagram}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/instagram_logo.png" alt="instagram_logo" height="31px" width="31px"></a>
                                <a target="_blank" href="${social[content.name].telegram}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/telegram_logo.png" alt="telegram_logo" height="28px" width="28px"></a>
                            </div>
                            <br>
                            <h3 style="text-align: center">Thank you!</h3>
                        </div>
                        <h3 style="text-align: center">Created By <a target="_blank" href="https://ig.me/m/venki_1742" ><span>Venkatesh</span></a> </h3>
                    </body>
                    </html>`
                });
                res.status(200).send('Email sent successfully');
            }else if(content?.action=="edit" && (content?.component=="tobuy" || content?.component=="stock")){
                await transporter.sendMail({
                    from: "aanandhaveedu@gmail.com",
                    to: ["sankaris110p@gmail.com","ajay40@mailinator.com","venkatesh17042002@gmail.com","heciga2173@anwarb.com"],
                    subject: content.subject,
                    html: `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
                            *{
                            font-family: 'Roboto', sans-serif;
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
                        <a target="_blank"  href="http://aanandhaveedu.netlify.app/">
                        <div style="text-align: center">
                        <img  src="https://aanandhaveedu.netlify.app/assets/av_logo.png" alt="av_logo" height="107px" width="100px">
                        </div>
                        <h1 style="text-align: center">Aanandhaveedu</h1>
                            <h2 style="text-align: center">${content.component} Notification</h2>
                        </a>
                        <div class="content">
                            <h3>Hello,</h3>
                            <p class="tab">${content.name}, Edited ${content.item} in ${content.component}</p>
                            <br>
                            <br>
                            <div style="text-align: center">
                                <p> Send message to <strong>${content.name}</strong></p>
                                <a target="_blank" href="${social[content.name].whatsapp}" > <img style="padding: 10px;" src="https://aanandhaveedu.netlify.app/assets/whatsapp_logo.png" alt="whatsapp_logo" height="31px" width="31px"></a>
                                <a target="_blank" href="${social[content.name].skype}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/skype_logo.png" alt="skype_logo" height="27px" width="27px"></a>
                                <a target="_blank" href="${social[content.name].instagram}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/instagram_logo.png" alt="instagram_logo" height="31px" width="31px"></a>
                                <a target="_blank" href="${social[content.name].telegram}" > <img style="padding: 10px;" target="_blank" href="http://aanandhaveedu.netlify.app/" src="https://aanandhaveedu.netlify.app/assets/telegram_logo.png" alt="telegram_logo" height="28px" width="28px"></a>
                            </div>
                            <br>
                            <h3 style="text-align: center">Thank you!</h3>
                        </div>
                        <h3 style="text-align: center">Created By <a target="_blank" href="https://ig.me/m/venki_1742" ><span>Venkatesh</span></a> </h3>
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
