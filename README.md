# NODEMAILER APP
<!--  -->
### Requirement:
- Nodejs 
- Nodemailer modules.

Download and Install Node  from nodejs.org
and then run npm install nodemailer on your terminal within the project directory.

## How to Use this App.
<!--  -->
### Step One:
 - Change:

        - user: "Your Email Here",
        - pass: "Your Password Here"
    

-  Change:


        from: "Your aliase Here  <Your Email Here>",
        to: "Email Address Sending Mail To",
         subject: "Subject",
        html: "HTML Content/Email Formatted Content",
        attachment: [
         {
            filename: "Your Image or attachment filename",
            path: "attachment path"
        ]
            }

After changing all of the above in the index.js file. RUN THE APP.

## TO RUN APP
 - Open your terminal on the project directory and run ' node index.js '