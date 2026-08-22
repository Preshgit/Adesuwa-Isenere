import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/lib/constants";

export function sendNewsletterSignup(params: { email: string }) {
  return emailjs.send(
    emailjsConfig.serviceId,
    emailjsConfig.newsletterTemplateId,
    { ...params },
    { publicKey: emailjsConfig.publicKey }
  );
}
