import { MetadataRoute } from 'next';
import { SITE, BLOG_TOPICS } from '@/lib/constants';
import providersData from '@/data/providers.json';

function getSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date().toISOString();

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/about-us`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/meet-our-staff`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/insurance`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/patient-forms`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${base}/doctors-blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
  ];

  const providerPages = providersData.providers.map((p) => ({
    url: `${base}/meet-our-staff/${getSlug(p.name)}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = BLOG_TOPICS.map((t) => ({
    url: `${base}/doctors-blog/${t.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...providerPages, ...blogPages];
}
