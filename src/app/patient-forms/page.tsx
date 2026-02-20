import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Download, Phone } from 'lucide-react';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Patient Forms',
  description: 'Download patient forms for American Primary Care. Medical records release form and medication list available for download.',
};

const forms = [
  {
    title: 'Medical Records Release Form',
    description: 'Use this form to authorize the release of your medical records to another provider, insurance company, or yourself.',
    filename: 'MEDICAL-RECORDS-RELEASE-FORM.docx',
    path: '/documents/patient-forms/MEDICAL-RECORDS-RELEASE-FORM.docx',
  },
  {
    title: 'Medication List',
    description: 'Use this form to maintain an up-to-date list of all your current medications, dosages, and prescribing physicians.',
    filename: 'MEDICATION-LIST.docx',
    path: '/documents/patient-forms/MEDICATION-LIST.docx',
  },
];

export default function PatientForms() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Forms</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Download and complete these forms before your appointment to save time at the office.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid gap-6">
          {forms.map((form) => (
            <div key={form.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText size={22} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-900 mb-1">{form.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{form.description}</p>
                <a
                  href={form.path}
                  download={form.filename}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download size={15} />
                  Download {form.filename.split('.').pop()?.toUpperCase()} Form
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-xl">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Need Additional Forms?</h2>
          <p className="text-gray-600 text-sm mb-4">
            If you need other paperwork or have questions about your forms, please contact our office.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us
            </Link>
            <a href={SITE.phoneTel} className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors">
              <Phone size={14} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
