import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Send email notification
    try {
      await sendContactEmail({
        name,
        email,
        phone,
        subject,
        message,
      });
      
      console.log('Contact email sent successfully');
    } catch (emailError) {
      console.error('Failed to send contact email:', emailError);
      // Don't fail the request if email fails - log it but continue
      // In production, you might want to use a queue system for reliability
    }

    return NextResponse.json({
      message: 'Thank you for your message! We will get back to you within 24 hours.',
      success: true,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}