const nodemailer = require("nodemailer");

// Create a transport object using the SMTP configuration for your email server
const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true, // use SSL
  auth: {
    user: "career@buildmydapp.co",
    pass: "!!",
  },
});

const message = {
  from: "career@buildmydapp.co",
  to: "mudassir00seven@gmail.com",
  subject: "Hello!",
  text: "This is a test email.",
  html: "<p>This is a test email.</p>",
};

transporter.sendMail(message, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
