'use server'

import { writeClient } from '@/sanity/lib/client'
import { revalidatePath } from 'next/cache'
import { Resend } from 'resend'

export interface ContactFormState {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Record<string, string>
}

const resend = new Resend(process.env.RESEND_API_KEY || '')

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

  // Save to Sanity
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
    console.error('Contact form Sanity submission error (will still attempt Resend):', err)
  }

  // Send email notification via Resend
  let emailSuccess = false
  try {
    await resend.emails.send({
      from: 'ABL BusinessTech <onboarding@resend.dev>',
      to: process.env.CONTACT_NOTIFICATION_EMAIL || 'ravisoni08rrrr@gmail.com',
      subject: `New Contact Submission from ${firstName} ${lastName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service:</strong> ${service || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })
    emailSuccess = true
  } catch (emailErr) {
    console.error('Failed to send contact email notification via Resend:', emailErr)
  }

  if (sanitySuccess || emailSuccess) {
    return {
      status: 'success',
      message: "Thank you for reaching out! We'll be in touch within 1 business day.",
    }
  } else {
    return {
      status: 'error',
      message: 'Something went wrong. Please try again or email us directly at info@ablbusinesstech.com.',
    }
  }
}

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
    console.error('Consultation form Sanity error (will still attempt Resend):', err)
  }

  // Send email notification via Resend
  let emailSuccess = false
  try {
    await resend.emails.send({
      from: 'ABL BusinessTech <onboarding@resend.dev>',
      to: process.env.CONTACT_NOTIFICATION_EMAIL || 'ravisoni08rrrr@gmail.com',
      subject: `New Consultation Request from ${firstName} ${lastName}`,
      html: `
        <h3>New Consultation Request</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service:</strong> ${service || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <p><strong>Preferred Contact:</strong> ${preferredContact || 'N/A'}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails}</p>
      `
    })
    emailSuccess = true
  } catch (emailErr) {
    console.error('Failed to send consultation email notification via Resend:', emailErr)
  }

  if (sanitySuccess || emailSuccess) {
    return {
      status: 'success',
      message: "Your consultation request has been received! Our team will reach out within 24 hours to schedule a call.",
    }
  } else {
    return {
      status: 'error',
      message: 'Something went wrong. Please try again or call us directly.',
    }
  }
}
