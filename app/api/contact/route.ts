import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL_TO || "anmolkannaujiya@outlook.com"

    if (resendApiKey) {
      // Send via Resend
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev",
          to: [contactEmail],
          subject: `Portfolio Contact: ${name}`,
          html: `
            <h2>New Portfolio Contact</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
          reply_to: email,
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        console.error("Resend error:", errorData)
        return NextResponse.json(
          { error: "Failed to send email. Please configure your RESEND_API_KEY in .env" },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true, message: "Email sent successfully!" })
    }

    // If no API key configured, just log and return success (for development)
    console.log("📧 Contact form submission (no email service configured):")
    console.log(`   Name: ${name}`)
    console.log(`   Email: ${email}`)
    console.log(`   Message: ${message}`)
    
    return NextResponse.json({
      success: true,
      message: "Message received! (Email service not configured yet - check server logs)",
    })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
