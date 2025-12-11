
import { BookingDetails } from '../types';

export const sendBookingEmail = async (details: BookingDetails): Promise<boolean> => {
  const apiKey = import.meta.env.VITE_BREVO_API_KEY;
  

  if (!apiKey) {
    console.warn("Brevo API Key is missing. Email not sent.");
    return false;
  }

  const url = "https://api.brevo.com/v3/smtp/email";
  
  const emailContent = {
    sender: { name: "FastPoint Cab", email: "fastpointcab@gmail.com" },
    to: [{ email: 'fastpointcab@gmail.com', name: 'FastPoint Cab' }],
    subject: "New Booking Request - FastPoint Cab",
    htmlContent: `
      <h2>New Booking Received</h2>
      <p><strong>Name:</strong> ${details.name}</p>
      <p><strong>Phone:</strong> ${details.phone}</p>
      <p><strong>Pickup:</strong> ${details.pickup}</p>
      <p><strong>Drop:</strong> ${details.drop}</p>
      <p><strong>Date:</strong> ${details.date}</p>
      <p><strong>Time:</strong> ${details.time}</p>
      <p><strong>Vehicle:</strong> ${details.vehicleType}</p>
    `
  };
try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(emailContent)
    });

    const data = await response.json();
    console.log("Brevo response:", data);

    return response.ok;
  } catch (error) {
    console.error("Failed to send email", error);
    return false;
  }
};