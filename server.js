const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const mongoSanitize = require('express-mongo-sanitize');
const path = require('path');
const moment = require('moment-timezone');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json());
//app.use(mongoSanitize());

mongoose.connect("mongodb+srv://arya:poetreepwd@cluster0.asqh1ey.mongodb.net/poetree-db", {useNewUrlParser: true});

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
  });

const Contact = mongoose.model("Contact", contactSchema);

const database = mongoose.connection;

// Mongoose middleware to convert timestamp to IST before saving
contactSchema.pre('save', function (next) {
    this.timestamp = moment().tz('Asia/Kolkata').toDate();
    next();
  });


// Route to handle form submission and store data in MongoDB
app.post('/api/contact', (req, res) => {
    const { name, phone, email, message } = req.body;

    // Create a new instance of the Contact model
    const newContact = new Contact({ name, phone, email, message});

    //Send email with form data
    const transporter = nodemailer.createTransport({
        service : 'Gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    const mail_option = {
        from: "**********************",
        to: "***********************",
        subject: "Enquiry Message",
        text: req.body.message
    }

    // Save the new contact data to the database
    newContact.save()
        .then(() => {
            res.status(201).json({ message: 'Form data saved successfully' });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error saving form data' });
        });
});


// Route to fetch all contact entries from the database
app.get('/api/contacts', (req, res) => {
    Contact.find()
        .then((contacts) => {
            res.status(200).json(contacts);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error fetching contacts' });
        });
});

// Serve the React frontend from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes and return the React frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})