const nodemailer = require('nodemailer');
const config = require('../config');

exports.sendmessage = function(req, res){
    const { name, message, email, phone} = req.body;
    if(name && email && message){
        //FOR CUSTOMER
    nodemailer.createTestAccount((err, account) => {
        const userhtml = `
            <p>Hello, ${name}</p>
            <p>We have recieved your message. Our CEO shall reach out to you shortly.</p>
            <p>Thank you for contacting us,</p>
            <p>Scalable Solutions LLC</p>
        `

        const trasporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port: 587,
            auth:{
                user: config.GMAIL,
                pass: config.GMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: 'scalablesolutionsceo@gmail.com',
            to: email,
            replyTo:'scalablesolutionsceo@gmail.com',
            subject: 'Message Received',
            text: 'Thank you',
            html: userhtml
        }

        trasporter.sendMail(mailOptions, err => {
            if(err){
                return console.log(err);
            }else{
                console.log("user notified");
            }
        });
    });
    //FOR ME
    nodemailer.createTestAccount((err, account) => {
        const userhtml = `
        <p>New message from ${name}</p>
        <p>From: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: <br /> ${message}</p>
    `

    const trasporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 587,
        auth:{
            user: config.GMAIL,
            pass: config.GMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: email ,
        to: 'scalablesolutionsceo@gmail.com',
        replyTo:'scalablesolutionsceo@gmail.com',
        subject: 'New Contact',
        text: 'Thank you',
        html: userhtml
    }
    trasporter.sendMail(mailOptions, err => {
            if(err){
                return console.log(err);
            }else{
                console.log("user notified");
            }
        });
    })
    }
    return res.status(200);
}