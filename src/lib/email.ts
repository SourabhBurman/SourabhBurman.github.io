import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY?.trim();
export const contactFrom = process.env.CONTACT_FROM_EMAIL?.trim();
export const contactTo = process.env.CONTACT_TO_EMAIL?.trim();

// Avoid constructing the SDK without credentials during builds.
export const resend = apiKey ? new Resend(apiKey) : null;
