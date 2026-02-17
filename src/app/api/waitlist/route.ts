import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existing } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', email)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: 'Email already on waitlist' },
        { status: 409 }
      );
    }

    // Store in database
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save email' },
        { status: 500 }
      );
    }

    // Send confirmation email
    await resend.emails.send({
      from: 'DuoFinder <hello@duofinder.pro>',
      to: email,
      subject: "You're on the DuoFinder waitlist!",
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #22d3ee; font-size: 28px; margin-bottom: 20px;">Welcome to DuoFinder!</h1>
          <p style="color: #334155; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thanks for joining our waitlist. You're now among the first to know when we launch.
          </p>
          <p style="color: #334155; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
            Early adopters like you will get <strong>lifetime premium perks</strong> when we go live.
          </p>
          <div style="background: #0f172a; border-radius: 12px; padding: 24px; text-align: center;">
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 14px;">Join our Discord for updates</p>
            <a href="https://discord.gg/duofinder" style="display: inline-block; background: #22d3ee; color: #0f172a; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600;">
              Join Discord
            </a>
          </div>
          <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
            Not affiliated with Riot Games.<br>
            <a href="https://duofinder.pro" style="color: #22d3ee;">duofinder.pro</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
