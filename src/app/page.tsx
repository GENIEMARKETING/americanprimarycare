import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Shield, Stethoscope, Zap, MapPin, ChevronRight, Award, Users } from 'lucide-react';
import { SITE, LOCATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'American Primary Care | Setting a Higher Standard in Healthcare',
  description:
    'American Primary Care — 20+ years of managed care experience in Palm Harbor, New Port Richey, and Holiday, FL. Internal Medicine, Pulmonology, Chiropractic. Accepting new patients. Call (727) 771-7200.',
};

const serviceBoxes = [
  {
    icon: Stethoscope,
    title: 'Complete Health Care',
    text: 'Whether you suffer from hypertension, diabetes, coronary artery disease, or more, you\'ll get the care you need.',
    link: '/services',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Zap,
    title: 'Chiropractic Services',
    text: 'Dr. Amar Patel\'s chiropractic experience can help alleviate your chronic or intermittent pain fast.',
    link: '/services',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    text: 'When you need help, we\'re available 24/7 to take your call. Your call will be returned promptly.',
    link: '/contact',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Shield,
    title: 'Insurance Accepted',
    text: 'We accept over 40 insurance plans including Medicare and Medicaid so all our patients can get the care they need.',
    link: '/insurance',
    color: 'bg-purple-50 text-purple-600',
  },
];

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '4', label: 'Locations' },
  { value: '5', label: 'Specialties' },
  { value: '40+', label: 'Insurance Plans' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Now Accepting New Patients
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-balance">
              Complete Healthcare<br />
              <span className="text-blue-200">for Your Family</span>
            </h1>

            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
              20+ years of managed care experience. Internal Medicine, Pulmonology, and Chiropractic services across 4 convenient Tampa Bay locations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
              >
                Request Appointment
              </Link>
              <a
                href={SITE.phoneTel}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 border border-white/30 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Phone size={17} />
                {SITE.phone}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-blue-200">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} />
                Palm Harbor · New Port Richey · Holiday
              </span>
            </div>
          </div>

          {/* Hero image side */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-blue-900/40 border border-white/10">
                <Image
                  src="/assets/slider-banners/nurse-caring-for-elderly.png"
                  alt="Compassionate healthcare at American Primary Care"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 1280px) 0px, 400px"
                  priority
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award size={18} className="text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-800">Board Certified</div>
                  <div className="text-xs text-gray-500">ABIM · ABGM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <div className="text-3xl font-extrabold text-blue-600 leading-none mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE BOXES ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Care Under One Roof</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            From routine checkups to specialized care, our experienced team is here for you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceBoxes.map((box) => {
            const Icon = box.icon;
            return (
              <Link key={box.title} href={box.link} className="group">
                <div className="h-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                  <div className={`w-12 h-12 ${box.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{box.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{box.text}</p>
                  <span className="text-sm text-blue-600 font-semibold group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Setting a Higher Standard in Healthcare
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              American Primary Care boasts 20+ years of managed care experience, helping patients with diabetes, hypertension, coronary artery disease, renal disease, endocrine disorders, and more.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Sadhana Shah has been practicing medicine since 1992 and is board certified by the American Board of Internal Medicine, the American Board of Geriatric Medicine, and the American College of Specialist in Geriatrics.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['English', 'Russian', 'Spanish', 'Gujarati'].map((lang) => (
                <span key={lang} className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                  {lang}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/about-us"
                className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                Learn About Our Practice
              </Link>
              <Link
                href="/meet-our-staff"
                className="flex items-center gap-1.5 px-5 py-2.5 border border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                <Users size={15} />
                Meet Our Doctors
              </Link>
            </div>
          </div>

          {/* About image */}
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/slider-banners/medical-team-group.png"
              alt="The American Primary Care medical team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── PROVIDERS PREVIEW ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-1">Our Team</p>
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Physicians</h2>
          </div>
          <Link
            href="/meet-our-staff"
            className="hidden sm:flex items-center gap-1.5 text-blue-600 font-semibold hover:underline text-sm"
          >
            View All Staff <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Dr. Sadhana A. Shah',
              credentials: 'MD',
              specialty: 'Internal Medicine · Geriatrics',
              photo: '/assets/staff-photos/dr-sadhana-shah.jpg',
              slug: 'dr-sadhana-a-shah',
            },
            {
              name: 'Dr. Varun Bhaskar',
              credentials: 'MD',
              specialty: 'Pulmonology · Critical Care · Sleep Medicine',
              photo: null,
              slug: 'dr-varun-bhaskar',
            },
            {
              name: 'Dr. Amar G. Patel',
              credentials: 'DC',
              specialty: 'Chiropractic',
              photo: '/assets/staff-photos/dr-amar-patel.jpg',
              slug: 'dr-amar-g-patel',
            },
          ].map((provider) => (
            <Link key={provider.name} href={`/meet-our-staff/${provider.slug}`} className="group">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:border-blue-200">
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  {provider.photo ? (
                    <Image
                      src={provider.photo}
                      alt={provider.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <Stethoscope size={40} className="text-blue-300" />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {provider.name}, {provider.credentials}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 mb-3">{provider.specialty}</p>
                  <span className="text-xs text-blue-600 font-semibold">View Profile →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/meet-our-staff"
            className="inline-flex items-center gap-1.5 text-blue-600 font-semibold"
          >
            View All Staff <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── APPOINTMENT CTA BAND ── */}
      <section className="bg-blue-600 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to Become a Patient?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Call us today or request an appointment online. We accept Medicare, Medicaid, and 40+ other insurance plans.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-md"
            >
              Request Appointment
            </Link>
            <a
              href={SITE.phoneTel}
              className="flex items-center gap-2 px-7 py-3.5 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors border border-white/20"
            >
              <Phone size={17} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS PREVIEW ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-1">Find Us</p>
            <h2 className="text-3xl font-bold text-gray-900">4 Convenient Locations</h2>
          </div>
          <Link
            href="/locations"
            className="hidden sm:flex items-center gap-1.5 text-blue-600 font-semibold hover:underline text-sm"
          >
            All Locations <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {LOCATIONS.map((loc) => (
            <div key={loc.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <MapPin size={16} className="text-red-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{loc.name}</h3>
              <p className="text-xs text-gray-500 mb-1">{loc.address}</p>
              <p className="text-xs text-gray-500 mb-4">{loc.city}, {loc.state} {loc.zip}</p>
              <a
                href={loc.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 font-semibold hover:underline flex items-center gap-1"
              >
                <MapPin size={11} />
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
