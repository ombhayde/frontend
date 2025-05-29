// api/send-notifications.js (Next.js API Route) or Express.js route
const twilio = require('twilio');
const nodemailer = require('nodemailer');

// Twilio Configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);

// Email Configuration (using Gmail SMTP)
const emailTransporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_APP_PASSWORD // Your Gmail app password
  }
});

// For Next.js API Route
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      name,
      phone,
      email,
      date,
      time,
      service,
      serviceName,
      serviceDuration,
      message
    } = req.body;

    // Format date for better readability
    const formattedDate = new Date(date).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // WhatsApp Message Content
    const whatsappMessage = `🌸 *NEW BOOKING REQUEST* 🌸

👤 *Customer Details:*
Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}

💄 *Service Details:*
Service: ${serviceName}
Duration: ${serviceDuration}
Date: ${formattedDate}
Time: ${time}

📝 *Additional Notes:*
${message || 'No additional notes'}

Please confirm this appointment as soon as possible! ✨

- Shree Radhe Beauty Parlour`;

    // Send WhatsApp Message via Twilio
    try {
      await twilioClient.messages.create({
        body: whatsappMessage,
        from: 'whatsapp:+14155238886', // Twilio Sandbox WhatsApp number
        to: 'whatsapp:+918815687010' // Your WhatsApp number
      });
    } catch (whatsappError) {
      console.error('WhatsApp error:', whatsappError);
      // Continue with email even if WhatsApp fails
    }

    // Email Content
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; color: #666; }
        .detail-value { color: #333; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .urgent { background: #ffebee; border-left: 4px solid #f44336; padding: 15px; margin: 20px 0; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌸 New Booking Request 🌸</h1>
            <p>Shree Radhe Beauty Parlour</p>
        </div>
        
        <div class="content">
            <div class="urgent">
                <strong>⚡ Action Required:</strong> New appointment booking received! Please confirm within 2 hours.
            </div>
            
            <div class="booking-details">
                <h3>👤 Customer Information</h3>
                <div class="detail-row">
                    <span class="detail-label">Name:</span>
                    <span class="detail-value">${name}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Phone:</span>
                    <span class="detail-value">${phone}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value">${email || 'Not provided'}</span>
                </div>
            </div>
            
            <div class="booking-details">
                <h3>💄 Service Details</h3>
                <div class="detail-row">
                    <span class="detail-label">Service:</span>
                    <span class="detail-value">${serviceName}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Duration:</span>
                    <span class="detail-value">${serviceDuration}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Preferred Date:</span>
                    <span class="detail-value">${formattedDate}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Preferred Time:</span>
                    <span class="detail-value">${time}</span>
                </div>
            </div>
            
            ${message ? `
            <div class="booking-details">
                <h3>📝 Additional Notes</h3>
                <p>${message}</p>
            </div>
            ` : ''}
            
            <div class="footer">
                <p>Please contact the customer as soon as possible to confirm their appointment.</p>
                <p><strong>Customer Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                ${email ? `<p><strong>Customer Email:</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
            </div>
        </div>
    </div>
</body>
</html>`;

    // Send Email
    try {
      await emailTransporter.sendMail({
        from: `"Shree Radhe Beauty Parlour" <${process.env.EMAIL_USER}>`,
        to: 'mrunalibhayde3@gmail.com',
        subject: `🌸 New Booking Request - ${name} (${formattedDate})`,
        html: emailHtml,
        text: `New Booking Request
        
Customer: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Service: ${serviceName}
Date: ${formattedDate}
Time: ${time}
Duration: ${serviceDuration}

Additional Notes: ${message || 'None'}

Please contact the customer to confirm their appointment.`
      });
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Continue even if email fails
    }

    // Send confirmation email to customer (if email provided)
    if (email) {
      const customerEmailHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .booking-summary { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; color: #666; }
        .detail-value { color: #333; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
        .next-steps { background: #e8f5e8; border-left: 4px solid #4caf50; padding: 15px; margin: 20px 0; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✨ Booking Confirmation ✨</h1>
            <p>Thank you for choosing Shree Radhe Beauty Parlour!</p>
        </div>
        
        <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for your booking request! We have received your appointment details and will confirm your slot within 2 hours during our business hours (9 AM - 8 PM).</p>
            
            <div class="booking-summary">
                <h3>📋 Your Booking Summary</h3>
                <div class="detail-row">
                    <span class="detail-label">Service:</span>
                    <span class="detail-value">${serviceName}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Duration:</span>
                    <span class="detail-value">${serviceDuration}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Requested Date:</span>
                    <span class="detail-value">${formattedDate}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Requested Time:</span>
                    <span class="detail-value">${time}</span>
                </div>
            </div>
            
            <div class="next-steps">
                <h3>📞 What happens next?</h3>
                <ul>
                    <li>We will call you within 2 hours to confirm your appointment</li>
                    <li>Our team will discuss any specific requirements</li>
                    <li>You'll receive final confirmation with exact timing</li>
                </ul>
            </div>
            
            <div class="footer">
                <p><strong>Contact Us:</strong></p>
                <p>📞 Phone: +91 98765 43210</p>
                <p>📧 Email: info@shreeradhebeauty.com</p>
                <p><br>We look forward to making you look beautiful! 💄✨</p>
            </div>
        </div>
    </div>
</body>
</html>`;

      try {
        await emailTransporter.sendMail({
          from: `"Shree Radhe Beauty Parlour" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: `✨ Booking Confirmation - ${serviceName}`,
          html: customerEmailHtml,
          text: `Dear ${name},

Thank you for your booking request! We have received your appointment details and will confirm your slot within 2 hours.

Your Booking Summary:
- Service: ${serviceName}
- Duration: ${serviceDuration}
- Requested Date: ${formattedDate}
- Requested Time: ${time}

What happens next?
- We will call you within 2 hours to confirm your appointment
- Our team will discuss any specific requirements
- You'll receive final confirmation with exact timing

Contact Us:
Phone: +91 98765 43210
Email: info@shreeradhebeauty.com

We look forward to making you look beautiful!

- Shree Radhe Beauty Parlour`
        });
      } catch (customerEmailError) {
        console.error('Customer email error:', customerEmailError);
        // Continue even if customer email fails
      }
    }

    res.status(200).json({ 
      success: true, 
      message: 'Notifications sent successfully' 
    });

  } catch (error) {
    console.error('Error sending notifications:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send notifications',
      error: error.message 
    });
  }
}

// Alternative Express.js version
/*
const express = require('express');
const router = express.Router();

router.post('/send-notifications', async (req, res) => {
  // Same logic as above but using Express.js syntax
  // Just replace the export default function with this router
});

module.exports = router;
*/