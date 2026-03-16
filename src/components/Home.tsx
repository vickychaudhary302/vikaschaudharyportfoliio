/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Code, 
  Search, 
  Edit3, 
  FileText, 
  BarChart, 
  LineChart, 
  TrendingUp, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Globe,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const skills = [
    {
      title: "Technical SEO",
      description: "Crawlability, indexability, site speed optimization, and structured data implementation.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Keyword Research",
      description: "Identifying high-intent opportunities through search volume and competitor analysis.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "On-page SEO",
      description: "Optimizing titles, headers, and meta tags to improve relevance and CTR.",
      icon: <Edit3 className="w-6 h-6" />
    },
    {
      title: "Content Strategy",
      description: "Creating topical authority through content clusters and user-centric writing.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "SEO Audits",
      description: "Comprehensive health checks to identify issues and growth opportunities.",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: "Competitor Analysis",
      description: "Deep-diving into competitor strategies to find the winning edge.",
      icon: <LineChart className="w-6 h-6" />
    }
  ];

  const tools = [
    { name: "Search Console", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC72P2nKggyUip5cYf82OYYWUNhrl64hkavls67kZVuBqAe1FXGmYBK-ZakC7j81kZgbtrlgH1biipFQzxRHUzaWhh3XbpkAX2rZY5pS5I44KaABoL6n6BzBMixcnjRh3TZlQFSL1Z22tEks_1ioqsFYhQ9wpeTsQUVjs-mrO0stRQjfkTEtwlH3pl0punlsVzLvAZRThLlDe1aKgy6x4YUmKljO3uR3rHLhmYxpjfimcLCAvBKho4WnLuj2rnNl5plP4TD5FmpyY0" },
    { name: "Analytics", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5m6KX7HUTUWX5Hx2Y74yHJ3ZluyRpUXSXhWzD-jDn99j5hYHfEaRZmTjJuErdzg092FWxtTcUz-8d6_s5fkOoC0SvbW1eiJJuv01a90qIsLbj1ZZjwZiunqnDVyoT1PyE4momqEsinhxWJep1Q5tHBQ3c5acz0APEfzmApVZTM4WYwXfMtrYoFyrNqBFf0EHtZgOwP8JHvGuwicwZ6fqhYZYojuwzCXEvh73X02UY2Ko-LtvByQWqOzuFJY5K5zd8f_yZFIjEaNI" },
    { name: "Ahrefs", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxsbv8YbrPBCSKs5vBFbH3mVUQoIxybhrGdhts8w90Y899pK8yPrK6oMFM7idQSGSuvfIniv90HhTKZNM0xGJI9huCnGq3cVqcnkARJuk_-zNldK6YwDCHjA3vcMsotmHIPIH9gUcpqrzhAYilrUZH1BpfhZbSUlxoqqEaqOwXXwloBcppGOVM-Jtp9ZWovm6jq0DCZrbx-ygfAc7ZDKDON_6griXhAcEsDc2uB1YlR7eMN0mYT8NzKeOCogfNbmfXd1G_F2YbejY" },
    { name: "SEMrush", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrO1XqPPEJhjap27-vLMuyI7Aq4iXX806JC1oyd4NVrSb2OPsEHHimutU_K-kFPXZMhkZFw2bmM4Z5BxFptel7lHBupLtVfAOR93e3f-nyH6VRVsmEMm--SuiVQxLeh5L35Ga6v-E1U4dFJgDLZ9Ie4Ryk-6ESnQO53NiCOsL5ZjdVe8tDz4iG-w4kkoJm4ZY3x1kp9V4y1tcNP2W2v4zpZlFdRCCht-9I6i-Yb-6Ek-g3_ge4G4sWRfJikbfhzob6dDxdZNpVIu0" },
    { name: "Screaming Frog", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6XM5X_Ko8XOTWkr3OzDT201QcD3mYDD29wiqb6Jy7U_jVG3dSzJV4kkj130x-gSLZomLVx8ZpC7q-u50LrxWggWY1ObIjwj9wimpIlt9QcVWOz_fQnVruYbFMFmkV4VnnBWs0r_HvvIUpmmopybSAbN_V_S661uSHXTYAJ7jXW5twOmkpO7GxqgAIqaW0Rk9E2Iype1a68jgYWLVzxibKHWyJUxpz_gui05NO0URsEYCkuFNmqYGg5uEwkkUon1TK_QYVU8oQBmU" }
  ];

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <button onClick={() => onNavigate('home')} className="text-xl font-bold tracking-tight text-blue-800 cursor-pointer">
                VC<span className="text-slate-500">.SEO</span>
              </button>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => onNavigate('about')} className="text-sm font-medium text-slate-500 hover:text-blue-800 transition-colors cursor-pointer">About</button>
              <button onClick={() => onNavigate('services')} className="text-sm font-medium text-slate-500 hover:text-blue-800 transition-colors cursor-pointer">Services</button>
              <button onClick={() => onNavigate('projects')} className="text-sm font-medium text-slate-500 hover:text-blue-800 transition-colors cursor-pointer">Projects</button>
              <button onClick={() => onNavigate('blog')} className="text-sm font-medium text-slate-500 hover:text-blue-800 transition-colors cursor-pointer">Blog</button>
              <button className="px-4 py-2 bg-blue-800 text-white text-sm font-semibold rounded-md hover:bg-blue-900 transition-colors cursor-pointer">Get in Touch</button>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left"
              >
                <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                  <span className="block">SEO Specialist Helping</span>
                  <span className="block text-blue-800">Websites Grow with</span>
                  <span className="block text-blue-800">Organic Search</span>
                </h1>
                <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Hi, I'm Vikas Chaudhary. I bridge the gap between technical complexity and organic visibility. I specialize in data-driven SEO strategies that drive traffic, engagement, and revenue.
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                  <button onClick={() => onNavigate('projects')} className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 md:py-4 md:text-lg md:px-10 transition-colors cursor-pointer">
                    View My Work
                  </button>
                  <button className="mt-3 sm:mt-0 flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-md text-blue-800 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition-colors cursor-pointer">
                    Free SEO Audit
                  </button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center"
              >
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden bg-slate-100 p-4">
                  <img alt="SEO Growth visualization" className="w-full rounded shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTjwj72jUDP4aAXKmBYkSXwxuIaIgiWUduW80ipc0EjdE01yg9STsYfR3X4U_mRx20VdoGhUFWTXh8KhVY1UIBhw_Aoskec3UotTKJ6rdH8BKVo8A_lFWcqQTf7L_bxxsUHuu3FHObx0tToHjj4TiQSKGw0cBKdLDsb3oIXL8rY63PCrVm_tGBcWd64BBH2_yS8M7hmVs0FO8ouVsmBKchH07u5FRXpkE8KKtsvnIwg7XoCQQCliu1jk3sdFb1ceqNOP8p0N2hJKI" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Summary */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">The Narrative</h2>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">
                With over 5 years of experience in the digital landscape, my journey in SEO began with a simple curiosity: "How does Google really work?". Today, I help businesses navigate the ever-evolving algorithms. My approach is holistic—combining technical precision, user-centric content, and authoritative backlink profiles to build sustainable organic growth.
              </p>
              <button onClick={() => onNavigate('about')} className="mt-8 text-blue-800 font-bold flex items-center gap-2 mx-auto hover:gap-4 transition-all cursor-pointer">
                Learn More About My Journey <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900">Core Competencies</h2>
              <p className="mt-4 text-slate-500">Specialized expertise in every pillar of search engine optimization.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ translateY: -5 }}
                  className="p-8 bg-slate-50 rounded-xl border border-slate-100 shadow-sm"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-800">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-slate-500 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-12 bg-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-wider mb-8">Trusted by my workflow</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {tools.map((tool, i) => (
                <img key={i} alt={tool.name} className="h-8" src={tool.url} />
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Summary */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900">Success Stories</h2>
              <p className="mt-4 text-slate-500">Real results from data-backed organic strategies.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col border border-slate-100">
                <div className="h-56 bg-blue-50 overflow-hidden">
                  <img alt="Ecommerce Case Study" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI6JtBSsqbYmlvsqfV2N25vrLUDtRlTRCXWzzDPECuNrgqSd2FLU-ESpRbh-FAIwzkLw9WFhKy6kXp3cIP5wpahGfb_bufDE-uuaFvxQK7oQ1h_qZXKHQSyLKS6ZUY_9kxfKJTD2wSLOuNw4r2g-UkDsZewW9kSVBM_Bj4xrlNjMZDD23_wQleed_TRc4oi-relcBt78as-yYGcjbU1JNQS4SQrVMos_-afyQS5j-H7C6ojA7bVUdGw8cAhJkE4XjcSWnJg5mR4zg" />
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-2">E-commerce</div>
                  <h3 className="text-2xl font-bold mb-4">Fashion Brand Organic Scaling</h3>
                  <p className="text-slate-500 mb-6">Increased organic sessions by 145% in 6 months by fixing core web vitals and implementing a content silo strategy.</p>
                  <div className="flex gap-4 border-t pt-6">
                    <div>
                      <div className="text-xl font-bold text-slate-900">+145%</div>
                      <div className="text-xs text-slate-500 uppercase">Traffic</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-900">+32%</div>
                      <div className="text-xs text-slate-500 uppercase">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col border border-slate-100">
                <div className="h-56 bg-slate-50 overflow-hidden">
                  <img alt="SaaS Case Study" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8xU1uUSYN3PWFdyiegfaTHUnozdaK-PlKKIEg-Qx9-8EsI5xXziKcwdvNeB-dPkBN1NghxrGMMpvDAvNm8vQ54n9mkzzNyrskbE-naaNYf925dGAUalI2P9AQ8RncAdyv5SOQOkAyLci_mpIIf61O6PRJ6muE63J7ZTHqUsVGG8zG2CTb5-P2dXmwVbbMGQ1xRhYTcFP4tO4zjnF1j9Y-_SNvxW9msDdq7_PNXSiTC0T7799eWCNcgQjWrRul7xfsM3fToSD4dhg" />
                </div>
                <div className="p-8">
                  <div className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-2">SaaS / B2B</div>
                  <h3 className="text-2xl font-bold mb-4">B2B Platform Lead Gen Boost</h3>
                  <p className="text-slate-500 mb-6">Secured Top 3 rankings for high-intent competitive keywords, resulting in a 210% increase in demo signups.</p>
                  <div className="flex gap-4 border-t pt-6">
                    <div>
                      <div className="text-xl font-bold text-slate-900">+210%</div>
                      <div className="text-xs text-slate-500 uppercase">Leads</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-900">#1-3</div>
                      <div className="text-xs text-slate-500 uppercase">Rankings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <button onClick={() => onNavigate('projects')} className="bg-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors cursor-pointer">
                Explore All Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Insights Summary */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">Latest Insights</h2>
                <p className="mt-2 text-slate-500">Thought leadership on the future of search.</p>
              </div>
              <button onClick={() => onNavigate('blog')} className="hidden md:block text-blue-800 font-semibold hover:underline cursor-pointer">Read All Articles →</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Adapting SEO Strategy for AI-Driven Search", date: "Oct 15, 2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFykakX5sSXyWnOPGNAd5WxrjGaOq2dXUFHyvoN-iGv1gTWMH2MXLoVEYo3oWeOVfqbR6cguDtPXZX2dI3WzFYRlZnaNcJMmV031VECr5Aw4kWa7n21GmlN2VGa1RNWYuL6UT-F_ex5QjCLZWnmTr_ATcSD7o1dEJhGlGZavRackbFvEAVufeSIWd7GaIfKITcgsjblkqEVm-PeCUBpMZ33si2Msks-F5w0JPix5phJZCcY_uPZuDUaPaS9J_92uLZCDCjPQPqA0s" },
                { title: "The Ultimate Technical SEO Audit Checklist", date: "Sep 28, 2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMKxn9YC9UdiPtbpvq-FQaC7z0p2JoSv8J6swZM3m9NqgYBkc8LEi-dFPwJhW0G-ZQIwIIqdlXmQk1xvosMGtKiuuY_zXyPVXZ6vyVCh48vg434No3P-w2NHWmpaPvE-8yEomygC3UwlxRTGlZqUqRA9HR7vgCxtEn9WU1t04K9EzeuPmRDGv3GeZrr_SROKibryxmUpjOVg1QyPt84hu4W50UFu3ZMr07PQi8ecRpL7bmi-fLFPAo9S2CnjwwF2sNJvwFiShBZ3U" },
                { title: "White-Hat Link Building in 2024", date: "Aug 10, 2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIqVlkjhvED6N5rxKzCnaJeqXgcRRdQiGUYqpwhjT4_xUI4LpgGT3xnUICMepxTJiyTuZCCgJ3FvLdqk6rggmbLm4iStrUXAKJbeUcFxIMDLgqXpNZDo0lkihYfqUS4IZUR1qTyd2TF2NHVqI44IQjXcNfabkiRxHMcf-XXrldTxhC5J7ppaqEHilaetUeDYX0iVDlm8p0ClksDqZ0K4x_jxXhFYGtwuEQdOIP3ZWTrH3DndKqDJ_sF6YuU3zz4sX4oMtuHli3FYg" }
              ].map((post, i) => (
                <article key={i} className="group cursor-pointer" onClick={() => onNavigate('blog')}>
                  <div className="aspect-video mb-4 overflow-hidden rounded-xl bg-slate-100">
                    <img alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={post.img} />
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-blue-800 transition-colors">{post.title}</h4>
                  <time className="mt-4 block text-xs text-slate-400 uppercase font-medium">{post.date}</time>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-800 rounded-3xl p-10 md:p-16 text-white text-center">
              <h2 className="text-3xl font-bold mb-10">Certified Expertise</h2>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { name: "Google Analytics IQ", icon: <Globe className="w-10 h-10" /> },
                  { name: "SEMrush SEO Expert", icon: <Zap className="w-10 h-10" /> },
                  { name: "HubSpot Content Mktg", icon: <GraduationCap className="w-10 h-10" /> }
                ].map((cert, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-3">
                      {cert.icon}
                    </div>
                    <span className="text-sm font-semibold">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Let's Discuss Your Growth</h2>
                <p className="text-lg text-slate-500 mb-8">Ready to dominate search results? I'm available for full-time roles or high-impact SEO consulting projects.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-800 flex items-center justify-center rounded-full">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm uppercase text-slate-400">Email Me</h5>
                      <p className="text-slate-900">vikas.chaudhary@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-800 flex items-center justify-center rounded-full">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm uppercase text-slate-400">Call Me</h5>
                      <p className="text-slate-900">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-800 flex items-center justify-center rounded-full">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm uppercase text-slate-400">LinkedIn</h5>
                      <a className="text-blue-800 hover:underline" href="#">/in/vikas-seo-specialist</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <form action="#" className="grid grid-cols-1 gap-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-200" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-slate-900" htmlFor="full-name">Full Name</label>
                    <input className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 py-3 px-4 outline-none" id="full-name" name="full-name" type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900" htmlFor="email">Email Address</label>
                    <input className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 py-3 px-4 outline-none" id="email" name="email" type="email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900" htmlFor="message">Message</label>
                    <textarea className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-800 focus:ring-blue-800 py-3 px-4 outline-none" id="message" name="message" rows={4}></textarea>
                  </div>
                  <button className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 transition-colors cursor-pointer" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8 mb-8">
            <div className="text-2xl font-bold tracking-tight mb-4 md:mb-0">VC<span className="text-slate-400">.SEO</span></div>
            <div className="flex space-x-6">
              <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Home</button>
              <button onClick={() => onNavigate('about')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">About</button>
              <button onClick={() => onNavigate('projects')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Work</button>
              <button onClick={() => onNavigate('blog')} className="text-slate-400 hover:text-white transition-colors cursor-pointer">Insights</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>© 2024 Vikas Chaudhary. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <span>Crafted for Organic Results</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
