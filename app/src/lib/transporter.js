import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Vous pouvez utiliser un autre service comme Yahoo, Outlook, etc.
  auth: {
    user: (process.env.NODEMAILER_MAIL),
    pass: (process.env.NODEMAILER_PASS),
  },
});

export default transporter;