const nodemailer = require("nodemailer");

const sendMailToUser = async (mailOptions, callback) => {
  try {
    mailOptions.from = `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`;
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465, // or 587 for TLS
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        callback({
          status: false,
          error: error,
        });
      } else {
        callback({
          status: true,
          info: info,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMailToUser;
