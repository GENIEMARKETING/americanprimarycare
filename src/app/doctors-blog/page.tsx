import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_TOPICS, SITE } from '@/lib/constants';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Doctor's Blog",
  description: 'Health tips and wellness articles from the physicians at American Primary Care. Topics include heart disease, diabetes, nutrition, stress management, and more.',
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Health Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Doctor&apos;s Blog</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Health tips, wellness guides, and awareness resources from our team of physicians.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_TOPICS.map((topic) => (
            <Link key={topic.slug} href={`/doctors-blog/${topic.slug}`} className="group">
              <article className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Health Guide</span>
                  <h2 className="text-lg font-bold text-gray-900 mt-1 mb-2 group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h2>
                  <p className="text-sm text-blue-600 font-medium">Read Article →</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 border-t border-blue-100 py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Have a Health Question?</h2>
          <p className="text-gray-600 text-sm mb-6">
            Our physicians are here to help. Schedule an appointment or call us today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Schedule a Checkup
            </Link>
            <a href={SITE.phoneTel} className="flex items-center gap-2 px-5 py-2.5 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm">
              <Phone size={15} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
