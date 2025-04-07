"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMailer = void 0;
const nodeMailer = require("nodemailer");
const Mailgun = require("nodemailer-mailgun-transport");
class NodeMailer {
    static initializeTransport() {
        return nodeMailer.createTransport(Mailgun({
            auth: {
                api_key: "7570476af515e094ea05ca17350514ff-24bda9c7-48d9c9b3",
                domain: "sandboxde944173821d405b8b18fb885e303778.mailgun.org",
            },
        }));
    }
    static sendEmail(data) {
        console.log("Email sending");
        console.log(data.to);
        console.log("data.to");
        console.log(data.subject);
        return NodeMailer.initializeTransport().sendMail({
            from: "abc@gmail.com",
            to: data.to,
            subject: data.subject,
            html: data.html,
        });
    }
}
exports.NodeMailer = NodeMailer;
