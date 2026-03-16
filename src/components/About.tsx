/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  TrendingUp, 
  Share2, 
  Verified, 
  Globe, 
  History, 
  Brain, 
  CheckCircle2, 
  Construction, 
  BarChart3, 
  Terminal, 
  Search, 
  Database, 
  Zap, 
  FileEdit, 
  GraduationCap,
  Mail,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const timelineItems = [
    {
      period: "2024 - 2026",
      title: "MBA Candidate",
      description: "Deepening expertise in strategic growth, data-driven decision making, and digital marketing foundations to lead organic search initiatives.",
      status: "active"
    },
    {
      period: "2024",
      title: "SEO Career Pivot",
      description: "Transitioning from Tourism & Hospitality to Organic Search. Completed SEO certification with industry expert Mark Williams Cook, HubSpot SEO Certification, and Anthropic AI certification in AI Fluency: Framework & Foundations.",
      status: "past"
    },
    {
      period: "Pre-2024",
      title: "Tourism & Hospitality Background",
      description: "Built strong professional foundations in customer experience, service excellence, and managing complex client expectations in high-pressure environments.",
      status: "old"
    }
  ];

  const tools = [
    { icon: <BarChart3 className="w-5 h-5" />, name: "Ahrefs / SEMrush" },
    { icon: <Terminal className="w-5 h-5" />, name: "Screaming Frog" },
    { icon: <Search className="w-5 h-5" />, name: "Search Console" },
    { icon: <Database className="w-5 h-5" />, name: "GTM & GA4" },
    { icon: <Zap className="w-5 h-5" />, name: "PageSpeed / CrUX" },
    { icon: <FileEdit className="w-5 h-5" />, name: "SurferSEO / Clearscope" },
  ];

  const certifications = [
    {
      title: "Google Analytics Individual Qualification",
      subtitle: "Advanced Data Tracking & Analysis"
    },
    {
      title: "HubSpot Content Marketing Certification",
      subtitle: "Inbound Growth & Content Lifecycle"
    },
    {
      title: "SEMrush SEO Toolkit Exam",
      subtitle: "Competitive Analysis & Keyword Research"
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-background-light">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Vikas Chaudhary</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('home')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Home</button>
            <button onClick={() => onNavigate('about')} className="text-sm font-bold text-primary cursor-pointer">About</button>
            <button onClick={() => onNavigate('services')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Services</button>
            <button onClick={() => onNavigate('projects')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Projects</button>
            <button onClick={() => onNavigate('blog')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Blog</button>
            <button className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Contact</button>
          </nav>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all cursor-pointer">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="bg-primary text-white px-5 py-2 rounded-xl text-sm font-bold hover:brightness-110 transition-all cursor-pointer">
              Hire Me
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10 mb-24"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 p-2 shrink-0">
            <div 
              className="w-full h-full rounded-full bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcjbKlfmajPvSOGFa1EbAgDIxjH8bnaHzFVhenpcLGiI7OONdgGiNFcIh8V2QnmmntaLyFkOmgG8IwuMA7475hqssX5zdSlvIilR5Q-bFNDeEDKSrNqpZZ1SEli_pjZOiOjbClqNaHNCHmyXVYXyTHB5zLj4GlJHQPvQF2ZSkWtTnVdhd0atT97E_Rw00CDCqTnlbvrU2goBqYGN30XqtE7BZyJbbSTbHBmcK4mIwJfN6JkhcMBpVfEDmTLR7Su0E4sPjr8ZvPNeg')" }}
            ></div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4">
              SEO INTERN & ORGANIC GROWTH ENTHUSIAST
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-slate-900">Vikas Chaudhary</h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-2xl">
              I am an SEO Intern at CueForGood, dedicated to mastering the art of organic growth. I bridge the gap between curiosity and technical execution, focusing on data-driven learning to help websites build a sustainable search presence.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                <Verified className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">Aspiring Specialist</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">CueForGood Intern</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* My Journey & Philosophy */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900">
              <History className="w-6 h-6 text-primary" /> My Journey
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>My interest in the digital world began with a simple question: 'How do websites actually get found?'. This curiosity led me to the world of SEO, where I discovered the fascinating intersection of technology, content, and user behavior.</p>
              <p>Currently, as an intern at CueForGood, I'm immersing myself in the daily challenges of organic search, from keyword discovery to technical troubleshooting. I'm not just learning the tools; I'm learning how to think like a search engine to deliver genuine value to users.</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900">
              <Brain className="w-6 h-6 text-primary" /> Growth Philosophy
            </h2>
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
              <p className="italic text-lg text-slate-700 mb-4">
                "SEO is a marathon of continuous learning. I focus on understanding the fundamentals today to drive real results tomorrow."
              </p>
              <ul className="space-y-3">
                {[
                  "Data-first decision making over gut feelings.",
                  "Quality of traffic over quantity of impressions.",
                  "Sustainable white-hat practices for long-term ROI."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>

        {/* Career Timeline */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">My Growth & Education</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 md:pl-0"
                >
                  <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`md:w-[45%] ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-primary font-bold text-sm">{item.period}</span>
                      <h3 className="text-xl font-bold text-slate-900 mt-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 mt-2 leading-relaxed">{item.description}</p>
                    </div>
                    
                    {/* Dot */}
                    <div className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background-light z-10 
                      ${item.status === 'active' ? 'bg-primary' : item.status === 'past' ? 'bg-primary/40' : 'bg-primary/20'}`}
                    ></div>
                    
                    <div className="md:w-[45%] hidden md:block"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Certifications */}
        <section className="mb-24 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-900">
              <Construction className="w-5 h-5 text-primary" /> Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tool, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background-light hover:bg-primary/5 transition-colors group">
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-700">{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-900">
              <GraduationCap className="w-5 h-5 text-primary" /> Certifications
            </h2>
            <ul className="space-y-6">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{cert.title}</h4>
                    <p className="text-xs text-slate-500">{cert.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-slate-900 text-white rounded-3xl p-12 md:p-20 text-center"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Growing Together?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
              I'm currently building my expertise and would love to discuss SEO trends or potential entry-level opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-primary/20">
                Let's Connect
              </button>
              <button className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition-all cursor-pointer backdrop-blur-sm">
                Download Resume
              </button>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-100 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900">Vikas Chaudhary</h2>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Vikas Chaudhary. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><Globe className="w-5 h-5" /></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><Mail className="w-5 h-5" /></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><Users className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
