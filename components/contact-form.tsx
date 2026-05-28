"use client";

import { FormEvent, useMemo, useState } from "react";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  serviceInterest: "",
  message: ""
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const serviceOptions = useMemo(
    () => [
      "IPO Communications",
      "Investor Relations",
      "Public Relations",
      "Media Relations",
      "Corporate Events & Launches",
      "Crisis & Special Situation Communications",
      "Digital & Creative Communications Support",
      "Results & Annual Report Communications",
      "Disclosure Readiness Advisory",
      "General Enquiry"
    ],
    []
  );

  function validate(input: FormValues) {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!input.name.trim()) nextErrors.name = "Please provide your name.";
    if (!input.company.trim()) nextErrors.company = "Please provide your company name.";
    if (!input.email.trim()) {
      nextErrors.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!input.phone.trim()) {
      nextErrors.phone = "Please provide a contact number.";
    } else if (!/^[+\d][\d\s-]{7,20}$/.test(input.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!input.serviceInterest) nextErrors.serviceInterest = "Please select the service that best matches your enquiry.";
    if (!input.message.trim()) {
      nextErrors.message = "Please provide a short summary of your requirement.";
    } else if (input.message.trim().length < 20) {
      nextErrors.message = "Please provide a little more detail so we can route your enquiry correctly.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitted(false);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setValues(initialValues);
    }
  }

  return (
    <form
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-panel sm:p-8"
      onSubmit={handleSubmit}
      noValidate
      aria-describedby="form-support-note"
    >
      <p id="form-support-note" className="rounded-md border border-brand-100 bg-brand-50/50 px-3 py-2 text-xs text-slate-700">
        This prototype form currently captures enquiries on-page only. To enable email delivery, connect this form to an
        API route or CRM endpoint.
      </p>
      {submitAttempted && Object.keys(errors).length > 0 ? (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert" aria-live="assertive">
          Please review the highlighted fields before submitting.
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-800">
          Name
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            autoComplete="name"
            maxLength={80}
            required
          />
          {errors.name ? (
            <span id="name-error" className="mt-1 block text-xs text-red-700">
              {errors.name}
            </span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-slate-800">
          Company
          <input
            id="company"
            type="text"
            value={values.company}
            onChange={(event) => setValues((prev) => ({ ...prev, company: event.target.value }))}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            autoComplete="organization"
            maxLength={120}
            required
          />
          {errors.company ? (
            <span id="company-error" className="mt-1 block text-xs text-red-700">
              {errors.company}
            </span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-slate-800">
          Email
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
            required
          />
          {errors.email ? (
            <span id="email-error" className="mt-1 block text-xs text-red-700">
              {errors.email}
            </span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-slate-800">
          Phone
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            autoComplete="tel"
            inputMode="tel"
            maxLength={24}
            required
          />
          {errors.phone ? (
            <span id="phone-error" className="mt-1 block text-xs text-red-700">
              {errors.phone}
            </span>
          ) : null}
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-800">
        Service Interest
        <select
          id="service-interest"
          value={values.serviceInterest}
          onChange={(event) => setValues((prev) => ({ ...prev, serviceInterest: event.target.value }))}
          className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
          aria-invalid={Boolean(errors.serviceInterest)}
          aria-describedby={errors.serviceInterest ? "service-error" : undefined}
          required
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.serviceInterest ? (
          <span id="service-error" className="mt-1 block text-xs text-red-700">
            {errors.serviceInterest}
          </span>
        ) : null}
      </label>
      <label className="block text-sm font-medium text-slate-800">
        Message
        <textarea
          id="message"
          rows={6}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          maxLength={1200}
          required
        />
        {errors.message ? (
          <span id="message-error" className="mt-1 block text-xs text-red-700">
            {errors.message}
          </span>
        ) : null}
      </label>
      <button
        type="submit"
        className="btn-primary w-full sm:w-auto"
      >
        Submit Enquiry
      </button>
      {submitted ? (
        <p className="text-sm text-brand-700" role="status">
          Thank you. Your enquiry has been recorded. A consultant will follow up shortly.
        </p>
      ) : null}
    </form>
  );
}
