const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { datetime } = require("./system-variables");
require("dotenv").config();

// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     host: "mail.softjovial.com",
//     secureConnection: false,
//     tls: {
//       rejectUnauthorized: false,
//     },
//     port: 587,
//     auth: {
//       user: "support@softjovial.com",
//       pass: process.env.mail_password,
//     },
//   }),
// );

let transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: false,

  auth: {
    user: process.env.company_mail,
    pass: process.env.mail_password,
  },
});

console.log(process.env.mail_password);
let create_mail_options = (userInfo) => {
  return (mailOptions = {
    from: process.env.mail,
    // from:"michelleannschlloser@outlook.com",
    to: userInfo.reciever,
    subject: `Account Registration Notification`,
    //   text:"just wanna know if this works",
    //     html: `<link rel="preconnect" href="https://fonts.googleapis.com" />
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    // <link
    //   href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Nunito+Sans:ital,wght@0,600;0,700;1,600&family=Nunito:ital,wght@0,200;0,300;1,200&family=Open+Sans&family=Poppins:wght@200&family=Roboto:wght@400;500&display=swap"
    //   rel="stylesheet"
    // />

    // <main>

    // <style>
    // @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&family=Nunito+Sans:ital,wght@0,600;0,700;1,600&family=Nunito:ital,wght@0,200;0,300;1,200&family=Open+Sans&family=Poppins:wght@200&family=Roboto:wght@400;500&display=swap');

    // .maincontainer{
    // font-family: 'Nanum Gothic Coding', monospace;
    // font-family: 'Nunito', sans-serif;
    // font-family: 'Nunito Sans', sans-serif;
    // font-family: 'Open Sans', sans-serif;
    // font-family: 'Poppins', sans-serif;
    // font-family: 'Roboto', sans-serif;
    //       width: 100%;
    //       top: 0;
    //       left: 0;
    //       right: 0;
    //       font-weight: 100;
    //       line-height: 2.5;
    //     }
    //     .cordial {
    //       font-size: 16px;

    //     }
    //     .head-txt {
    //       text-align: center;
    //       background-color: #142c8e;
    //       font-size: 20px;
    //       color: #fff;
    //     }
    //     .paragraph-01,
    //     .paragraph-02 {
    //       font-size: 15.5px;
    //       padding: 1px;
    //     }
    //     .paragraph-03 {
    //       font-weight: 400;
    //       font-size: 15.5px;
    //       padding: 1px;
    //       color: green;
    //     }
    //     .paragraph-04{
    //       font-size: 15.5px;
    //       padding: 1px;
    //     }
    //     .disclaimer{
    //         font-size: 12px;
    //         font-weight: 700;
    //         padding: 0px;
    //     }
    //     h1,h2,h4,h5,h6{
    //         font-size: 18px;
    //     }
    //   </style>

    //   <div class="head-txt">
    //     <h1 style="text-align: center; font-size: 16px; color:#26b6d4">
    //       SOFTJOVIAL
    //     </h1>
    //     <h3 style="font-size: 15px">NEW ACCOUNT NOTIFICATION</h3>
    //   </div>

    //   <p class="sm-p">
    //     Dear ${userInfo.first_name} ${userInfo.last_name}, Thank you so much for
    //     allowing us to help you with your account opening. We are committed to
    //     providing our customers with the highest level of service and the most
    //     innovative investment and trading that are possible. We are very glad you
    //     chose us. We hope you will take advantage of our wide variety of investment
    //     and trading which are designed to meet your needs
    //   </p>
    //   <p class="sm-p">
    //     You are ready to make deposit and  start creating trade and making profit,

    //   </p>
    //   <p class="sm-p">
    //     For more detailed informations, please contact our customer support or your
    //     relationship officer
    //   </p>

    //   <br />
    //   <h1
    //     style="
    //       font-size: 18px;
    //       text-align: center;
    //       background: #eee;
    //       color: #0c0e28;
    //     "
    //   >
    //     SOFTJOVIAL.COM
    //   </h1>
    //   <p class="disclaimer" style="font-size: 12px; font-weight: bolder">
    //     Disclaimer: this message was automatically generated via softjovial
    //     secured channel,please do not reply to this message all correspondence
    //     should be addressed to softjovial.com or your relationship officer
    //   </p>
    // </div>

    //  `,

    html: `
   
        <div class="mail_template"
            style="max-width: 600px; margin: auto; font-family: 'Poppins', sans-serif; background-color: #f2f2f2; padding: 20px; border-radius: 10px; border: 1px solid #ccc;">
            <div style="text-align: center;">
                <img src="https://momentumgloballtd.biz/css/images/logo.png"   alt="Company Logo" style="width: 80px; border-radius: 50%;">
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <h3 style="font-size: 24px; font-weight: bold; color: #333;">New Account Registration</h3>
            </div>
            <div style="margin-top: 30px;">
                <p style="font-size: 18px; color: #555;">Dear ${userInfo.first_name} ${userInfo.last_name},</p>
                <p style="font-size: 18px; color: #555;">Thank you for registering an account with us. We are committed to
                    providing you with the best trading service that are possible.</p>
            </div>

             <p style="font-size: 18px; color: #555;">You are ready to make deposit and  start creating trade and making profit</p>


            <div style="margin-top: 40px;">
                <p style="font-size: 14px; color: #999; text-align: center;"> Disclaimer: this message was automatically generated via momentumgloballtd
                secured channel,please do not reply to this message all correspondence
                should be addressed to momentumgloballtd.biz or your relationship officer</p>
            </div>
        </div>
        
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        </style>
 `,
  });
};
module.exports = { create_mail_options, transporter };
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err)
//     return res
//       .status(400)
//       .json({ error: true, errMessage: `an error occured: ${err.message}` });
//   // console.log(info)
//   return res.status(200).json({ error: false, message: "message sent" });
//   // console.log("message sent",info)
// });

// //   if (err)
// //     return { error: true, errMessage: `an error occured: ${err.message}` };
// //   // console.log(info)
// //   return { error: false, message: "message sent" };
// // });
// };
