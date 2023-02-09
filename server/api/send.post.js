import nodemailer from 'nodemailer';
import formidable from 'formidable';

export default defineEventHandler(async (event) => {
  var form = new formidable.IncomingForm();

  try {
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(event.node.req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }

        resolve({ fields, files });
      });
    });

    let htmlBody = `<table style="width: 100%;">`;

    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key) && key !== 'files') {
        htmlBody =
          htmlBody +
          `<tr style="background-color: #f8f8f8;">
                <td style="padding: 10px; border: #e9e9e9 1px solid;"><b>${key}</b></td>
                <td style="padding: 10px; border: #e9e9e9 1px solid;">${fields[key]}</td>
                </tr>`;
      }
    }
    htmlBody = htmlBody + `</table>`;

    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.yandex.ru',
      auth: {
        user: '',
        pass: '',
      },
      secure: true,
    });

    const attachments = [];

    for (const key in files) {
      attachments.push({ filename: files[key].originalFilename, path: files[key].filepath });
    }

    const mailData = {
      from: '',
      to: '',
      subject: 'Hello world',
      text: `Hello`,
      html: htmlBody,
      attachments,
    };

    const info = await transporter.sendMail(mailData);

    return info;
  } catch (e) {
    return e;
  }
});
