import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { SITE, NAV_LINKS, LOCATIONS } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* ── CTA Band ── */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-white text-xl font-bold">Accepting New Patients</h2>
            <p className="text-blue-100 text-sm mt-1">
              Call us today or request an appointment online.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-white text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              Request Appointment
            </Link>
            <a
              href={SITE.phoneTel}
              className="px-5 py-2.5 bg-blue-700 text-white rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors flex items-center gap-2"
            >
              <Phone size={15} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1: Brand */}
        <div>
          <Image
            src="/assets/logo/american-primary-care-logo.png"
            alt="American Primary Care"
            width={160}
            height={48}
            className="h-10 w-auto object-contain brightness-0 invert mb-4"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            {SITE.tagline}. 20+ years of managed care experience serving the Tampa Bay area.
          </p>
          <p className="mt-4 text-gray-500 text-xs">
            Languages: {SITE.languages.join(' · ')}
          </p>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Locations */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Our Locations</h3>
          <ul className="flex flex-col gap-3">
            {LOCATIONS.map((loc) => (
              <li key={loc.name}>
                <a
                  href={loc.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-gray-400 text-sm hover:text-white transition-colors group"
                >
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-blue-400 group-hover:text-blue-300" />
                  <span>
                    <strong className="text-gray-300 font-medium">{loc.city}</strong>
                    <br />
                    {loc.address}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={SITE.phoneTel}
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
              >
                <Phone size={14} className="text-blue-400 flex-shrink-0" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
              >
                <Mail size={14} className="text-blue-400 flex-shrink-0" />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-gray-400 text-sm">
              <Clock size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
              <span>
                Mon – Fri: 9:00 AM – 5:00 PM
                <br />
                <span className="text-gray-500">After-hours: 24/7 answering service</span>
              </span>
            </li>
            <li className="mt-2">
              <Link
                href="/contact"
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send a Message
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            © {year} American Primary Care, Inc. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            NPI: {SITE.npi} &nbsp;|&nbsp; Fax: {SITE.fax}
          </p>
        </div>
      </div>
    </footer>
  );
}
