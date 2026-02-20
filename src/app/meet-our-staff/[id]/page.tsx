import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SITE } from '@/lib/constants';
import providersData from '@/data/providers.json';
import { Phone, MapPin, Award, GraduationCap, Building2, Quote, ChevronRight, Stethoscope } from 'lucide-react';

interface Provider {
  name: string;
  credentials: string;
  photo: string | null;
  specialty: string[];
  title: string;
  practicing_since?: number;
  licensed_since?: number;
  experience_years?: string;
  education: {
    medical_school?: string;
    chiropractic_school?: string;
    graduation_year: number;
    undergraduate?: string;
  };
  board_certifications?: string[];
  fellowships?: string[];
  hospital_affiliations?: string[];
  locations: string[];
  services: string[];
  bio: string;
  patient_quote?: string;
  telehealth?: boolean;
  languages?: string[];
  npi?: string;
  treatment_approach?: string;
  adjustment_methods?: { name: string; description: string }[];
  rating?: { score: number; out_of: number; reviews: number; source: string };
}

function getSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export async function generateStaticParams() {
  return (providersData.providers as Provider[]).map((p) => ({
    id: getSlug(p.name),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const provider = (providersData.providers as Provider[]).find(
    (p) => getSlug(p.name) === id
  );
  if (!provider) return { title: 'Provider Not Found' };
  return {
    title: `${provider.name}, ${provider.credentials} — ${provider.specialty.join(' & ')}`,
    description: provider.bio.slice(0, 160),
  };
}

export default async function ProviderDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const provider = (providersData.providers as Provider[]).find(
    (p) => getSlug(p.name) === id
  );

  if (!provider) notFound();

  const photoPath = provider.photo
    ? provider.photo.replace('../assets/', '/assets/')
    : null;

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 px-6 py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight size={14} />
          <Link href="/meet-our-staff" className="hover:text-blue-600">Meet Our Staff</Link>
          <ChevronRight size={14} />
          <span className="text-gray-800 font-medium">{provider.name}</span>
        </div>
      </nav>

      {/* Provider Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left column: Photo + CTAs */}
          <div className="lg:col-span-1">
            {/* Photo */}
            <div className="relative h-80 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden mb-6 flex items-center justify-center">
              {photoPath ? (
                <Image
                  src={photoPath}
                  alt={`Photo of ${provider.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-blue-300">
                  <Stethoscope size={64} />
                  <span className="text-sm font-medium text-blue-400">Photo coming soon</span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="block text-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Request Appointment
              </Link>
              <a
                href={SITE.phoneTel}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Phone size={16} />
                {SITE.phone}
              </a>
              <Link
                href="/insurance"
                className="block text-center px-4 py-3 bg-gray-100 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-200 transition-colors"
              >
                Check Insurance Coverage →
              </Link>
            </div>

            {/* Quick info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm flex flex-col gap-2">
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{provider.locations.join(', ')}</span>
              </div>
              {provider.telehealth && (
                <div className="flex items-center gap-2 text-green-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  Telehealth Available
                </div>
              )}
              {provider.npi && (
                <div className="text-gray-400 text-xs">NPI: {provider.npi}</div>
              )}
              {provider.languages && (
                <div className="text-gray-500">Languages: {provider.languages.join(', ')}</div>
              )}
            </div>
          </div>

          {/* Right column: Bio + details */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-3">
              {provider.specialty.map((s) => (
                <span key={s} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
                  {s}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              {provider.name}, {provider.credentials}
            </h1>
            <p className="text-lg text-gray-500 mb-6">{provider.title}</p>

            {/* Bio */}
            <p className="text-gray-700 leading-relaxed text-base mb-8">{provider.bio}</p>

            {/* Treatment approach (chiro) */}
            {provider.treatment_approach && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
                <h3 className="font-semibold text-blue-900 mb-2">Treatment Approach</h3>
                <p className="text-blue-800 text-sm leading-relaxed">{provider.treatment_approach}</p>
              </div>
            )}

            {/* Adjustment methods (chiro) */}
            {provider.adjustment_methods && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Adjustment Methods</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {provider.adjustment_methods.map((m) => (
                    <div key={m.name} className="p-4 border border-gray-200 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-1">{m.name}</h4>
                      <p className="text-sm text-gray-600">{m.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Services */}
            {provider.services && provider.services.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Services Provided</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {provider.services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Education */}
            {provider.education && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <GraduationCap size={20} className="text-blue-600" /> Education
              </h3>
              <div className="flex flex-col gap-2">
                {provider.education.medical_school && (
                  <p className="text-sm text-gray-700">
                    <strong>Medical School:</strong> {provider.education.medical_school} ({provider.education.graduation_year})
                  </p>
                )}
                {provider.education.chiropractic_school && (
                  <p className="text-sm text-gray-700">
                    <strong>Chiropractic School:</strong> {provider.education.chiropractic_school} ({provider.education.graduation_year})
                  </p>
                )}
                {provider.education.undergraduate && (
                  <p className="text-sm text-gray-700">
                    <strong>Undergraduate:</strong> {provider.education.undergraduate}
                  </p>
                )}
              </div>
            </div>
            )}

            {/* Board Certifications */}
            {provider.board_certifications && provider.board_certifications.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award size={20} className="text-green-600" /> Board Certifications
                </h3>
                <ul className="flex flex-col gap-2">
                  {provider.board_certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500">✓</span> {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Fellowships */}
            {provider.fellowships && provider.fellowships.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Fellowships & Honors</h3>
                <ul className="flex flex-col gap-2">
                  {provider.fellowships.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-500">✦</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Hospital Affiliations */}
            {provider.hospital_affiliations && provider.hospital_affiliations.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 size={20} className="text-blue-600" /> Hospital Affiliations
                </h3>
                <ul className="flex flex-col gap-2">
                  {provider.hospital_affiliations.map((h) => (
                    <li key={h} className="text-sm text-gray-700">{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Patient Quote */}
            {provider.patient_quote && (
              <blockquote className="border-l-4 border-blue-600 pl-5 py-2 mb-8">
                <Quote size={20} className="text-blue-300 mb-2" />
                <p className="text-gray-700 italic text-base leading-relaxed">&ldquo;{provider.patient_quote}&rdquo;</p>
                <footer className="mt-2 text-sm text-gray-500 font-medium">— Patient Review</footer>
              </blockquote>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-600 py-12 px-6">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Schedule an Appointment with {provider.name.split(' ').slice(0, 2).join(' ')}</h2>
          <p className="text-blue-100 mb-6">We&apos;re accepting new patients. Call us or submit a request online.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Request Appointment
            </Link>
            <a
              href={SITE.phoneTel}
              className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
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
