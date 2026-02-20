import type { Metadata } from 'next';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { SITE, LOCATIONS } from '@/lib/constants';
import ContactFormWrapper from './ContactFormWrapper';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact American Primary Care or request an appointment. Call (727) 771-7200 or send us a message. We have 4 locations in the Tampa Bay area.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Request an appointment, ask a question, or find directions to your nearest location.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Request an Appointment</h2>
          <ContactFormWrapper />
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={SITE.phoneTel} className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={15} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">{SITE.phone}</div>
                    <div className="text-gray-400 text-xs">Main Line</div>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={15} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">{SITE.email}</div>
                    <div className="text-gray-400 text-xs">Email</div>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-700">
                <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={15} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">Mon–Fri: 9 AM – 5 PM</div>
                  <div className="text-gray-400 text-xs">24/7 Answering Service</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" /> Our Locations
            </h3>
            <ul className="flex flex-col gap-3">
              {LOCATIONS.map((loc) => (
                <li key={loc.name}>
                  <a
                    href={loc.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-semibold text-gray-800">{loc.city}</div>
                    <div>{loc.address}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
