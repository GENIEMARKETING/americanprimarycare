import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Award, Users, MapPin, Clock } from 'lucide-react';
import { SITE, LOCATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about American Primary Care — 20+ years of managed care experience in the Tampa Bay area. Internal Medicine, Pulmonology, Chiropractic, and Geriatric care.',
};

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '4', label: 'Convenient Locations' },
  { value: '5', label: 'Specialties Offered' },
  { value: '40+', label: 'Insurance Plans Accepted' },
];

export default function AboutUs() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Setting a Higher Standard in Healthcare</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            American Primary Care has been serving the Tampa Bay area with comprehensive, compassionate healthcare for over 20 years.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Practice</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            American Primary Care boasts 20+ years of managed care experience, helping patients with diabetes, hypertension, coronary artery disease, renal disease, endocrine disorders, and more. Additionally, chiropractic services are available to alleviate chronic pain.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Dr. Sadhana Shah has been practicing medicine since 1992 and is one of the top physicians in the Tampa Bay area offering overall wellness programs. She is board certified by the American Board of Internal Medicine, the American Board of Geriatric Medicine, and the American College of Specialist in Geriatrics.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            When you need urgent healthcare, you&apos;ll find it at American Primary Care — call our office and the answering service will contact your doctor for a fast response. We are available 24/7 to take your call.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We have 4 convenient locations in Palm Harbor, New Port Richey, and Holiday to serve you. Our team speaks English, Russian, Spanish, and Gujarati, ensuring we can communicate effectively with patients from diverse backgrounds.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our mission is to provide comprehensive, patient-centered healthcare that treats the whole person — not just the symptoms. We believe in building long-term relationships with our patients and their families, guiding them through every stage of life with expert, compassionate care.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Languages We Speak</h2>
          <div className="flex flex-wrap gap-3">
            {SITE.languages.map((lang) => (
              <span key={lang} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Features */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <ul className="flex flex-col gap-4">
              {[
                { icon: Award, text: 'Board-certified physicians across multiple specialties' },
                { icon: Clock, text: '24/7 after-hours answering service' },
                { icon: MapPin, text: '4 convenient locations in the Tampa Bay area' },
                { icon: Users, text: 'Multilingual staff (English, Russian, Spanish, Gujarati)' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact card */}
          <div className="bg-blue-600 rounded-xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">Ready to Get Started?</h3>
            <p className="text-blue-100 text-sm mb-4">We&apos;re accepting new patients at all 4 locations.</p>
            <Link
              href="/contact"
              className="block text-center px-4 py-2.5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors mb-3"
            >
              Request Appointment
            </Link>
            <a
              href={SITE.phoneTel}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-semibold"
            >
              <Phone size={15} />
              {SITE.phone}
            </a>
          </div>

          {/* Locations list */}
          <div className="border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" /> Our Locations
            </h3>
            <ul className="flex flex-col gap-3">
              {LOCATIONS.map((loc) => (
                <li key={loc.name} className="text-sm text-gray-600">
                  <strong className="text-gray-800">{loc.city}</strong> — {loc.address}
                </li>
              ))}
            </ul>
            <Link
              href="/locations"
              className="mt-4 block text-sm text-blue-600 font-semibold hover:underline"
            >
              View all locations & hours →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
