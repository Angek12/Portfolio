/**
 * Single source of truth for portfolio content.
 * Everything below comes from Ange's latest CV. Edit this file to update the site.
 *
 * TO REPLACE THE CV: overwrite  public/cv/Ange_Kevine_Uwayo_CV.pdf  (keep the same
 * file name) and redeploy. No code change needed. If you want a different file name,
 * change `cv.path` and `cv.fileName` below.
 */

export const site = {
  name: 'Ange Kevine Uwayo',
  firstName: 'Ange Kevine',
  lastName: 'Uwayo',
  // Same as the CV headline
  title: 'Software Engineer | AI & Full-Stack Development',
  url: 'https://ange-kevine.vercel.app',
  location: 'Kigali, Rwanda',
  // Shown in the hero and About section
  experienceYears: '2+ years of experience',
  email: 'angeekevinee@gmail.com',
  summary:
    'Software Engineer specializing in AI-powered and full-stack web development. Proficient in Java, TypeScript, and Python, with hands-on experience building production-quality applications end to end — from backend architecture and APIs to React frontends and AI integration.',
  links: {
    github: 'https://github.com/Angek12',
    // Add your LinkedIn profile URL here (e.g. 'https://www.linkedin.com/in/your-handle').
    // While empty, the LinkedIn button is hidden instead of linking to a wrong page.
    linkedin: '',
  },
  cv: {
    path: '/cv/Ange_Kevine_Uwayo_CV.pdf',
    fileName: 'Ange_Kevine_Uwayo_CV.pdf',
  },
  graduation: {
    school: 'Rwanda Coding Academy',
    programme: 'Software Programming & Embedded Systems',
    date: 'Jul 2026',
  },
}

export interface Project {
  id: 'agrohaven' | 'opportunity-finder' | 'church-website'
  title: string
  role: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
  featured?: boolean
  /** Only add URLs you have verified. Empty = no button is shown. */
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 'agrohaven',
    title: 'AgroHaven',
    role: 'Founder & Lead Developer',
    period: '2025 – Present',
    description:
      'Full-stack web application and backend powering an IoT-enabled aeroponic farming platform, integrating live sensor data into a digital dashboard.',
    highlights: [
      "Working prototype demoed to Rwanda's Ministry of Agriculture and a bank",
      'Won 3 competitions',
    ],
    tech: ['Full-stack', 'Backend', 'IoT', 'Live sensor data', 'Dashboard'],
    featured: true,
  },
  {
    id: 'opportunity-finder',
    title: 'Student Opportunity Finder',
    role: 'Full-Stack Developer',
    period: '2025 · Personal project',
    description:
      "Full-stack platform with a REST API and an AI matching engine that scores opportunities against a student's profile.",
    highlights: [
      'AI matching engine ranks opportunities against a student profile',
      'REST API on Node.js with a PostgreSQL database',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API', 'AI matching'],
  },
  {
    id: 'church-website',
    title: 'Church Website',
    role: 'Web Developer',
    period: '2025 · Team project',
    description:
      'Built and shipped a website, now in active production use by the organization.',
    highlights: ['Delivered as part of a team', 'Live in production use'],
    tech: ['Web development', 'Team project', 'Production'],
  },
]

export const skillGroups = [
  {
    id: 'ai',
    title: 'AI / ML',
    focus: true,
    items: ['OpenAI API', 'Gemini', 'Claude', 'AI-assisted matching systems'],
  },
  { id: 'languages', title: 'Languages', items: ['Java', 'TypeScript', 'Python', 'JavaScript'] },
  { id: 'frontend', title: 'Frontend', items: ['React', 'Next.js', 'HTML5', 'CSS3'] },
  {
    id: 'backend',
    title: 'Backend & Data',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  },
  { id: 'tools', title: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
  {
    id: 'certs',
    title: 'Certifications & Courses',
    items: ['Project Management', 'Innovation & Idea Development'],
  },
] as const

export const experience = [
  {
    role: 'Intern',
    org: 'Junior Achievement (JA) Rwanda',
    period: 'Aug 2026',
    points: [
      'Completed a one-month internship contributing to program-related technical and organizational tasks.',
    ],
  },
  {
    role: 'Founder & Lead Developer',
    org: 'AgroHaven',
    period: '2025 – Present',
    points: [
      'Built the full-stack web application and backend powering an IoT-enabled aeroponic farming platform, integrating live sensor data into a digital dashboard.',
      "Demoed the working prototype to Rwanda's Ministry of Agriculture and a bank; won 3 competitions.",
    ],
  },
  {
    role: 'Software Development Intern',
    org: 'Code Alpha — Remote',
    period: '2024',
    points: [
      'Contributed to software development tasks and delivery on a remote engineering team, strengthening practical coding and code-review skills.',
    ],
  },
]

export const education = [
  {
    programme: 'Software Programming & Embedded Systems',
    school: 'Rwanda Coding Academy',
    period: 'Sep 2023 – Jul 2026',
    status: 'Graduated',
    highlight: true,
  },
  {
    programme: 'General Studies',
    school: 'Ecole des Sciences Byimana',
    period: 'Jan 2020 – Jul 2023',
    status: '',
    highlight: false,
  },
]

export interface Recommendation {
  id: string
  kind: 'quote' | 'reference'
  name: string
  role: string
  organization: string
  /** Only for kind === 'quote'. Never add a quote that was not actually given. */
  quote?: string
}

export const recommendations: Recommendation[] = [
  {
    id: 'sarah-johnson',
    kind: 'quote',
    name: 'Sarah Johnson',
    role: 'CEO',
    organization: 'JA Africa',
    quote:
      'Ange demonstrates exceptional leadership and technical innovation. Her ability to combine cutting-edge technology with social impact is truly remarkable.',
  },
  {
    id: 'emily-chen',
    kind: 'quote',
    name: 'Emily Chen',
    role: 'Software Engineer & Friend',
    organization: 'Tech Innovations Lab',
    quote:
      "Working with Ange has been inspiring. Her creativity and problem-solving skills are unmatched. She's destined for great things in tech.",
  },
  {
    id: 'awet-fessah',
    kind: 'reference',
    name: 'Awet Fessah',
    role: 'Lecturer',
    organization: 'Rwanda Coding Academy',
  },
]
