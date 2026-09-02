'use server'

import { writeClient } from '@/sanity/lib/client'
import { Resend } from 'resend'

export interface ContactFormState {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Record<string, string>
}

const resend = new Resend(process.env.RESEND_API_KEY || '')

// The business email that receives all contact form notifications
const NOTIFICATION_EMAIL = process.env.CONTACT_NOTIFICATION_EMAIL || 'info@ablbusinesstech.com'

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
  const phone = formData.get('phone')?.toString().trim() || ''
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
      from: 'ABL BusinessTech Contact <onboarding@resend.dev>',
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `📬 New Contact: ${fullName} — ${service || 'General Enquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="margin:0;padding:0;background:#f8fafc;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;">
                <!-- Header -->
                <tr>
                  <td style="background:#0B1220;padding:32px 40px;text-align:center;">
                    <p style="margin:0 0 4px;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#05A7D4;">ABL BUSINESSTECH</p>
                    <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;">New Contact Form Submission</h1>
                  </td>
                </tr>
                <!-- Alert bar -->
                <tr>
                  <td style="background:#05A7D4;padding:10px 40px;">
                    <p style="margin:0;font-size:13px;color:#ffffff;font-weight:600;">
                      📩 ${fullName} submitted a contact request — reply via: <a href="mailto:${email}" style="color:#ffffff;text-decoration:underline;">${email}</a>
                    </p>
                  </td>
                </tr>
                <!-- Details -->
                <tr>
                  <td style="padding:32px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${[
                        ['Full Name', fullName],
                        ['Email', email],
                        ['Phone', phone || '—'],
                        ['Company', company || '—'],
                        ['Service Interested In', service || '—'],
                        ['Budget Range', budget || '—'],
                      ].map(([label, val]) => `
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;width:40%;">
                            <p style="margin:0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;">${label}</p>
                          </td>
                          <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                            <p style="margin:0;font-size:14px;color:#0B1220;font-weight:600;">${val}</p>
                          </td>
                        </tr>
                      `).join('')}
                    </table>
                    <!-- Message -->
                    <div style="margin-top:24px;background:#f8fafc;border-left:4px solid #05A7D4;border-radius:0 8px 8px 0;padding:16px 20px;">
                      <p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#05A7D4;">Message</p>
                      <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;">${message.replace(/\n/g, '<br>')}</p>
                    </div>
                    <!-- Reply CTA -->
                    <div style="margin-top:28px;text-align:center;">
                      <a href="mailto:${email}?subject=Re: Your enquiry to ABL BusinessTech"
                         style="display:inline-block;background:#05A7D4;color:#ffffff;font-size:14px;font-weight:700;padding:13px 32px;border-radius:8px;text-decoration:none;">
                        Reply to ${firstName} →
                      </a>
                    </div>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background:#f8fafc;padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0;">
                    <p style="margin:0;font-size:12px;color:#94a3b8;">This notification was sent by the contact form on <strong>ablbusinesstech.com</strong></p>
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
      from: 'ABL BusinessTech <onboarding@resend.dev>',
      to: email,
      subject: `✅ We received your message, ${firstName}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="margin:0;padding:0;background:#f8fafc;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;">
                <!-- Header -->
                <tr>
                  <td style="background:#0B1220;padding:36px 40px;text-align:center;">
                    <p style="margin:0 0 4px;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#05A7D4;">ABL BUSINESSTECH</p>
                    <h1 style="margin:0;font-size:24px;font-weight:800;color:#ffffff;">Message Received! 🎉</h1>
                    <p style="margin:12px 0 0;font-size:14px;color:#94a3b8;">We'll be in touch within 1 business day.</p>
                  </td>
                </tr>
                <!-- Body -->
                <tr>
                  <td style="padding:36px 40px;">
                    <p style="margin:0 0 16px;font-size:16px;color:#0B1220;">Hi <strong>${firstName}</strong>,</p>
                    <p style="margin:0 0 20px;font-size:14px;color:#475569;line-height:1.7;">
                      Thank you for reaching out to <strong>ABL BusinessTech</strong>! We've successfully received your message and a member of our team will review it shortly.
                    </p>
                    <!-- Summary box -->
                    <div style="background:#f8fafc;border-radius:12px;padding:20px 24px;margin-bottom:24px;border:1px solid #e2e8f0;">
                      <p style="margin:0 0 12px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#05A7D4;">Your Submission Summary</p>
                      <p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Name:</strong> ${fullName}</p>
                      <p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Email:</strong> ${email}</p>
                      ${service ? `<p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Service:</strong> ${service}</p>` : ''}
                      ${company ? `<p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Company:</strong> ${company}</p>` : ''}
                    </div>
                    <p style="margin:0 0 12px;font-size:14px;color:#475569;line-height:1.7;">
                      While you wait, you can explore our work and solutions:
                    </p>
                    <div style="text-align:center;margin:24px 0;">
                      <a href="https://ablbusinesstech.com/work"
                         style="display:inline-block;background:#05A7D4;color:#ffffff;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;text-decoration:none;margin:0 6px 8px;">
                        View Our Work →
                      </a>
                      <a href="https://ablbusinesstech.com/solutions"
                         style="display:inline-block;background:#f8fafc;color:#0B1220;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;text-decoration:none;border:1px solid #e2e8f0;margin:0 6px 8px;">
                        Our Solutions
                      </a>
                    </div>
                    <p style="margin:20px 0 0;font-size:14px;color:#475569;line-height:1.7;">
                      If you need to reach us urgently, you can reply to this email or contact us directly at
                      <a href="mailto:info@ablbusinesstech.com" style="color:#05A7D4;font-weight:600;">info@ablbusinesstech.com</a>.
                    </p>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background:#0B1220;padding:24px 40px;text-align:center;">
                    <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#ffffff;">ABL BusinessTech LLP</p>
                    <p style="margin:0;font-size:12px;color:#94a3b8;">
                      <a href="mailto:info@ablbusinesstech.com" style="color:#05A7D4;text-decoration:none;">info@ablbusinesstech.com</a>
                      &nbsp;|&nbsp; Mumbai, Maharashtra, India
                    </p>
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
      from: 'ABL BusinessTech Contact <onboarding@resend.dev>',
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `📞 Consultation Request: ${fullName} — ${service || 'General'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="margin:0;padding:0;background:#f8fafc;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;">
                <tr>
                  <td style="background:#0B1220;padding:32px 40px;text-align:center;">
                    <p style="margin:0 0 4px;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#05A7D4;">ABL BUSINESSTECH</p>
                    <h1 style="margin:0;font-size:22px;font-weight:800;color:#ffffff;">New Consultation Request</h1>
                  </td>
                </tr>
                <tr>
                  <td style="background:#05A7D4;padding:10px 40px;">
                    <p style="margin:0;font-size:13px;color:#ffffff;font-weight:600;">
                      📞 ${fullName} wants to book a consultation — reply via: <a href="mailto:${email}" style="color:#ffffff;text-decoration:underline;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${[
                        ['Full Name', fullName],
                        ['Email', email],
                        ['Phone', phone],
                        ['Company', company || '—'],
                        ['Service', service || '—'],
                        ['Budget Range', budget || '—'],
                        ['Preferred Contact', preferredContact || '—'],
                      ].map(([label, val]) => `
                        <tr>
                          <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;width:40%;">
                            <p style="margin:0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;">${label}</p>
                          </td>
                          <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                            <p style="margin:0;font-size:14px;color:#0B1220;font-weight:600;">${val}</p>
                          </td>
                        </tr>
                      `).join('')}
                    </table>
                    <div style="margin-top:24px;background:#f8fafc;border-left:4px solid #05A7D4;border-radius:0 8px 8px 0;padding:16px 20px;">
                      <p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#05A7D4;">Project Details</p>
                      <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;">${projectDetails.replace(/\n/g, '<br>')}</p>
                    </div>
                    <div style="margin-top:28px;text-align:center;">
                      <a href="mailto:${email}?subject=Re: Your consultation request with ABL BusinessTech"
                         style="display:inline-block;background:#05A7D4;color:#ffffff;font-size:14px;font-weight:700;padding:13px 32px;border-radius:8px;text-decoration:none;">
                        Reply to ${firstName} →
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="background:#f8fafc;padding:20px 40px;text-align:center;border-top:1px solid #e2e8f0;">
                    <p style="margin:0;font-size:12px;color:#94a3b8;">This notification was sent by the contact form on <strong>ablbusinesstech.com</strong></p>
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
      from: 'ABL BusinessTech <onboarding@resend.dev>',
      to: email,
      subject: `✅ Consultation Request Received, ${firstName}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="margin:0;padding:0;background:#f8fafc;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:600px;">
                <tr>
                  <td style="background:#0B1220;padding:36px 40px;text-align:center;">
                    <p style="margin:0 0 4px;font-size:12px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#05A7D4;">ABL BUSINESSTECH</p>
                    <h1 style="margin:0;font-size:24px;font-weight:800;color:#ffffff;">Consultation Request Confirmed! 🎉</h1>
                    <p style="margin:12px 0 0;font-size:14px;color:#94a3b8;">Our team will reach out within 24 hours to schedule your call.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:36px 40px;">
                    <p style="margin:0 0 16px;font-size:16px;color:#0B1220;">Hi <strong>${firstName}</strong>,</p>
                    <p style="margin:0 0 20px;font-size:14px;color:#475569;line-height:1.7;">
                      Thank you for requesting a consultation with <strong>ABL BusinessTech</strong>! We have received your project details and a member of our team will contact you within <strong>24 hours</strong> to schedule a discovery call.
                    </p>
                    <div style="background:#f8fafc;border-radius:12px;padding:20px 24px;margin-bottom:24px;border:1px solid #e2e8f0;">
                      <p style="margin:0 0 12px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#05A7D4;">Your Request Summary</p>
                      <p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Name:</strong> ${fullName}</p>
                      <p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Phone:</strong> ${phone}</p>
                      ${service ? `<p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Service:</strong> ${service}</p>` : ''}
                      ${preferredContact ? `<p style="margin:4px 0;font-size:13px;color:#374151;"><strong>Preferred Contact:</strong> ${preferredContact}</p>` : ''}
                    </div>
                    <div style="text-align:center;margin:24px 0;">
                      <a href="https://ablbusinesstech.com/work"
                         style="display:inline-block;background:#05A7D4;color:#ffffff;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;text-decoration:none;margin:0 6px 8px;">
                        View Our Work →
                      </a>
                    </div>
                    <p style="margin:20px 0 0;font-size:14px;color:#475569;line-height:1.7;">
                      For urgent enquiries, email us directly at
                      <a href="mailto:info@ablbusinesstech.com" style="color:#05A7D4;font-weight:600;">info@ablbusinesstech.com</a>.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#0B1220;padding:24px 40px;text-align:center;">
                    <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#ffffff;">ABL BusinessTech LLP</p>
                    <p style="margin:0;font-size:12px;color:#94a3b8;">
                      <a href="mailto:info@ablbusinesstech.com" style="color:#05A7D4;text-decoration:none;">info@ablbusinesstech.com</a>
                      &nbsp;|&nbsp; Mumbai, Maharashtra, India
                    </p>
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
