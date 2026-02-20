import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Shield } from 'lucide-react';
import { SITE } from '@/lib/constants';
import insuranceData from '@/data/insurance.json';

export const metadata: Metadata = {
  title: 'Insurance Accepted',
  description: 'American Primary Care accepts 40+ insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Humana, Medicare, Medicaid, and more.',
};

interface InsurancePlans {
  [carrier: string]: string[];
}

interface InsuranceLogos {
  [carrier: string]: string;
}

export default function InsurancePage() {
  const plans = insuranceData.insurance_plans as InsurancePlans;
  const logos = insuranceData.logos as InsuranceLogos;
  const carriers = Object.keys(plans);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Coverage</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insurance Accepted</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            We accept 40+ insurance plans from all major carriers, including Medicare and Medicaid. Call us to verify your specific plan.
          </p>
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Phone size={16} />
            Call to Verify: {SITE.phone}
          </a>
        </div>
      </section>

      {/* Insurance logos */}
      <section className="border-b border-gray-200 bg-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Major Carriers</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {Object.entries(logos).map(([carrier, logoPath]) => {
              const path = logoPath.replace('../assets/', '/assets/');
              return (
                <div key={carrier} className="flex items-center">
                  <Image
                    src={path}
                    alt={`${carrier} insurance logo`}
                    width={140}
                    height={50}
                    className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              );
            })}
            <div className="text-sm text-gray-400 font-medium">+ Many more</div>
          </div>
        </div>
      </section>

      {/* Plans by carrier */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-start gap-3">
          <Shield size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Insurance plans change frequently. Call us at{' '}
            <a href={SITE.phoneTel} className="font-semibold underline">{SITE.phone}</a>{' '}
            to verify that your specific plan is currently accepted at your preferred location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {carriers.map((carrier) => (
            <div key={carrier} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block flex-shrink-0" />
                {carrier}
              </h2>
              <ul className="flex flex-col gap-2">
                {plans[carrier].map((plan) => (
                  <li key={plan} className="text-sm text-gray-600 pl-4 border-l-2 border-gray-100">
                    {plan}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-12 px-6">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Don&apos;t See Your Plan?</h2>
          <p className="text-blue-100 mb-6">
            We accept many additional plans not listed here. Call our office to verify your insurance and schedule an appointment.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={SITE.phoneTel}
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Phone size={16} />
              {SITE.phone}
            </a>
            <Link href="/contact" className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
