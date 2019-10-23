const nodemailer = require('nodemailer')

const transport = { 
    service : " Gmail",
    auth:{
        user: "frankodey2@gmail.com",
        pass: "francis90@@"
    }

}
const smtpTransport = nodemailer.createTransport(transport)

const options = {
    from: "Frank Odey <frankodey2@gmail.com>",
    to: "frankodey2@gmail.com",
    subject: "Hello",
    html: "<h1>world</h1>",
    attachment: [
        {
            filename: "image",
            path: "image.png"
        }
    ]
};

smtpTransport.sendMail(options,(err, info) => {
    err ? console.log(err) : console.log(info);
    
});