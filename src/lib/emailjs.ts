import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/lib/constants";

export function sendContactEmail(params: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  return emailjs.send(
    emailjsConfig.serviceId,
    emailjsConfig.contactTemplateId,
    { ...params },
    { publicKey: emailjsConfig.publicKey }
  );
}

export function sendNewsletterSignup(params: { email: string }) {
  return emailjs.send(
    emailjsConfig.serviceId,
    emailjsConfig.newsletterTemplateId,
    { ...params },
    { publicKey: emailjsConfig.publicKey }
  );
}
