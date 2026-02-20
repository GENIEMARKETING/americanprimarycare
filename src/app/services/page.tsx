import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Stethoscope, Wind, Zap, Sparkles, Clock } from 'lucide-react';
import { SITE } from '@/lib/constants';
import servicesData from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'American Primary Care offers Internal Medicine, Pulmonology, Chiropractic, and Cosmetic/Medspa services in Palm Harbor, New Port Richey, and Holiday, FL.',
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  stethoscope: Stethoscope,
  lungs: Wind,
  spine: Zap,
  syringe: Sparkles,
};

interface ServiceCategory {
  category: string;
  icon: string;
  homepage_box?: { title: string; description: string };
  services?: string[];
}

export default function ServicesPage() {
  const categories = servicesData.service_categories as ServiceCategory[];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Comprehensive healthcare across 5 specialties — from internal medicine and pulmonology to chiropractic and cosmetic services.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12">
        {categories.filter(c => c.services && c.services.length > 0).map((cat) => {
          const Icon = iconMap[cat.icon] || Stethoscope;
          return (
            <div key={cat.category} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{cat.category}</h2>
                {cat.homepage_box && (
                  <p className="text-gray-600 text-sm leading-relaxed">{cat.homepage_box.description}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.services?.map((service) => (
                    <li key={service} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* 24/7 card */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock size={28} className="text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-900 mb-2">24/7 Availability</h2>
            <p className="text-gray-600">
              When you need help, we&apos;re available 24/7 to take your call. Your call will be returned promptly so you know what steps to take next.
            </p>
          </div>
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0"
          >
            <Phone size={16} />
            {SITE.phone}
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Questions About Our Services?</h2>
          <p className="text-gray-600 mb-6">
            Call our office or request an appointment. We accept 40+ insurance plans including Medicare and Medicaid.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Request Appointment
            </Link>
            <Link href="/insurance" className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Check Insurance Coverage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
