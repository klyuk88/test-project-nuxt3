import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {

    const transporter = nodemailer.createTransport({
        port: 465, // true for 465, false for other ports
        host: '',
        auth: {
            user: '',
            pass: '',
        },
        secure: true,
    });

    const mailData = {
        from: '',
        to: '',
        subject: 'Hello world',
        text: `Hello`,
        attachments: []
    };

    
    const info = await transporter.sendMail(mailData);

    return info
});