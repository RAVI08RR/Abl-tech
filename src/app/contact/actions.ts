'use server'

import { writeClient } from '@/sanity/lib/client'
import { Resend } from 'resend'

export interface ContactFormState {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Record<string, string>
}

const resend = new Resend(process.env.RESEND_API_KEY || '')

// The business emails that receive all contact form notifications
const NOTIFICATION_EMAILS = ['info@ablbusinesstech.com', 'ravisoniwebdev@gmail.com']

// ─────────────────────────────────────────────────────────────────────────────
// Contact Form Submission
// ─────────────────────────────────────────────────────────────────────────────
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Extract fields
  const firstName = formData.get('firstName')?.toString().trim() || ''
  const lastName = formData.get('lastName')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const rawPhone = formData.get('phone')?.toString().trim() || ''
  const countryCode = formData.get('countryCode')?.toString().trim() || '+91'
  const phone = rawPhone ? `${countryCode} ${rawPhone}` : ''
  const company = formData.get('company')?.toString().trim() || ''
  const service = formData.get('service')?.toString().trim() || ''
  const budget = formData.get('budget')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim() || ''
  const fullName = `${firstName} ${lastName}`


  // Validate
  const errors: Record<string, string> = {}
  if (!firstName) errors.firstName = 'First name is required'
  if (!lastName) errors.lastName = 'Last name is required'
  if (!email) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email'
  if (!message) errors.message = 'Message is required'
  else if (message.length < 10) errors.message = 'Message must be at least 10 characters'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the errors below.', errors }
  }

  // Save to Sanity (best-effort)
  let sanitySuccess = false
  try {
    await writeClient.create({
      _type: 'contactSubmission',
      firstName,
      lastName,
      email,
      phone: phone || undefined,
      company: company || undefined,
      service: service || undefined,
      budget: budget || undefined,
      message,
      formType: 'contact',
      submittedAt: new Date().toISOString(),
      status: 'new',
    })
    sanitySuccess = true
  } catch (err) {
    console.error('Contact form Sanity submission error:', err)
  }

  // ── 1. Notification email → ABL BusinessTech team ──────────────────────────
  let notificationSent = false
  try {
    await resend.emails.send({
      from: 'ABL BusinessTech Contact <notifications@ablbusinesstech.com>',
      to: NOTIFICATION_EMAILS,
      replyTo: email,
      subject: `📬 New Contact: ${fullName} — ${service || 'General Enquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="margin:0;padding:0;background-color:#F4F4F5;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F4F5;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 10px 40px -10px rgba(0,0,0,0.1);max-width:600px;margin:0 20px;">
                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg, #0B1220 0%, #1a2942 100%);padding:48px 40px;text-align:center;">
                    <div style="background:#ffffff;display:inline-block;padding:12px 24px;border-radius:12px;margin-bottom:24px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);"><img src="https://ablbusinesstech.com/logo-abltech.png" alt="ABL BusinessTech" width="180" style="margin:0;display:block;max-width:100%;height:auto;"></div>
                    <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">New Contact Request</h1>
                  </td>
                </tr>
                <!-- Alert bar -->
                <tr>
                  <td style="background:#0ea5e9;padding:16px 40px;text-align:center;">
                    <p style="margin:0;font-size:14px;color:#ffffff;font-weight:600;">
                      👋 Action Required: You have a new message from ${fullName}
                    </p>
                  </td>
                </tr>
                <!-- Details -->
                <tr>
                  <td style="padding:40px;">
                    <div style="background:#f8fafc;border-radius:16px;padding:24px;border:1px solid #e2e8f0;margin-bottom:32px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        ${[
                          ['Full Name', fullName],
                          ['Email', `<a href="mailto:${email}" style="color:#0ea5e9;text-decoration:none;">${email}</a>`],
                          ['Phone', phone || '—'],
                          ['Company', company || '—'],
                          ['Service Interested In', service || '—'],
                          ['Budget Range', budget || '—'],
                        ].map(([label, val]) => `
                          <tr>
                            <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;width:35%;">
                              <p style="margin:0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748b;">${label}</p>
                            </td>
                            <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;">
                              <p style="margin:0;font-size:15px;color:#0f172a;font-weight:600;">${val}</p>
                            </td>
                          </tr>
                        `).join('')}
                      </table>
                    </div>
                    <!-- Message -->
                    <p style="margin:0 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748b;">Message</p>
                    <div style="background:#ffffff;border-left:4px solid #0ea5e9;padding:16px 20px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);border-radius:0 12px 12px 0;">
                      <p style="margin:0;font-size:16px;color:#334155;line-height:1.6;font-style:italic;">"${message.replace(/\n/g, '<br>')}"</p>
                    </div>
                    <!-- Reply CTA -->
                    <div style="margin-top:40px;text-align:center;">
                      <a href="mailto:${email}?subject=Re: Your enquiry to ABL BusinessTech"
                         style="display:inline-block;background:linear-gradient(to right, #0ea5e9, #0284c7);color:#ffffff;font-size:15px;font-weight:700;padding:16px 36px;border-radius:9999px;text-decoration:none;box-shadow:0 4px 14px 0 rgba(14, 165, 233, 0.39);">
                        Reply to ${firstName}
                      </a>
                    </div>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background:#f8fafc;padding:32px 40px;text-align:center;border-top:1px solid #e2e8f0;">
                    <p style="margin:0;font-size:13px;color:#64748b;">Automated notification from <strong>ablbusinesstech.com</strong></p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    })
    notificationSent = true
  } catch (emailErr) {
    console.error('Failed to send team notification email:', emailErr)
  }

  // ── 2. Confirmation email → the person who submitted the form ─────────────
  try {
    await resend.emails.send({
      from: 'ABL BusinessTech <info@ablbusinesstech.com>',
      to: email,
      subject: `✅ We received your message, ${firstName}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="margin:0;padding:0;background-color:#F4F4F5;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F4F5;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 10px 40px -10px rgba(0,0,0,0.1);max-width:600px;margin:0 20px;">
                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg, #0B1220 0%, #1a2942 100%);padding:48px 40px;text-align:center;">
                    <div style="background:#ffffff;display:inline-block;padding:12px 24px;border-radius:12px;margin-bottom:24px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);"><img src="https://ablbusinesstech.com/logo-abltech.png" alt="ABL BusinessTech" width="180" style="margin:0;display:block;max-width:100%;height:auto;"></div>
                    <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Message Received! ✨</h1>
                    <p style="margin:16px 0 0;font-size:16px;color:#94a3b8;line-height:1.5;">Thank you for getting in touch. We'll be in contact within 1 business day.</p>
                  </td>
                </tr>
                <!-- Body -->
                <tr>
                  <td style="padding:48px 40px;">
                    <p style="margin:0 0 20px;font-size:18px;color:#0f172a;font-weight:700;">Hi ${firstName},</p>
                    <p style="margin:0 0 32px;font-size:16px;color:#475569;line-height:1.7;">
                      We've successfully received your message. Our team is reviewing your requirements and will reach out shortly to discuss how we can help your business grow.
                    </p>
                    <!-- Summary box -->
                    <div style="background:#f8fafc;border-radius:16px;padding:24px;margin-bottom:32px;border:1px solid #e2e8f0;">
                      <p style="margin:0 0 16px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#0ea5e9;">Your Submission Summary</p>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:8px 0;width:30%;"><p style="margin:0;font-size:14px;color:#64748b;font-weight:600;">Name</p></td>
                          <td style="padding:8px 0;"><p style="margin:0;font-size:14px;color:#0f172a;font-weight:600;">${fullName}</p></td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;"><p style="margin:0;font-size:14px;color:#64748b;font-weight:600;">Email</p></td>
                          <td style="padding:8px 0;"><p style="margin:0;font-size:14px;color:#0f172a;font-weight:600;">${email}</p></td>
                        </tr>
                        ${service ? `<tr>
                          <td style="padding:8px 0;"><p style="margin:0;font-size:14px;color:#64748b;font-weight:600;">Service</p></td>
                          <td style="padding:8px 0;"><p style="margin:0;font-size:14px;color:#0f172a;font-weight:600;">${service}</p></td>
                        </tr>` : ''}
                      </table>
                    </div>
                    <div style="text-align:center;margin:40px 0;">
                      <a href="https://ablbusinesstech.com/work"
                         style="display:inline-block;background:linear-gradient(to right, #0ea5e9, #0284c7);color:#ffffff;font-size:15px;font-weight:700;padding:16px 36px;border-radius:9999px;text-decoration:none;box-shadow:0 4px 14px 0 rgba(14, 165, 233, 0.39);margin:0 8px 12px;">
                        Explore Our Work
                      </a>
                      <a href="https://ablbusinesstech.com/solutions"
                         style="display:inline-block;background:#f1f5f9;color:#0f172a;font-size:15px;font-weight:700;padding:16px 36px;border-radius:9999px;text-decoration:none;margin:0 8px 12px;">
                        View Solutions
                      </a>
                    </div>
                    <p style="margin:32px 0 0;font-size:15px;color:#475569;line-height:1.7;">
                      Need immediate assistance? Feel free to <a href="mailto:info@ablbusinesstech.com" style="color:#0ea5e9;font-weight:600;text-decoration:none;">reply directly to this email</a>.
                    </p>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background:#0B1220;padding:32px 40px;text-align:center;">
                    <p style="margin:0 0 8px;font-size:14px;font-weight:700;color:#ffffff;letter-spacing:1px;">ABL BusinessTech LLP</p>
                    <p style="margin:0;font-size:13px;color:#94a3b8;">Mumbai, Maharashtra, India</p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    })
  } catch (confirmErr) {
    // Confirmation email failure is non-blocking — user still gets success
    console.error('Failed to send user confirmation email:', confirmErr)
  }

  if (sanitySuccess || notificationSent) {
    return {
      status: 'success',
      message: `Thank you, ${firstName}! We've received your message and sent a confirmation to ${email}. We'll be in touch within 1 business day.`,
    }
  } else {
    return {
      status: 'error',
      message: 'Something went wrong. Please try again or email us directly at info@ablbusinesstech.com.',
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Consultation Form Submission
// ─────────────────────────────────────────────────────────────────────────────
export async function submitConsultationForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const firstName = formData.get('firstName')?.toString().trim() || ''
  const lastName = formData.get('lastName')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const phone = formData.get('phone')?.toString().trim() || ''
  const company = formData.get('company')?.toString().trim() || ''
  const service = formData.get('service')?.toString().trim() || ''
  const budget = formData.get('budget')?.toString().trim() || ''
  const projectDetails = formData.get('projectDetails')?.toString().trim() || ''
  const preferredContact = formData.get('preferredContact')?.toString().trim() || ''
  const fullName = `${firstName} ${lastName}`

  const errors: Record<string, string> = {}
  if (!firstName) errors.firstName = 'First name is required'
  if (!lastName) errors.lastName = 'Last name is required'
  if (!email) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email'
  if (!phone) errors.phone = 'Phone is required for consultation booking'
  if (!projectDetails) errors.projectDetails = 'Project details are required'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the errors below.', errors }
  }

  let sanitySuccess = false
  try {
    await writeClient.create({
      _type: 'contactSubmission',
      firstName,
      lastName,
      email,
      phone,
      company: company || undefined,
      service: service || undefined,
      budget: budget || undefined,
      projectDetails,
      preferredContact: preferredContact || undefined,
      formType: 'consultation',
      submittedAt: new Date().toISOString(),
      status: 'new',
    })
    sanitySuccess = true
  } catch (err) {
    console.error('Consultation form Sanity error:', err)
  }

  // ── 1. Notification email → ABL BusinessTech team ──────────────────────────
  let notificationSent = false
  try {
    await resend.emails.send({
      from: 'ABL BusinessTech Contact <notifications@ablbusinesstech.com>',
      to: NOTIFICATION_EMAILS,
      replyTo: email,
      subject: `📞 Consultation Request: ${fullName} — ${service || 'General'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="margin:0;padding:0;background-color:#F4F4F5;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F4F5;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 10px 40px -10px rgba(0,0,0,0.1);max-width:600px;margin:0 20px;">
                <tr>
                  <td style="background:linear-gradient(135deg, #0B1220 0%, #1a2942 100%);padding:48px 40px;text-align:center;">
                    <div style="background:#ffffff;display:inline-block;padding:12px 24px;border-radius:12px;margin-bottom:24px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);"><img src="https://ablbusinesstech.com/logo-abltech.png" alt="ABL BusinessTech" width="180" style="margin:0;display:block;max-width:100%;height:auto;"></div>
                    <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Consultation Request</h1>
                  </td>
                </tr>
                <tr>
                  <td style="background:#8b5cf6;padding:16px 40px;text-align:center;">
                    <p style="margin:0;font-size:14px;color:#ffffff;font-weight:600;">
                      📞 Action Required: Please review and schedule a call with ${fullName}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:40px;">
                    <div style="background:#f8fafc;border-radius:16px;padding:24px;border:1px solid #e2e8f0;margin-bottom:32px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        ${[
                          ['Full Name', fullName],
                          ['Email', `<a href="mailto:${email}" style="color:#8b5cf6;text-decoration:none;">${email}</a>`],
                          ['Phone', phone],
                          ['Company', company || '—'],
                          ['Service', service || '—'],
                          ['Budget Range', budget || '—'],
                          ['Preferred Contact', preferredContact || '—'],
                        ].map(([label, val]) => `
                          <tr>
                            <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;width:35%;">
                              <p style="margin:0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748b;">${label}</p>
                            </td>
                            <td style="padding:12px 0;border-bottom:1px solid #e2e8f0;">
                              <p style="margin:0;font-size:15px;color:#0f172a;font-weight:600;">${val}</p>
                            </td>
                          </tr>
                        `).join('')}
                      </table>
                    </div>
                    <p style="margin:0 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#64748b;">Project Details</p>
                    <div style="background:#ffffff;border-left:4px solid #8b5cf6;padding:16px 20px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);border-radius:0 12px 12px 0;">
                      <p style="margin:0;font-size:16px;color:#334155;line-height:1.6;font-style:italic;">"${projectDetails.replace(/\n/g, '<br>')}"</p>
                    </div>
                    <div style="margin-top:40px;text-align:center;">
                      <a href="mailto:${email}?subject=Re: Your consultation request with ABL BusinessTech"
                         style="display:inline-block;background:linear-gradient(to right, #8b5cf6, #6d28d9);color:#ffffff;font-size:15px;font-weight:700;padding:16px 36px;border-radius:9999px;text-decoration:none;box-shadow:0 4px 14px 0 rgba(139, 92, 246, 0.39);">
                        Reply to ${firstName}
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="background:#f8fafc;padding:32px 40px;text-align:center;border-top:1px solid #e2e8f0;">
                    <p style="margin:0;font-size:13px;color:#64748b;">Automated notification from <strong>ablbusinesstech.com</strong></p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    })
    notificationSent = true
  } catch (emailErr) {
    console.error('Failed to send consultation notification email:', emailErr)
  }

  // ── 2. Confirmation email → the person who submitted ──────────────────────
  try {
    await resend.emails.send({
      from: 'ABL BusinessTech <info@ablbusinesstech.com>',
      to: email,
      subject: `✅ Consultation Request Received, ${firstName}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="margin:0;padding:0;background-color:#F4F4F5;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F4F5;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 10px 40px -10px rgba(0,0,0,0.1);max-width:600px;margin:0 20px;">
                <tr>
                  <td style="background:linear-gradient(135deg, #0B1220 0%, #1a2942 100%);padding:48px 40px;text-align:center;">
                    <div style="background:#ffffff;display:inline-block;padding:12px 24px;border-radius:12px;margin-bottom:24px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);"><img src="https://ablbusinesstech.com/logo-abltech.png" alt="ABL BusinessTech" width="180" style="margin:0;display:block;max-width:100%;height:auto;"></div>
                    <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Request Confirmed! ✨</h1>
                    <p style="margin:16px 0 0;font-size:16px;color:#94a3b8;line-height:1.5;">Our team will reach out within 24 hours to schedule your call.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:48px 40px;">
                    <p style="margin:0 0 20px;font-size:18px;color:#0f172a;font-weight:700;">Hi ${firstName},</p>
                    <p style="margin:0 0 32px;font-size:16px;color:#475569;line-height:1.7;">
                      Thank you for requesting a consultation with <strong>ABL BusinessTech</strong>. We have received your project details and a member of our team will contact you shortly to schedule a discovery call.
                    </p>
                    <div style="background:#f8fafc;border-radius:16px;padding:24px;margin-bottom:32px;border:1px solid #e2e8f0;">
                      <p style="margin:0 0 16px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#8b5cf6;">Your Request Summary</p>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:8px 0;width:40%;"><p style="margin:0;font-size:14px;color:#64748b;font-weight:600;">Name</p></td>
                          <td style="padding:8px 0;"><p style="margin:0;font-size:14px;color:#0f172a;font-weight:600;">${fullName}</p></td>
                        </tr>
                        <tr>
                          <td style="padding:8px 0;"><p style="margin:0;font-size:14px;color:#64748b;font-weight:600;">Phone</p></td>
                          <td style="padding:8px 0;"><p style="margin:0;font-size:14px;color:#0f172a;font-weight:600;">${phone}</p></td>
                        </tr>
                        ${service ? `<tr>
                          <td style="padding:8px 0;"><p style="margin:0;font-size:14px;color:#64748b;font-weight:600;">Service</p></td>
                          <td style="padding:8px 0;"><p style="margin:0;font-size:14px;color:#0f172a;font-weight:600;">${service}</p></td>
                        </tr>` : ''}
                      </table>
                    </div>
                    <div style="text-align:center;margin:40px 0;">
                      <a href="https://ablbusinesstech.com/work"
                         style="display:inline-block;background:linear-gradient(to right, #8b5cf6, #6d28d9);color:#ffffff;font-size:15px;font-weight:700;padding:16px 36px;border-radius:9999px;text-decoration:none;box-shadow:0 4px 14px 0 rgba(139, 92, 246, 0.39);">
                        Explore Our Work
                      </a>
                    </div>
                    <p style="margin:32px 0 0;font-size:15px;color:#475569;line-height:1.7;">
                      Need immediate assistance? Feel free to <a href="mailto:info@ablbusinesstech.com" style="color:#8b5cf6;font-weight:600;text-decoration:none;">reply directly to this email</a>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#0B1220;padding:32px 40px;text-align:center;">
                    <p style="margin:0 0 8px;font-size:14px;font-weight:700;color:#ffffff;letter-spacing:1px;">ABL BusinessTech LLP</p>
                    <p style="margin:0;font-size:13px;color:#94a3b8;">Mumbai, Maharashtra, India</p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    })
  } catch (confirmErr) {
    console.error('Failed to send user consultation confirmation email:', confirmErr)
  }

  if (sanitySuccess || notificationSent) {
    return {
      status: 'success',
      message: `Thank you, ${firstName}! Your consultation request has been received and a confirmation sent to ${email}. Our team will reach out within 24 hours.`,
    }
  } else {
    return {
      status: 'error',
      message: 'Something went wrong. Please try again or call us directly.',
    }
  }
}
