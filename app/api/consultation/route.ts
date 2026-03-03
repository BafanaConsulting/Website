import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, company, email, phone, business } = body

    if (!fullName || !company || !email || !phone || !business) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const subject = `New Consultation Request from ${fullName} - ${company}`
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #166534; border-bottom: 2px solid #eab308; padding-bottom: 10px;">
          New Consultation Request
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 180px;">Full Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Company</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              <a href="mailto:${email}">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              <a href="tel:${phone}">${phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; vertical-align: top;">Business Enquiry</td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; white-space: pre-wrap;">${business}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
          This enquiry was submitted via the Bafana Consulting website.
        </p>
      </div>
    `

    const textBody = `
New Consultation Request
========================
Full Name: ${fullName}
Company: ${company}
Email: ${email}
Phone: ${phone}

Business Enquiry:
${business}

---
This enquiry was submitted via the Bafana Consulting website.
    `.trim()

    // Send email using Resend (free tier supports 100 emails/day)
    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Bafana Consulting Website <onboarding@resend.dev>",
          to: "bheki.malinga@bafanaconsulting.co.za",
          subject,
          html: htmlBody,
          text: textBody,
          reply_to: email,
        }),
      })

      if (!res.ok) {
        const error = await res.text()
        console.error("Resend API error:", error)
        return NextResponse.json(
          { error: "Failed to send email. Please try again." },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    // Fallback: log the enquiry if no email service is configured
    console.log("=== NEW CONSULTATION REQUEST ===")
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
