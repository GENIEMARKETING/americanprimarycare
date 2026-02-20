'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/constants';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Top bar (desktop) ── */}
      <div className="hidden md:block bg-blue-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-9">
          <p className="text-blue-100 text-xs">
            Mon – Fri: 9:00 AM – 5:00 PM &nbsp;|&nbsp; 4 locations in Pasco &amp; Pinellas County
          </p>
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-2 font-semibold hover:text-blue-200 transition-colors"
            aria-label={`Call us at ${SITE.phone}`}
          >
            <Phone size={14} />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* ── Main nav ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/assets/logo/american-primary-care-logo.png"
                alt="American Primary Care"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Request Appointment
              </Link>
              <a
                href={SITE.phoneTel}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone size={15} />
                {SITE.phone}
              </a>
            </div>

            {/* Mobile: tap-to-call + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={SITE.phoneTel}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg"
                aria-label={`Call ${SITE.phone}`}
              >
                <Phone size={15} />
                <span className="hidden sm:inline">{SITE.phone}</span>
                <span className="sm:hidden">Call</span>
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            className="lg:hidden border-t border-gray-100 bg-white shadow-lg"
            aria-label="Mobile navigation"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 pt-3 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Request an Appointment
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
