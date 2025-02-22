import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// 📌 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// 📌 Create Message Schema
const messageSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dogBreed: String,
  subject: String,
  date: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

// 📌 Route to handle form submission
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, dogBreed, subject } = req.body;

  try {
    // Save to MongoDB
    const newMessage = new Message({ firstName, lastName, dogBreed, subject });
    await newMessage.save();

    // Send Email Notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // Your email
        pass: process.env.EMAIL_PASS,  // Your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,  // Your email address
      subject: "New Contact Form Submission",
      text: `You have a new message from ${firstName} ${lastName}.\n\nDog Breed: ${dogBreed}\n\nMessage: ${subject}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
