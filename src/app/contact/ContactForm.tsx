'use client'

import { useActionState, useEffect, useRef } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitContactForm, type ContactFormState } from './actions'
import { Container } from '@/components/ui/Container'

const initialState: ContactFormState = { status: 'idle' }

const services = ['Software Development', 'AI & Machine Learning', 'Web Development', 'Mobile App Development', 'Cloud Solutions', 'UI/UX Design', 'Digital Transformation', 'E-commerce Development', 'Technology Consulting', 'Other']
const budgets = ['Under ₹5 Lakhs', '₹5L – ₹20L', '₹20L – ₹50L', '₹50L – ₹1 Crore', 'Above ₹1 Crore', 'Let\'s discuss']

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state.status])

  return (
    <div>
      {/* Success message */}
      {state.status === 'success' && (
        <div className="flex items-start gap-3 p-5 bg-green-50 border border-green-200 rounded-xl mb-6" role="alert" aria-live="polite">
          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold text-green-800">Message Sent!</p>
            <p className="text-sm text-green-700 mt-0.5">{state.message}</p>
          </div>
        </div>
      )}

      {/* Error message */}
      {state.status === 'error' && !state.errors && (
        <div className="flex items-start gap-3 p-5 bg-red-50 border border-red-200 rounded-xl mb-6" role="alert" aria-live="polite">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-red-700">{state.message}</p>
        </div>
      )}

      <form ref={formRef} action={formAction} noValidate>
        {/* Name row */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label htmlFor="contact-firstName" className="form-label">
              First Name <span className="text-[#E3164F]" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              className={`form-input ${state.errors?.firstName ? 'error' : ''}`}
              placeholder="John"
              aria-required="true"
              aria-describedby={state.errors?.firstName ? 'contact-firstName-error' : undefined}
            />
            {state.errors?.firstName && (
              <p id="contact-firstName-error" className="mt-1.5 text-xs text-red-600" role="alert">{state.errors.firstName}</p>
            )}
          </div>
          <div>
            <label htmlFor="contact-lastName" className="form-label">
              Last Name <span className="text-[#E3164F]" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              className={`form-input ${state.errors?.lastName ? 'error' : ''}`}
              placeholder="Doe"
              aria-required="true"
              aria-describedby={state.errors?.lastName ? 'contact-lastName-error' : undefined}
            />
            {state.errors?.lastName && (
              <p id="contact-lastName-error" className="mt-1.5 text-xs text-red-600" role="alert">{state.errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="contact-email" className="form-label">
            Business Email <span className="text-[#E3164F]" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className={`form-input ${state.errors?.email ? 'error' : ''}`}
            placeholder="john@company.com"
            aria-required="true"
            aria-describedby={state.errors?.email ? 'contact-email-error' : undefined}
          />
          {state.errors?.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-red-600" role="alert">{state.errors.email}</p>
          )}
        </div>

        {/* Phone + Company */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label htmlFor="contact-phone" className="form-label">Phone Number</label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className="form-input" placeholder="+91 98765 43210" />
          </div>
          <div>
            <label htmlFor="contact-company" className="form-label">Company</label>
            <input id="contact-company" name="company" type="text" autoComplete="organization" className="form-input" placeholder="Your Company" />
          </div>
        </div>

        {/* Service */}
        <div className="mb-5">
          <label htmlFor="contact-service" className="form-label">Service You&apos;re Interested In</label>
          <select id="contact-service" name="service" className="form-input">
            <option value="">Select a service</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Budget */}
        <div className="mb-5">
          <label htmlFor="contact-budget" className="form-label">Project Budget</label>
          <select id="contact-budget" name="budget" className="form-input">
            <option value="">Select a budget range</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        {/* Message */}
        <div className="mb-7">
          <label htmlFor="contact-message" className="form-label">
            Tell Us About Your Project <span className="text-[#E3164F]" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            className={`form-input resize-none ${state.errors?.message ? 'error' : ''}`}
            placeholder="Describe your project, goals, timeline, and any specific requirements..."
            aria-required="true"
            aria-describedby={state.errors?.message ? 'contact-message-error' : undefined}
          />
          {state.errors?.message && (
            <p id="contact-message-error" className="mt-1.5 text-xs text-red-600" role="alert">{state.errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-4 px-6 bg-[#E3164F] hover:bg-[#B00E3A] disabled:bg-gray-400 text-white font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3164F] focus-visible:ring-offset-2"
          aria-busy={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          By submitting, you agree to our privacy policy. We&apos;ll never share your data.
        </p>
      </form>
    </div>
  )
}
