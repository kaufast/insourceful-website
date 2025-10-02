import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required.' },
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

    // Log the newsletter subscription (in production, you'd add this to your email service)
    console.log('Newsletter Subscription:', {
      email,
      timestamp: new Date().toISOString(),
    });

    // Here you would typically:
    // 1. Add to your email marketing service (Mailchimp, ConvertKit, etc.)
    // 2. Save to database
    // 3. Send welcome email
    
    // For now, we'll simulate a successful subscription
    // Replace this with actual email service integration
    if (process.env.NODE_ENV === 'production') {
      // Example with Mailchimp API:
      /*
      const mailchimp = require('@mailchimp/mailchimp_marketing');
      mailchimp.setConfig({
        apiKey: process.env.MAILCHIMP_API_KEY,
        server: process.env.MAILCHIMP_SERVER_PREFIX,
      });
      
      await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
        email_address: email,
        status: 'subscribed',
      });
      */
    }

    return NextResponse.json({
      message: 'Thank you for subscribing to our newsletter!',
      success: true,
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}