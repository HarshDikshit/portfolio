// pages/api/send-email.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, title, description } = body;

    if (!email || !title || !description) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // change this after setting up domain
      to: process.env.MY_EMAIL as string,
      subject: title,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${title}</p>
        <p><strong>Message:</strong></p>
        <p>${description}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 });
  } catch (err: any) {
    console.error("Resend error:", err);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}


export async function GET() {
  return NextResponse.json({msg: "hello"})
}