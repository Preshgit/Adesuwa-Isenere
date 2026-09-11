import { emailjsConfig } from "@/lib/constants";

export async function sendNewsletterSignup(params: { email: string }) {
  const isConfigured =
    emailjsConfig.serviceId &&
    emailjsConfig.serviceId !== "REPLACE_SERVICE_ID" &&
    emailjsConfig.publicKey &&
    emailjsConfig.publicKey !== "REPLACE_PUBLIC_KEY";

  if (!isConfigured) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[EmailJS] Credentials not configured in .env.local. In development mode, simulating successful subscription for:",
        params.email
      );
      await new Promise((resolve) => setTimeout(resolve, 600));
      return { status: 200, text: "OK (Dev Simulation)" };
    }
    throw new Error("EmailJS credentials are not configured in environment variables.");
  }

  const emailjs = (await import("@emailjs/browser")).default;
  return emailjs.send(
    emailjsConfig.serviceId,
    emailjsConfig.newsletterTemplateId,
    { ...params },
    { publicKey: emailjsConfig.publicKey }
  );
}
