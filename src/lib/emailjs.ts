import { emailjsConfig } from "@/lib/constants";

export async function sendNewsletterSignup(params: { email: string }) {
  const emailjs = (await import("@emailjs/browser")).default;
  return emailjs.send(
    emailjsConfig.serviceId,
    emailjsConfig.newsletterTemplateId,
    { ...params },
    { publicKey: emailjsConfig.publicKey }
  );
}
