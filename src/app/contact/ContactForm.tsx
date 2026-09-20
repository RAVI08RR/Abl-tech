'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  User,
  Mail,
  Phone,
  Building2,
} from 'lucide-react'
import { countries } from '@/lib/countries'
import { submitContactForm, type ContactFormState } from './actions'

const initialState: ContactFormState = { status: 'idle' }

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const formRef = useRef<HTMLFormElement>(null)
  const [selectedCountry, setSelectedCountry] = useState('+91')

  useEffect(() => {
    if (state.status === 'success') {
      formRef.current?.reset()
    }
  }, [state.status])

  return (
    <div>
      {/* Success Alert */}
      {state.status === 'success' && (
        <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl mb-5 animate-in fade-in slide-in-from-top-2 duration-300" role="alert">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-emerald-900 text-sm">Message Sent Successfully!</p>
            <p className="text-xs text-emerald-700 mt-0.5">{state.message}</p>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {state.status === 'error' && !state.errors && (
        <div className="flex items-start gap-3 p-4 bg-rose-50 border border-rose-200 rounded-2xl mb-5 animate-in fade-in slide-in-from-top-2 duration-300" role="alert">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <p className="text-xs text-rose-700 font-medium">{state.message}</p>
        </div>
      )}

      <form ref={formRef} action={formAction} noValidate className="space-y-4">
        {/* Name Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-firstName" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              First Name <span className="text-[#ED396D]">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="contact-firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50/70 border ${
                  state.errors?.firstName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200/90'
                } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#05A7D4] focus:ring-2 focus:ring-[#05A7D4]/20 outline-none transition-all duration-200`}
                placeholder="Enter First Name"
                aria-required="true"
              />
            </div>
            {state.errors?.firstName && (
              <p className="mt-1 text-xs text-rose-600 font-medium">{state.errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="contact-lastName" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Last Name <span className="text-[#ED396D]">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="contact-lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50/70 border ${
                  state.errors?.lastName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200/90'
                } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#05A7D4] focus:ring-2 focus:ring-[#05A7D4]/20 outline-none transition-all duration-200`}
                placeholder="Enter Last Name"
                aria-required="true"
              />
            </div>
            {state.errors?.lastName && (
              <p className="mt-1 text-xs text-rose-600 font-medium">{state.errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email & Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-email" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Business Email <span className="text-[#ED396D]">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50/70 border ${
                  state.errors?.email ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200/90'
                } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#05A7D4] focus:ring-2 focus:ring-[#05A7D4]/20 outline-none transition-all duration-200`}
                placeholder="Enter Business Email"
                aria-required="true"
              />
            </div>
            {state.errors?.email && (
              <p className="mt-1 text-xs text-rose-600 font-medium">{state.errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="contact-company" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Company / Organization Name
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/70 border border-slate-200/90 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#05A7D4] focus:ring-2 focus:ring-[#05A7D4]/20 outline-none transition-all duration-200"
                placeholder="Enter Company Name"
              />
            </div>
          </div>
        </div>

        {/* Phone Number Full Width */}
        <div>
          <label htmlFor="contact-phone" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone Number
          </label>
          <div className="flex gap-2">
            <select
              id="contact-countryCode"
              name="countryCode"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-28 sm:w-32 px-2.5 py-2.5 bg-slate-50/70 border border-slate-200/90 rounded-xl text-xs font-bold text-slate-800 focus:bg-white focus:border-[#05A7D4] focus:ring-2 focus:ring-[#05A7D4]/20 outline-none transition-all duration-200 shrink-0 cursor-pointer"
              aria-label="Select Country Code"
            >
              {countries.map((item) => (
                <option key={`${item.iso}-${item.code}`} value={item.code}>
                  {item.flag} {item.shortCode} {item.code}
                </option>
              ))}
            </select>

            <div className="relative flex-1">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50/70 border border-slate-200/90 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#05A7D4] focus:ring-2 focus:ring-[#05A7D4]/20 outline-none transition-all duration-200"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
        </div>

        {/* Project Message */}
        <div>
          <label htmlFor="contact-message" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Tell Us About Your Project <span className="text-[#ED396D]">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className={`w-full p-3.5 bg-slate-50/70 border ${
              state.errors?.message ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200/90'
            } rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#05A7D4] focus:ring-2 focus:ring-[#05A7D4]/20 outline-none transition-all duration-200 resize-none`}
            placeholder="Describe your project goals, scope, or requirements..."
            aria-required="true"
          />
          {state.errors?.message && (
            <p className="mt-1 text-xs text-rose-600 font-medium">{state.errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3.5 px-6 bg-gradient-to-r from-[#ED396D] via-[#05A7D4] to-[#037C9E] hover:from-[#d82a5e] hover:to-[#0390b5] disabled:opacity-60 text-white text-sm font-extrabold rounded-xl transition-all duration-300 shadow-lg shadow-[#05A7D4]/15 hover:shadow-xl hover:shadow-[#05A7D4]/25 flex items-center justify-center gap-2 cursor-pointer mt-3 group"
          aria-busy={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending Request...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-400 text-center font-normal pt-1">
          🔒 Confidential. We execute NDAs prior to sensitive project discussions.
        </p>
      </form>
    </div>
  )
}





