export const SITE = {
  name: 'American Primary Care',
  tagline: 'Setting a Higher Standard in Healthcare',
  phone: '(727) 771-7200',
  phoneTel: 'tel:+17277717200',
  fax: '(727) 216-1396',
  email: 'info@americanprimarycare.com',
  url: 'https://www.americanprimarycare.com',
  npi: '1194755439',
  hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
  languages: ['English', 'Russian', 'Spanish', 'Gujarati'],
  socialMedia: {
    facebook: '',
    twitter: '',
  },
} as const;

export const LOCATIONS = [
  {
    name: 'Palm Harbor — Main Office',
    address: '2855 Alt 19 N, Suite 101',
    city: 'Palm Harbor',
    state: 'FL',
    zip: '34683',
    phone: '(727) 771-7200',
    hours: 'Mon–Fri 9:00 AM – 5:00 PM',
    googleMapsUrl: 'https://maps.google.com/?q=2855+Alt+19+N+Palm+Harbor+FL+34683',
    providers: ['Dr. Sadhana A. Shah', 'Dr. Varun Bhaskar'],
  },
  {
    name: 'Palm Harbor — Tampa Rd',
    address: '2595 Tampa Rd, Suite P',
    city: 'Palm Harbor',
    state: 'FL',
    zip: '34684',
    phone: '(727) 771-7200',
    hours: 'Mon–Fri 9:00 AM – 5:00 PM',
    googleMapsUrl: 'https://maps.google.com/?q=2595+Tampa+Rd+Palm+Harbor+FL+34684',
    providers: ['Christina Tomasino, PA-C'],
  },
  {
    name: 'New Port Richey',
    address: '5307 Main St, Suite 104',
    city: 'New Port Richey',
    state: 'FL',
    zip: '34652',
    phone: '(727) 771-7200',
    hours: 'Mon–Fri 9:00 AM – 5:00 PM',
    googleMapsUrl: 'https://maps.google.com/?q=5307+Main+St+New+Port+Richey+FL+34652',
    providers: ['Dr. Sadhana A. Shah', 'Dr. Amar G. Patel'],
  },
  {
    name: 'Holiday',
    address: '4553 Mile Stretch Dr',
    city: 'Holiday',
    state: 'FL',
    zip: '34690',
    phone: '(727) 771-7200',
    hours: 'Mon–Fri 9:00 AM – 5:00 PM',
    googleMapsUrl: 'https://maps.google.com/?q=4553+Mile+Stretch+Dr+Holiday+FL+34690',
    providers: ['Dr. McGaha'],
  },
] as const;

export const NAV_LINKS = [
  { label: 'Home',         href: '/' },
  { label: 'About Us',     href: '/about-us' },
  { label: 'Our Doctors',  href: '/meet-our-staff' },
  { label: 'Services',     href: '/services' },
  { label: 'Locations',    href: '/locations' },
  { label: 'Insurance',    href: '/insurance' },
  { label: 'Patient Forms',href: '/patient-forms' },
  { label: 'Blog',         href: '/doctors-blog' },
] as const;

export const BLOG_TOPICS = [
  { slug: 'stress-management',      title: 'Stress Management',              image: '/assets/blog-images/stress-management.jpg' },
  { slug: 'national-kidney-month',  title: 'National Kidney Month',          image: '/assets/blog-images/national-kidney-month.jpg' },
  { slug: 'alzheimers-awareness',   title: "Alzheimer's Awareness",          image: '/assets/blog-images/alzheimers-awareness.jpg' },
  { slug: 'heart-disease-prevention', title: 'Heart Disease Prevention',     image: '/assets/blog-images/heart-disease-prevention.jpg' },
  { slug: 'healthy-weight',         title: 'Obesity & Healthy Weight',       image: '/assets/blog-images/obesity-healthy-weight.jpg' },
  { slug: 'osteoporosis',           title: 'Osteoporosis',                   image: '/assets/blog-images/osteoporosis.jpg' },
  { slug: 'stroke-awareness',       title: 'Stroke Awareness Month',         image: '/assets/blog-images/stroke-awareness-month.jpg' },
  { slug: 'flu-prevention',         title: 'Flu Prevention & Vaccines',      image: '/assets/blog-images/flu-prevention.gif' },
  { slug: 'nutrition',              title: 'Nutrition & Healthy Eating',     image: '/assets/blog-images/healthy-nutrition.jpg' },
  { slug: 'autism-awareness',       title: 'Autism Awareness Month',         image: '/assets/blog-images/autism-awareness-month.jpg' },
  { slug: 'arthritis',              title: 'Arthritis',                      image: '/assets/blog-images/arthritis-video-thumb.jpg' },
] as const;

export const PROVIDER_SLUGS: Record<string, string> = {
  'dr-sadhana-shah': 'Dr. Sadhana A. Shah',
  'dr-varun-bhaskar': 'Dr. Varun Bhaskar',
  'dr-amar-patel':   'Dr. Amar G. Patel',
  'dr-mcgaha':       'Dr. McGaha',
  'christina-tomasino': 'Christina Tomasino',
};
