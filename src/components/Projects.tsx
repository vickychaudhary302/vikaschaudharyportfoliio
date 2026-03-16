/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  TrendingUp, 
  Download, 
  ShoppingCart, 
  Cloud, 
  MapPin, 
  FileText, 
  Users, 
  Rocket, 
  Mail, 
  Share2, 
  LayoutGrid,
  ArrowRight,
  BarChart3
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const categories = [
    { name: "All Projects", icon: null },
    { name: "E-commerce", icon: <ShoppingCart className="w-4 h-4" /> },
    { name: "SaaS", icon: <Cloud className="w-4 h-4" /> },
    { name: "Local SEO", icon: <MapPin className="w-4 h-4" /> },
    { name: "Content Strategy", icon: <FileText className="w-4 h-4" /> },
  ];

  const caseStudies = [
    {
      title: "Global SaaS Growth",
      description: "Scale organic acquisition for a B2B project management tool across 12 markets.",
      category: "SaaS",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpY7tbRbI_zjl1ayRWsCPl8IthcffxyxRhGk6FfeQplNEgd69yUqBZRwebOzoUaZ75Yp50shjuX2ErLkMfjWgVV1sQ_JMEDY4FvUZZGsuHYU4AvsDht5XePlkr8yt9d31SkIZWclEJg6mJmv6ylyBJKHU7JpbfZrZYNzUIfd5yEeQJn01unUfPQSuFh6q57NFMvVMUSHtAt3HJDkmw1vSOnO0kNFIc6pdmYeWfxDmt3JZuMtzcNs1-1Kb1uMUu-kElnC5mon9jC0Q",
      metrics: [
        { label: "Organic Traffic", value: "+250%" },
        { label: "Monthly Reach", value: "1.2M" }
      ]
    },
    {
      title: "Revenue Multiplier",
      description: "Technical SEO overhaul and collection page optimization for a fashion retailer.",
      category: "E-commerce",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQCPNa7klYyoRBiSxKrmrIkWAqP5VG3wqdHC27hwMkq4PpuZxh-D3jauYod5OmfP1T6QV3ub1ewqNwkO8DSThWq3bylgZpn5rZ4xX-AC1Auwg9nKblPird6cZt2pffbT6dD4Lbyvgctnpm2EzwonmmvqMQtXroF6Wo9K5DaM5YXTpfxK2Y8Ksrrzi7Ca2XPxzrzWKmz7OmctrZyNTVb83p27Y88kXXHndWxvL0ZvrR6TpmBYdNljjzkIA7tFLiSMqZiOT-OjH-LYI",
      metrics: [
        { label: "Conversions", value: "+150%" },
        { label: "Return on Ad Spend", value: "8.4x" }
      ]
    },
    {
      title: "Local Market Dominance",
      description: "GMB optimization and local citation building for a multi-location dental group.",
      category: "Local SEO",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBUJD3swYtrlI1QkBgxJH8BgMshv9-AEralwGvh3rC5jdFvMbj_hGlW1eTlY-HZhAeYWFqaIlLzsRpKbI3uspx4_tozbVy62GGaZg8l05eUXkjG5k0ZfFSZjwiovReAdWvkaI492VTCdOEOPZCuJwZlf8ADJsbWV-0RNzxsn48IZsUDOT-vOTWHJJWZXAFB5Zs5JC7M5JNS9gn0aNLV6413Lm3sKDGUDxRLuD8n0in8TLGPM7XEzX2kxNrpsMxOhADYLjBjczjJSw",
      metrics: [
        { label: "Map Pack Rank", value: "#1-3" },
        { label: "Inbound Calls", value: "+85%" }
      ]
    },
    {
      title: "Authority Building",
      description: "Topic cluster implementation and content refreshing for a leading tech blog.",
      category: "Content Strategy",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZIlebMpcjc8Y0v9rz1TSwZX8jhcrYQwVuk0C2mhRsTl3uqCvOttxj4ixES0-tCC1OtIPvK0hZpPCKX8jZyVl_hb_xCVolM04oiGlcluADi17kigKHqiCk0m-wuLNcjLqrv0PqronFgQl9TSO3MZZGbcRdFSweX6TFWtKN5PsTRyjwzKZTHJQTY8r0vIP3SlXaLiLpZk6QuHRTHot0ZhswvFMBr7uVzjZrlUhplai5MJcNS2wI9H-ad5GpQpkoe7ZWJ2ZQSkzL57o",
      metrics: [
        { label: "DR Increase", value: "420%" },
        { label: "New Keywords", value: "5k+" }
      ]
    },
    {
      title: "Technical Architecture",
      description: "Solving crawl budget issues and site structure for a 1M+ page platform.",
      category: "SaaS",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAncjW8V1SkEZf8_RsyJVYzG1FNUCaKglpdqr997D4PBX2ald7C6jQj-GzUOqtOUru1ufoW7_2j7GirXncmG6i5-kR9koJo9cxV2pDx4ByUUsbodLAt65K_DgOqcHUIgqitsfXUiZiBKxFZ4h6TDmoS9NvaFWu1O1xckyqhlQkvP5M3qg5WUto0A5o6DPsO3a-aHN2y12HnP3Nl2J8NrqGQMhtyuB7W6j--jRpk6VQcFnVZcboN0H90e2DcEh8k11prAh4UaZy7Br0",
      metrics: [
        { label: "Crawl Errors", value: "-65%" },
        { label: "Load Time Saved", value: "3.2s" }
      ]
    },
    {
      title: "Market Expansion",
      description: "International SEO strategy for an electronics retailer entering EU markets.",
      category: "E-commerce",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADqn7o_0Q1KV3xaDcg2JFFDrJliKbWnEf3j4d11nm7_Beqj1SomAP0O_dHUkNUFWyRE0WfZ_fFrbRTqf9_Vjq1r9bXrIuR8d7mNsKZ5sCU-ocwpM7i-hDaWzWwkh_eoejjGd9F9b0BsILDvIqV1VWiH-93NvXtzJL1O9HeYCDQa4r26MQk4arvSO1fv-ffHEdYOaZ1ZrbKl4Cxw_CQf7m2jUP4Wfjl1_XineyShomEbY8wmthRmQ9JhApMW5QVTFbYppT9HYPfhPo",
      metrics: [
        { label: "Intl. Traffic", value: "+210%" },
        { label: "New Regions", value: "15" }
      ]
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
            <button onClick={() => onNavigate('services')} className="text-slate-600 hover:text-primary transition-colors text-sm font-semibold cursor-pointer">Services</button>
            <button onClick={() => onNavigate('projects')} className="text-primary text-sm font-semibold cursor-pointer">Projects</button>
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Portfolio</span>
            <h1 className="text-5xl font-black leading-tight tracking-tight mb-4">SEO Case Studies</h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Proven results in organic growth and search visibility across diverse industries. From local dominance to global SaaS scaling.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-200 text-slate-900 font-bold transition-all hover:bg-slate-300 cursor-pointer">
              <Download className="w-5 h-5" />
              Resume
            </button>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat, i) => (
            <button 
              key={i}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 text-sm font-bold transition-all cursor-pointer ${i === 0 ? 'bg-primary text-white' : 'bg-white border border-slate-200 text-slate-700 hover:border-primary'}`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{study.category}</div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1">{study.description}</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  {study.metrics.map((metric, j) => (
                    <div key={j}>
                      <p className="text-primary text-lg font-black leading-none">{metric.value}</p>
                      <p className="text-slate-400 text-[10px] font-bold uppercase mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics Banner */}
        <section className="bg-primary/10 rounded-3xl p-10 mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-black mb-4">Cumulative Performance Metrics</h2>
              <p className="text-slate-600 mb-8">Aggregated results across 50+ successful campaigns managed in the last 4 years.</p>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span>ORGANIC TRAFFIC INCREASE (AVG)</span>
                    <span>185%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%] rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span>REVENUE FROM ORGANIC (AVG)</span>
                    <span>120%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[70%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <TrendingUp className="text-primary w-10 h-10 mb-4" />
                <h4 className="text-4xl font-black">5.2M</h4>
                <p className="text-slate-500 text-xs font-bold uppercase mt-2">Total Monthly Clicks</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <Users className="text-primary w-10 h-10 mb-4" />
                <h4 className="text-4xl font-black">40+</h4>
                <p className="text-slate-500 text-xs font-bold uppercase mt-2">Niches Optimized</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center bg-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <Rocket className="w-40 h-40" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-4">Ready to grow your organic visibility?</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Get a free SEO audit and discovery call to see how we can replicate these results for your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:brightness-110 text-white font-bold px-8 py-4 rounded-xl transition-all cursor-pointer">Book a Strategy Session</button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all border border-white/20 cursor-pointer">View Pricing</button>
            </div>
          </div>
        </div>
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
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><LayoutGrid className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
