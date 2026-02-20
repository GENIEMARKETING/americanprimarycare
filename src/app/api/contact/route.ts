import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name:              z.string().min(2),
  email:             z.string().email(),
  phone:             z.string().min(7),
  preferredProvider: z.string().optional(),
  isNewPatient:      z.boolean().optional(),
  message:           z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // In production: send email via SMTP or a service like Resend/SendGrid
    // For now, log and return success
    console.log('[Contact Form]', {
      name:     data.name,
      phone:    data.phone,
      provider: data.preferredProvider,
      newPt:    data.isNewPatient,
    });

    // TODO: Send email notification to office
    // await sendEmail({
    //   to: process.env.OFFICE_EMAIL,
    //   subject: `New Appointment Request — ${data.name}`,
    //   body: `...`
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', issues: err.issues }, { status: 422 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
