import { resend } from "./email";

interface Enquiry {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  registration: string;
  location: string;
  message: string;
}

export async function sendOwnerNotification(enquiry: Enquiry) {
  return resend.emails.send({
    from: "WMS Scotland <onboarding@resend.dev>",
    to: ["info@wmsscotland.com"],
    subject: `🚗 New Quote Request - ${enquiry.name}`,
    html: `
      <h2>New Website Enquiry</h2>

      <p><strong>Name:</strong> ${enquiry.name}</p>
      <p><strong>Phone:</strong> ${enquiry.phone}</p>
      <p><strong>Email:</strong> ${enquiry.email}</p>
      <p><strong>Vehicle:</strong> ${enquiry.vehicle}</p>
      <p><strong>Registration:</strong> ${enquiry.registration}</p>
      <p><strong>Location:</strong> ${enquiry.location}</p>

      <hr />

      <p>${enquiry.message}</p>
    `,
  });
}