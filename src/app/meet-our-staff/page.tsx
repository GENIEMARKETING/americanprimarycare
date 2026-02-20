import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/constants';
import providersData from '@/data/providers.json';
import { Phone, MapPin, Award, Stethoscope } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meet Our Staff',
  description: 'Meet the physicians and staff at American Primary Care. Dr. Sadhana Shah (Internal Medicine), Dr. Varun Bhaskar (Pulmonology), Dr. Amar Patel (Chiropractic), and more.',
};

interface Provider {
  name: string;
  credentials: string;
  photo: string | null;
  specialty: string[];
  title: string;
  locations: string[];
  bio: string;
  board_certifications?: string[];
  patient_quote?: string;
}

function getSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function ProviderCard({ provider }: { provider: Provider }) {
  const slug = getSlug(provider.name);
  const photoPath = provider.photo
    ? provider.photo.replace('../assets/', '/assets/')
    : null;

  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Photo */}
      <div className="relative h-56 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        {photoPath ? (
          <Image
            src={photoPath}
            alt={`Photo of ${provider.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-blue-300">
            <Stethoscope size={48} />
            <span className="text-sm font-medium text-blue-400">Photo coming soon</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {provider.specialty.map((s) => (
            <span key={s} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
              {s}
            </span>
          ))}
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-0.5">
          {provider.name}, {provider.credentials}
        </h2>
        <p className="text-sm text-gray-500 mb-3">{provider.title}</p>

        <div className="flex items-start gap-1.5 text-xs text-gray-500 mb-4">
          <MapPin size={12} className="mt-0.5 text-blue-500 flex-shrink-0" />
          <span>{provider.locations.join(' · ')}</span>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
          {provider.bio}
        </p>

        {provider.board_certifications && provider.board_certifications.length > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-green-700 mb-4">
            <Award size={12} />
            <span>Board Certified</span>
          </div>
        )}

        <Link
          href={`/meet-our-staff/${slug}`}
          className="block w-full text-center px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Full Profile
        </Link>
      </div>
    </article>
  );
}

export default function MeetOurStaff() {
  const providers = providersData.providers as Provider[];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Our Team</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Physicians</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Our team of 4 physicians across 5 specialties brings decades of experience and a commitment to
            personalized care for every patient.
          </p>
        </div>
      </section>

      {/* Provider Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((p) => (
            <ProviderCard key={p.name} provider={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Become a Patient?</h2>
          <p className="text-gray-600 mb-6">
            Call our office or request an appointment online. We&apos;re accepting new patients at all locations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request Appointment
            </Link>
            <a
              href={SITE.phoneTel}
              className="flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Phone size={16} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
