/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  Code, 
  FileText, 
  BarChart3, 
  MapPin, 
  Zap, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  Mail,
  Share2,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      title: "Technical SEO Audits",
      description: "Deep-dive analysis of your site's architecture, crawlability, and indexation. We find the hidden bottlenecks holding your rankings back.",
      icon: <Code className="w-8 h-8" />,
      features: ["Core Web Vitals Optimization", "Site Architecture Mapping", "Schema Markup Implementation", "Crawl Budget Management"]
    },
    {
      title: "Content Strategy",
      description: "Data-driven content planning that targets high-intent keywords. We build topic clusters that establish your brand as a topical authority.",
      icon: <FileText className="w-8 h-8" />,
      features: ["Keyword Gap Analysis", "Topic Cluster Mapping", "Content Refreshing", "Semantic Optimization"]
    },
    {
      title: "Link Building & PR",
      description: "Ethical, high-impact link acquisition that builds domain authority. No PBNs, just genuine outreach and relationship building.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Digital PR Campaigns", "Guest Posting Outreach", "Broken Link Building", "Competitor Backlink Analysis"]
    },
    {
      title: "Analytics & Tracking",
      description: "Custom GA4 and GTM setups that provide actionable insights. We track the metrics that actually impact your bottom line.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["GA4 Custom Explorations", "GTM Event Tracking", "Conversion Rate Analysis", "Automated Reporting"]
    },
    {
      title: "Local SEO Dominance",
      description: "Put your business on the map. We optimize your local presence to capture high-intent customers in your immediate area.",
      icon: <MapPin className="w-8 h-8" />,
      features: ["GMB Optimization", "Local Citation Building", "Review Management", "Hyper-local Content"]
    },
    {
      title: "SEO Training & Consulting",
      description: "Empower your in-house team with the latest SEO knowledge. We provide tailored workshops and ongoing strategic guidance.",
      icon: <Search className="w-8 h-8" />,
      features: ["Team Workshops", "Executive SEO Briefings", "Strategy Roadmaps", "Hiring Guidance"]
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-background-light text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-background-light/80 backdrop-blur-md px-6 lg:px-20 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg text-white flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Vikas Chaudhary</h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
          <nav className="flex items-center gap-8">
            <button onClick={() => onNavigate('home')} className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold cursor-pointer">Home</button>
            <button onClick={() => onNavigate('about')} className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold cursor-pointer">About</button>
            <button onClick={() => onNavigate('services')} className="text-primary text-sm font-semibold cursor-pointer">Services</button>
            <button onClick={() => onNavigate('projects')} className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold cursor-pointer">Projects</button>
            <button onClick={() => onNavigate('blog')} className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold cursor-pointer">Blog</button>
            <button className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold cursor-pointer">Contact</button>
          </nav>
          <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-11 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
            Hire Me
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full px-6 lg:px-20 py-12">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Our Expertise</span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Strategic SEO <span className="text-primary">Services</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            We don't just chase rankings; we build sustainable organic growth engines that drive revenue. Our methodology combines technical precision with creative strategy.
          </p>
        </motion.section>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all cursor-pointer">
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">How We Work</h2>
            <p className="text-slate-600">A proven 4-step framework for organic success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business goals, audience, and current performance." },
              { step: "02", title: "Strategy", desc: "Building a custom roadmap focused on high-impact opportunities." },
              { step: "03", title: "Execution", desc: "Implementing technical fixes and content clusters with precision." },
              { step: "04", title: "Optimization", desc: "Continuous monitoring and refining based on real-world data." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-primary/10 absolute -top-8 -left-2">{item.step}</div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Search Presence?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">
              Whether you're a startup looking for initial traction or an enterprise aiming for market dominance, we have the expertise to get you there.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-primary/20">
                Get a Free Audit
              </button>
              <button className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-xl font-bold transition-all cursor-pointer backdrop-blur-sm">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 lg:px-20 py-12 bg-background-light">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-1.5 rounded-lg text-white">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold">Vikas Chaudhary</h2>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Vikas Chaudhary. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><Mail className="w-5 h-5" /></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><Share2 className="w-5 h-5" /></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><Users className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
