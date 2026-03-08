import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, company, email, phone, consultationDate, consultationTime, business } = body

    if (!fullName || !company || !email || !phone || !consultationDate || !consultationTime) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      )
    }

    // Format date for display
    const formattedDate = new Date(consultationDate).toLocaleDateString("en-ZA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Format time for display (convert 24h to 12h format)
    const [hours, minutes] = consultationTime.split(":")
    const hour = parseInt(hours, 10)
    const ampm = hour >= 12 ? "PM" : "AM"
    const hour12 = hour % 12 || 12
    const formattedTime = `${hour12}:${minutes} ${ampm}`

    const subject = "New Consultation Booking – Bafana Consulting"
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #166534; border-bottom: 2px solid #eab308; padding-bottom: 10px;">
          New Consultation Booking
        </h2>
        <p>A new consultation has been scheduled on the website.</p>
        
        <h3 style="color: #166534; margin-top: 20px;">Client Details:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 8px 0;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Company:</td>
            <td style="padding: 8px 0;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
        </table>
        
        <h3 style="color: #166534; margin-top: 20px;">Consultation Details:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Date:</td>
            <td style="padding: 8px 0;">${formattedDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Time:</td>
            <td style="padding: 8px 0;">${formattedTime}</td>
          </tr>
        </table>
        
        ${business ? `
        <h3 style="color: #166534; margin-top: 20px;">Message:</h3>
        <p style="background: #f3f4f6; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${business}</p>
        ` : ""}
        
        <p style="margin-top: 30px; padding: 15px; background: #fef3c7; border-radius: 8px;">
          <strong>Please follow up with the client to confirm the consultation.</strong>
        </p>
        
        <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
          This booking was submitted via the Bafana Consulting website.
        </p>
      </div>
    `

    const textBody = `
New Consultation Booking – Bafana Consulting
=============================================

A new consultation has been scheduled on the website.

Client Details:
Name: ${fullName}
Company: ${company}
Email: ${email}
Phone: ${phone}

Consultation Details:
Date: ${formattedDate}
Time: ${formattedTime}

${business ? `Message:\n${business}` : ""}

Please follow up with the client to confirm the consultation.

---
This booking was submitted via the Bafana Consulting website.
    `.trim()

    // Send email using Resend (free tier supports 100 emails/day)
    const RESEND_API_KEY = process.env.RESEND_API_KEY

    console.log("[v0] RESEND_API_KEY exists:", !!RESEND_API_KEY)

    if (RESEND_API_KEY) {
      console.log("[v0] Attempting to send email via Resend...")
      
      const emailPayload = {
        from: "Bafana Consulting Website <onboarding@resend.dev>",
        to: "bheki.malinga@bafanaconsulting.co.za",
        subject,
        html: htmlBody,
        text: textBody,
        reply_to: email,
      }
      
      console.log("[v0] Email payload:", JSON.stringify({ ...emailPayload, html: "[HTML content]" }))
      
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify(emailPayload),
      })

      const responseText = await res.text()
      console.log("[v0] Resend API response status:", res.status)
      console.log("[v0] Resend API response body:", responseText)

      if (!res.ok) {
        console.error("[v0] Resend API error:", responseText)
        return NextResponse.json(
          { error: "Failed to send email. Please try again." },
          { status: 500 }
        )
      }

      console.log("[v0] Email sent successfully!")
      return NextResponse.json({ success: true })
    }

    // Fallback: log the booking if no email service is configured
    console.log("[v0] No RESEND_API_KEY found - logging booking instead")
    console.log("=== NEW CONSULTATION BOOKING ===")
    console.log("To: bheki.malinga@bafanaconsulting.co.za")
    console.log("Subject:", subject)
    console.log("Body:", textBody)
    console.log("================================")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing consultation request:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
