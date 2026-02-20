import type { Metadata } from 'next';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { SITE, LOCATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Locations',
  description: 'American Primary Care has 4 locations in Palm Harbor, New Port Richey, and Holiday, FL. Find directions, hours, and contact info for each office.',
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Find Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            4 convenient locations across Pinellas and Pasco County. Find the office closest to you.
          </p>
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Phone size={16} />
            {SITE.phone}
          </a>
        </div>
      </section>

      {/* Location Cards */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {LOCATIONS.map((loc) => (
          <article
            key={loc.name}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
          >
            {/* Map placeholder */}
            <div className="h-40 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={36} className="text-blue-400 mx-auto mb-1" />
                <p className="text-blue-500 text-sm font-medium">{loc.city}, FL</p>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{loc.name}</h2>

              <ul className="flex flex-col gap-3 mb-6">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    {loc.address}<br />{loc.city}, {loc.state} {loc.zip}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-blue-500 flex-shrink-0" />
                  <a href={SITE.phoneTel} className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                    {loc.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={16} className="text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{loc.hours}</span>
                </li>
              </ul>

              <div className="flex gap-3">
                <a
                  href={loc.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Navigation size={15} />
                  Get Directions
                </a>
                <a
                  href={SITE.phoneTel}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-blue-600 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Phone size={15} />
                  Call
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Hours note */}
      <section className="bg-gray-50 border-t border-gray-200 py-10 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Clock size={24} className="text-blue-600 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">After-Hours Care</h2>
          <p className="text-gray-600 text-sm">
            We&apos;re available 24/7. If you call after regular business hours, our answering service will contact your doctor for a prompt response.
          </p>
        </div>
      </section>
    </>
  );
}
