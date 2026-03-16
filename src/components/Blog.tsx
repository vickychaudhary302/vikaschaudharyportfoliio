/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  BarChart3, 
  Search, 
  ArrowRight, 
  Mail, 
  Twitter, 
  Linkedin, 
  Github, 
  Rss,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';

interface BlogProps {
  onNavigate: (page: string) => void;
}

export default function Blog({ onNavigate }: BlogProps) {
  const categories = ["All Topics", "Technical SEO", "Content strategy", "Backlinks"];
  
  const articles = [
    {
      title: "Core Web Vitals: A 2024 Performance Checklist",
      excerpt: "Everything you need to know about INP and maintaining a perfect performance score.",
      category: "Technical SEO",
      date: "Jan 10, 2024",
      readTime: "12 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLPIoi7o2FmJDNiFoMrEL1pZd-tQ4s-sxDfkiWEn5oY7jI-I-kZGzm9RJAmUU4pJdikboe42KhrxyjEnWybj6sSUQGdcHFsJv4vGBHX8ClEq1UbIiISGtbH0cfnOkxsXaYN6mj_H3farnFsvIJaiKQaSNCYpXtmFkmEjudkMOr1IPyYEoM85YL0Dwt1MGW85-rlTpbqN76iFR5Jp71JzaCm-XcMBv2m9eI_XGTLeKIpxQgmSjS_Dwn31U0N1cSFTr58yUv9_XOCqQ"
    },
    {
      title: "Sustainable Backlink Strategies for SaaS",
      excerpt: "How to earn high-authority placements without resorting to shady PBNs or spam tactics.",
      category: "Link Building",
      date: "Jan 02, 2024",
      readTime: "15 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUFHkotH69UxUasPq0fQONjZM8SfI3VSbYy24Y9H5FZyOvBvJcegc5v4a05Rdw948XrqzjBe0SGzb80pJTIg5gfPsDvDg3PA-WomutZ1Dm1JZhxxdIA8Gfz7uRK13siIsZsSqxOdKodZJ3YzEJiLo3Sl6tavrTX_9lSMM4o6bVdRriQEYTbH1sOTo4w3TA4WnxrtAD8dGR1MLEBGh9_yt---O9l0jw1Wp0A-GW-cDkjM-6LP5GNMOjTPS7HVQylKNNm6rZ30UGM-k"
    },
    {
      title: "Mastering GA4 Custom Explorations",
      excerpt: "Stop guessing and start measuring. A deep dive into custom reporting for SEO success.",
      category: "Analytics",
      date: "Dec 20, 2023",
      readTime: "10 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBINpOn5rYoHM7xgMmoVh90SHZSZrKmiOxMuOs0AsCiSxZhsZWvgaybE_WeETOy6t4KuL68UckBwFvqSIl_UIBbNVA465MUKTRtyTa--3z3cbPh5bSRmP2RoEDfCv6Sf-p0wTn_oKbdSAX8IxEEnVhPf0X8AbcHPjT3H_tQ83OcACbiJmtLPTE3-ab0h0rypU5zTkU7xPMXa0ytsxWQIDAOOQWO2ufjH7SehhWhSgcm7WFzFSu3L9EnsxyVtnJqLZ01CYhAaLeLErQ"
    },
    {
      title: "Building the Perfect Content Cluster",
      excerpt: "The hub-and-spoke model is more relevant than ever. Here is how to map your architecture.",
      category: "Content Strategy",
      date: "Dec 15, 2023",
      readTime: "9 min read",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy3QLXPnt_lSlt7ej1g2QEECRKDEHS9a4ExP-bw0Yj6wdBnNw_hK5uJsufnsbvqujLvyr6Pt8XBR41vVJcYzw6HNbqs0YUK7_CuPbUkFUoUhIDuDKzt_IK6t862E0GulqFmIqRbg64H4mjwYXPe5FV1J0uS51PNyBH80FD9OErp55sAqbrDlMLj69XDuJLdL2_Dujfn1FXe1e37mbMLFxj1hIHmA_IJMJmBDOw5iXdGBYF7b-GKLOGn53GhpPvtek0yL6dZAIHECo"
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-background-light text-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-background-light/80 backdrop-blur-md px-6 md:px-20 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Vikas Chaudhary</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('home')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Home</button>
            <button onClick={() => onNavigate('about')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">About</button>
            <button onClick={() => onNavigate('services')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Services</button>
            <button onClick={() => onNavigate('projects')} className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Projects</button>
            <button onClick={() => onNavigate('blog')} className="text-sm font-bold text-primary cursor-pointer">Blog</button>
            <button className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Contact</button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-slate-100 rounded-xl px-3 py-1.5 border border-transparent focus-within:border-primary/50 transition-all">
            <Search className="w-4 h-4 text-slate-400" />
            <input className="bg-transparent border-none focus:ring-0 text-sm w-32 md:w-48 placeholder:text-slate-400 outline-none ml-2" placeholder="Search..." type="text"/>
          </div>
          <div className="bg-slate-200 rounded-full size-9 overflow-hidden border-2 border-primary/20 cursor-pointer" onClick={() => onNavigate('about')}>
            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUJD-cbkRhbYr81eWhlgcuC1XRzwdDLnimDc9dnLGxTBuvazIDI7tzrZtGMlfb53oX8D1Tq8mkBeYlboLSIKK_dj_dWTY5KL9OkH2ACY4a2IHWKEK6ytbjk5-rzom-Md3lkYK1u5I_60eZNUNkfvboRyMnPUs_xcCA39PHqk9tg_SQxSTrSfu2hbx7PNjtxxFQbKG6AeI29Gg8m2N_csz11ID2Ab3lbGH9zkrMkXxWYQcK8v7p7WZir-hiz6uIB8Ox5t7FhyLWyr0"/>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto w-full px-6 py-12">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            SEO & <span className="text-primary">Digital Strategy</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            In-depth guides, case studies, and technical insights to help you dominate search rankings and build a sustainable digital presence.
          </p>
        </motion.section>

        {/* Search & Filters */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-12">
          {/* Featured Article */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-2/5 aspect-[16/10] rounded-2xl overflow-hidden bg-slate-200 relative">
                <img alt="Article Cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT9ozp6ry-07KpLcSJQML6FXK2mAkTtHCTp72dYCU8WExGIyVWlsnMRKdFnwRn_q0hnj8EXCd8tjksYRBJRuOHzf5WvcXiDvfuF_H3g97xCv9wZZxUBjveDQhTjxCPwQ9sPIAuJEM80_7ZmlotKTNt-8Vpc_3GCAA1Jz7GSDWBeCd0ZyJIP0cPRlPjbpgshm66NOJtZBYRDf8IuDQW-FqgTDhXOu6UiNf8-8xsbsD-8QN0m4eNtTjEvHlKqo1GCpgrX8CGMBWiqsE"/>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">New</span>
                </div>
              </div>
              <div className="flex-1 py-2">
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                  <span className="font-semibold text-primary">Strategy</span>
                  <span>•</span>
                  <span>Jan 15, 2024</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">The Future of Semantic Search: How LLMs are Redefining Keyword Intent</h2>
                <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                  Traditional keyword research is dying. Learn how to optimize for entities and semantic clusters in the era of Generative AI.
                </p>
                <button className="flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                  Read Full Article <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.article>

          <div className="h-px bg-slate-200"></div>

          {/* Article List Items */}
          <div className="grid md:grid-cols-2 gap-12">
            {articles.map((article, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-slate-200">
                  <img alt="Article Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src={article.image}/>
                </div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{article.category}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="text-xs text-slate-500">{article.date} • {article.readTime}</div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="mt-24 mb-12">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Mail className="w-32 h-32 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Join the Strategy Newsletter</h2>
            <p className="text-slate-300 max-w-lg mx-auto mb-8 relative z-10">Get weekly SEO tips, industry news, and exclusive case studies delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-1 bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder:text-slate-400 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="Enter your email" required type="email"/>
              <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-xl transition-all whitespace-nowrap cursor-pointer" type="submit">Subscribe</button>
            </form>
            <p className="text-xs text-slate-500 mt-4">Join 5,000+ digital marketers. No spam, ever.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
              <TrendingUp className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg">Vikas Chaudhary</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a className="hover:text-primary transition-colors" href="#"><Twitter className="w-5 h-5" /></a>
            <a className="hover:text-primary transition-colors" href="#"><Linkedin className="w-5 h-5" /></a>
            <a className="hover:text-primary transition-colors" href="#"><Github className="w-5 h-5" /></a>
            <a className="hover:text-primary transition-colors" href="#"><Rss className="w-5 h-5" /></a>
          </div>
          <p className="text-sm text-slate-400">© 2024 Vikas Chaudhary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
