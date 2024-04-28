import nodemailer from "nodemailer";

const email = "mit.gruner@gmail.com";
const pass = "Bwilson382814";

console.log("Transport called");

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass,
    },
});

export const mailOptions = {
    from: email,
    to: email,
};