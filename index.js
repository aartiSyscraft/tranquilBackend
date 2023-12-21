require('dotenv').config()
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

require('./connection/config')
const Users = require('./connection/user.js');
app.use(cors())
app.use(express.json())     //to fetch the payload data i.e. from postman or front-end
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 8080;

app.post('/submit_form', async (req, resp) => {
  console.log(req.body, "pppppppppp");
  const { name, email, phone, country, state, city, fromDate, toDate } = req.body;

  let userno = new Users(req.body)
  let result = await Users.create(userno)
  console.log(result, "line 27");

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  var mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'New Enquiry',
    text: `Hello,

        You've received a new booking enquiry from ${name}! 🎉
    
        Booking Details:
        - Name: ${name}
        - Email: ${email}
        - Phone: ${phone}
        - Location: ${country}, ${state}, ${city}
        - Dates: ${fromDate} to ${toDate}
    
        This potential guest is excited about your property and is looking forward to making a reservation. Please reach out to them at your earliest convenience to discuss the details and provide the exceptional service that sets your property apart.
    
        Cheers,
        Tranquilthaamara`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      resp.status(200).send('Email sent successfully');
    }
  });
})

app.listen(port, () => console.log(`Server Strated at PORT:${port}`))