import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BLOG_TOPICS, SITE } from '@/lib/constants';
import { Phone, ChevronRight, Stethoscope } from 'lucide-react';

export async function generateStaticParams() {
  return BLOG_TOPICS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = BLOG_TOPICS.find((t) => t.slug === slug);
  if (!topic) return { title: 'Not Found' };
  return {
    title: topic.title,
    description: `Learn about ${topic.title} from the physicians at American Primary Care serving Palm Harbor, New Port Richey, and Holiday, FL.`,
  };
}

const ARTICLE_CONTENT: Record<string, string> = {
  'heart-disease-prevention': 'Heart disease is the leading cause of death in the United States. However, many risk factors are controllable through lifestyle changes. Regular exercise, a heart-healthy diet low in saturated fats and sodium, not smoking, and managing conditions like hypertension and diabetes can significantly reduce your risk. Regular checkups with your primary care physician are essential for monitoring your heart health.',
  'stress-management': 'Chronic stress can take a serious toll on your physical and mental health, contributing to high blood pressure, heart disease, diabetes, and depression. Effective stress management techniques include regular exercise, mindfulness meditation, adequate sleep (7-9 hours per night), and maintaining strong social connections. If stress is affecting your daily life, speak with your doctor.',
  'national-kidney-month': 'Your kidneys filter about 200 quarts of blood each day, removing waste and excess fluids. Chronic kidney disease (CKD) affects 1 in 7 adults in the US. Risk factors include diabetes, high blood pressure, and a family history of kidney failure. Annual kidney function tests (creatinine, GFR) are recommended for those at risk. Stay hydrated, maintain a healthy weight, and avoid overuse of NSAIDs.',
  'alzheimers-awareness': 'Alzheimer\'s disease is the most common form of dementia, affecting over 6 million Americans. While there is no cure, early diagnosis allows for better management and planning. Warning signs include memory loss that disrupts daily life, confusion with time or place, and changes in mood or personality. Regular cognitive screenings are available at our office.',
  'healthy-weight': 'Maintaining a healthy weight reduces your risk of heart disease, type 2 diabetes, hypertension, and certain cancers. The key is a balanced approach: a nutritious diet rich in vegetables, fruits, and lean proteins combined with regular physical activity. Aim for at least 150 minutes of moderate aerobic activity per week. Small, sustainable changes are more effective than extreme diets.',
  'osteoporosis': 'Osteoporosis causes bones to become weak and brittle, leading to fractures that can be life-altering. Women over 65 and men over 70 should be screened with a bone density scan. Key preventive measures include adequate calcium and vitamin D intake, weight-bearing exercise, and avoiding smoking and excessive alcohol. Talk to your doctor about your bone health risk.',
  'stroke-awareness': 'Stroke is a medical emergency. Remember the acronym FAST: Face drooping, Arm weakness, Speech difficulty, Time to call 911. Every minute counts — getting treatment quickly can limit brain damage. Risk factors include high blood pressure, atrial fibrillation, diabetes, smoking, and obesity. Regular checkups and blood pressure control are your best prevention.',
  'flu-prevention': 'The flu vaccine remains the best protection against influenza and its complications. It is recommended annually for everyone 6 months and older. Beyond vaccination, frequent handwashing, avoiding touching your face, and staying home when sick are key preventive measures. High-risk groups — including those 65+, pregnant women, and those with chronic conditions — should be especially vigilant.',
  'nutrition': 'A balanced diet is the foundation of good health. Focus on whole foods: colorful vegetables and fruits, lean proteins (fish, poultry, legumes), whole grains, and healthy fats (olive oil, nuts, avocado). Limit processed foods, added sugars, and sodium. Aim to fill half your plate with vegetables at each meal. Proper nutrition helps prevent and manage many chronic conditions.',
  'autism-awareness': 'Autism Spectrum Disorder (ASD) affects approximately 1 in 36 children in the US. Early diagnosis and intervention lead to significantly better outcomes. Signs may include delayed speech, limited eye contact, repetitive behaviors, and difficulty with social interactions. If you have concerns about your child\'s development, speak with your pediatrician or primary care physician.',
  'arthritis': 'Arthritis — inflammation of the joints — affects over 54 million Americans. The most common types are osteoarthritis and rheumatoid arthritis. Symptoms include joint pain, stiffness, and reduced range of motion. Management strategies include maintaining a healthy weight, regular low-impact exercise, physical therapy, and medications. Our team can help develop a personalized pain management plan.',
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = BLOG_TOPICS.find((t) => t.slug === slug);
  if (!topic) notFound();

  const content = ARTICLE_CONTENT[slug] || `Learn about ${topic.title} and how it affects your health. Our team of experienced physicians can provide personalized guidance and care. Schedule an appointment to discuss your specific concerns.`;

  const related = BLOG_TOPICS.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200 px-6 py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight size={14} />
          <Link href="/doctors-blog" className="hover:text-blue-600">Doctor&apos;s Blog</Link>
          <ChevronRight size={14} />
          <span className="text-gray-800 font-medium">{topic.title}</span>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero image */}
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 mb-8">
          <Image
            src={topic.image}
            alt={topic.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
           
          />
        </div>

        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Health Guide</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">{topic.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Stethoscope size={14} className="text-blue-500" />
          <span>American Primary Care Physicians</span>
        </div>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-base mb-10">
          <p>{content}</p>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-1">Schedule a Checkup</h3>
            <p className="text-sm text-gray-600">Have questions about {topic.title.toLowerCase()}? Our physicians can help.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Book Appointment
            </Link>
            <a href={SITE.phoneTel} className="flex items-center gap-2 px-4 py-2.5 border border-blue-600 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              <Phone size={14} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </article>

      {/* Related articles */}
      <section className="border-t border-gray-200 bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">More Health Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((t) => (
              <Link key={t.slug} href={`/doctors-blog/${t.slug}`} className="group">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-32 bg-gradient-to-br from-blue-50 to-blue-100">
                    <Image src={t.image} alt={t.title} fill className="object-cover" sizes="200px" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{t.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
