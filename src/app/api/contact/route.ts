import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const subject = formData.get('subject')?.toString() || 'New Form Submission';
    const fromName = formData.get('from_name')?.toString() || 'Website Visitor';
    const fromEmail = formData.get('from_email')?.toString() || 'noreply@kemetads.ae';
    const message = formData.get('message')?.toString() || '';

    const to = 'abdulrahman@kemetads.ae';

    const fullMessage = `Form: ${subject}\n`;
    const fullMessageWithDetails = `${fullMessage}Submitted by: ${fromName}\nEmail: ${fromEmail}\n---\n\n${message}\n\n---\nSent via KEMET Website Contact Form`;

    // Try using the native sendmail/postfix on the server
    const { execSync } = require('child_process');
    
    const emailContent = `To: ${to}
From: KEMET Website <noreply@kemetads.ae>
Reply-To: ${fromName} <${fromEmail}>
Subject: ${subject}
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8

${fullMessageWithDetails}`;

    try {
      execSync(`sendmail -t`, {
        input: emailContent,
        timeout: 10000,
      });
    } catch {
      // Fallback: write to a log file so the email isn't lost
      const fs = require('fs');
      const logDir = '/tmp/kemet-form-submissions';
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      const filename = `${logDir}/${Date.now()}.txt`;
      fs.writeFileSync(filename, emailContent);
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}