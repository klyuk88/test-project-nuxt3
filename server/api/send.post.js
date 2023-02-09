import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {

    const body = await readBody(event)

      let htmlBody = `<table style="width: 100%;">`;

    for (const key in body) {
        if (Object.hasOwnProperty.call(body, key) && key !== 'files') {
            htmlBody =
                htmlBody +
                `<tr style="background-color: #f8f8f8;">
              <td style="padding: 10px; border: #e9e9e9 1px solid;"><b>${key}</b></td>
              <td style="padding: 10px; border: #e9e9e9 1px solid;">${body[key]}</td>
              </tr>`;
        }
    }
    htmlBody = htmlBody + `</table>`;

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
        html: htmlBody,
        attachments: []
    };

    
    const info = await transporter.sendMail(mailData);

    return info
});