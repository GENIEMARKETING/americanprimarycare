'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle } from 'lucide-react';

const schema = z.object({
  name:              z.string().min(2, 'Name is required'),
  email:             z.string().email('Enter a valid email address'),
  phone:             z.string().min(7, 'Phone number is required'),
  preferredProvider: z.string().optional(),
  isNewPatient:      z.boolean(),
  message:           z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const providers = [
  'Dr. Sadhana A. Shah (Internal Medicine / Geriatrics)',
  'Dr. Varun Bhaskar (Pulmonology)',
  'Dr. Amar G. Patel (Chiropractic)',
  'Dr. McGaha (Family Medicine)',
  'No preference',
];

export default function ContactFormWrapper() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { isNewPatient: true },
  });

  async function onSubmit(data: FormData) {
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please call us directly at (727) 771-7200.');
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="text-xl font-bold text-gray-900">Request Received!</h3>
        <p className="text-gray-600 max-w-sm">
          Thank you for reaching out. Our team will contact you within 1 business day to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register('name')}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Jane Smith"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="(727) 555-0123"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register('email')}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="jane@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="preferredProvider" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Preferred Provider
        </label>
        <select
          id="preferredProvider"
          {...register('preferredProvider')}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        >
          <option value="">Select a provider (optional)</option>
          {providers.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message / Reason for Visit
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
          placeholder="Briefly describe the reason for your visit or any questions you have..."
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          id="isNewPatient"
          type="checkbox"
          {...register('isNewPatient')}
          className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="isNewPatient" className="text-sm text-gray-700">
          I am a new patient
        </label>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {error}
        </div>
      )}

      <p className="text-xs text-gray-400">
        By submitting this form, you agree that we may contact you by phone or email to confirm your appointment. 
        Do not include sensitive medical information in this form.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting && <Loader2 size={16} className="animate-spin" />}
        {isSubmitting ? 'Sending...' : 'Request Appointment'}
      </button>
    </form>
  );
}
