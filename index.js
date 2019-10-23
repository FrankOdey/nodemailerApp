const nodemailer = require('nodemailer')

const transport = { 
    service : " Gmail",
    auth:{
        user: "Your email",
        pass: "Your Pass"
    }

}
const smtpTransport = nodemailer.createTransport(transport)

const options = {
    from: "Frank Odey <Your@email.com>",
    to: "Receiver Email.com",
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