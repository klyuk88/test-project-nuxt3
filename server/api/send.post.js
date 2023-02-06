import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {

    const transporter = nodemailer.createTransport({
        port: 465, // true for 465, false for other ports
        host: 'smtp.yandex.ru',
        auth: {
            user: 'klyukovskiy',
            pass: '',
        },
        secure: true,
    });

    const mailData = {
        from: 'klyukovskiy@yandex.ru',
        to: 'klyukovskiy@yandex.ru',
        subject: 'Бриф с сайта launch',
        text: `Hello`,
    };

    const info = await transporter.sendMail(mailData);
});