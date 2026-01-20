import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Cpu, 
  Gamepad2, 
  Linkedin, 
  Github, 
  Mail, 
  BarChart3, 
  Zap, 
  Users, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  MapPin, 
  Bot, 
  Terminal, 
  Code2, 
  TrendingUp, 
  Rocket, 
  Briefcase, 
  GraduationCap, 
  ShieldAlert, 
  Search, 
  Settings, 
  Database 
} from 'lucide-react';

const FudashiLogo = ({ className = "w-full h-full" }) => (
  <svg className={className} viewBox="0 0 375 375" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="49.92" y="229.68" width="102.57" height="14.51" fill="#4fd5ca"/>
    <rect x="49.92" y="64.55" width="243.87" height="14.51" fill="#e4ff00"/>
    <rect x="49.92" y="88.25" width="243.87" height="14.51" fill="#ddb15b"/>
    <rect x="49.92" y="182.86" width="221.43" height="14.51" fill="#fc267e"/>
    <rect x="49.92" y="206.57" width="221.43" height="14.51" fill="#e62c8a"/>
    <rect x="49.92" y="300.41" width="102.57" height="14.51" fill="#13bcc9"/>
    <rect x="49.92" y="325.63" width="102.57" height="14.51" fill="#1db7c3"/>
    <rect x="49.92" y="253.94" width="102.57" height="14.51" fill="#38d4cf"/>
    <rect x="49.92" y="275.82" width="102.57" height="14.51" fill="#14c3cb"/>
    <rect x="49.92" y="111.05" width="102.57" height="14.51" fill="#fba03e"/>
    <rect x="49.92" y="134.76" width="102.57" height="14.51" fill="#fe913e"/>
    <rect x="49.92" y="158.46" width="219.93" height="14.51" fill="#f2327f"/>
    <path d="M72.36 36.43H181.08V340.08H72.36V36.43Z" fill="white"/>
    <path d="M70.71 181.7H183.13V351.02H70.71V181.7Z" fill="black"/>
    <path d="M115.09 154.82H299.24V228.25H115.09V154.82Z" fill="white"/>
    <path d="M72.36 152.4H300.87V231.3H72.36V152.4Z" fill="black"/>
    <rect x="49.92" y="40.91" width="243.87" height="14.51" fill="#e4ff00"/>
    <path d="M155.32 36.42H323.27V108.61H155.32V36.42Z" fill="white"/>
    <path d="M70.71 103.92H183.18V191.04H70.71V103.92Z" fill="black"/>
    <path d="M72.36 275.19H174.95V289.89H72.36V275.19Z" fill="black"/>
    <path d="M72.36 158.22H221.79V173.89H72.36V158.22Z" fill="black"/>
    <rect x="72.41" y="229.68" width="102.57" height="14.51" fill="white"/>
    <path d="M70.71 31H325.77V109.07H70.71V31Z" fill="black"/>
    <rect x="72.36" y="64.55" width="243.87" height="14.51" fill="white"/>
    <rect x="72.36" y="88.25" width="243.87" height="14.51" fill="white"/>
    <rect x="72.41" y="182.86" width="221.43" height="14.51" fill="white"/>
    <rect x="72.36" y="206.57" width="221.43" height="14.51" fill="white"/>
    <rect x="72.41" y="300.41" width="102.57" height="14.51" fill="white"/>
    <rect x="72.36" y="325.63" width="102.57" height="14.51" fill="white"/>
    <rect x="72.41" y="253.94" width="102.57" height="14.51" fill="white"/>
    <rect x="72.41" y="275.82" width="102.57" height="14.51" fill="white"/>
    <rect x="72.36" y="111.05" width="102.57" height="14.51" fill="white"/>
    <rect x="72.36" y="134.76" width="102.57" height="14.51" fill="white"/>
    <rect x="72.41" y="158.46" width="221.43" height="14.51" fill="white"/>
    <rect x="72.41" y="40.91" width="243.87" height="14.51" fill="white"/>
  </svg>
);

const EXPERTISE_BLOCKS = [
  {
    title: "GenAI & Agentic AI",
    icon: "Bot",
    content: "Architecting and deploying AI solutions that transform customer operations, from intelligent chatbots to autonomous workflow automation."
  },
  {
    title: "Global Transformation",
    icon: "Globe",
    content: "Led multi-territory launches including a same day expansion to 130 new countries for a large streaming service. Expert at scaling operations across EMEA, APAC, and Americas."
  },
  {
    title: "Cost Optimization",
    icon: "TrendingUp",
    content: "Delivered $300k+ annual savings through strategic vendor negotiations, process redesign, and operational efficiency improvements in one year."
  },
  {
    title: "BPO & Vendor Management",
    icon: "Briefcase",
    content: "Head of external vendor sites supporting 350K+ annual cases in 10 languages. Expert at building and managing global support ecosystems."
  },
  {
    title: "CCaaS & IVR Strategy",
    icon: "Layers",
    content: "Refining complex CRM, chatbot, and IVR systems for Fortune 500 companies to ensure seamless customer journeys and high deflection rates."
  },
  {
    title: "Small-Business Automation",
    icon: "Cpu",
    content: "Eliminating manual work with AI for small businesses. Building custom tools so growing teams can achieve massive scale with fewer resources."
  },
  {
    title: "CCaaS & CRM Architecture",
    icon: "Database",
    content: "Designed in-house CRM solutions for Fortune 500 companies. Built custom WFM applications and integrations for enterprise-scale operations."
  },
  {
    title: "Call Center Operations",
    icon: "Users",
    content: "Launched new call centers worldwide, turned around underperforming sites, and coached teams to exceed performance metrics."
  }
];

const CAREER_HIGHLIGHTS = [
  {
    role: "Manager, AI Automation & Digital Transformation",
    company: "Rose City Electric",
    url: "https://rosecityelectricco.com",
    location: "Portland, OR",
    period: "Oct 2024 – Present",
    highlights: [
      { label: "GenAI Implementation", text: "Architected and deployed agentic AI solutions to accelerate revenue-generating processes, reducing residential bidding/invoicing turnaround from 8 hours to <10 minutes." },
      { label: "Digital Transformation", text: "Leading the redesign of customer operations through intelligent automation and AI-driven workflows, improving inquiry accuracy by 20% and increasing revenue by 10%." },
      { label: "Strategic Advisory", text: "Evaluating current service offerings to identify technology gaps and prioritize recommendations for executive stakeholders." }
    ]
  },
  {
    role: "Senior Vendor Manager, Global Customer Support",
    company: "GoPro",
    url: "https://GoPro.com",
    location: "San Mateo, CA",
    period: "Jan 2019 – Nov 2024",
    highlights: [
      { label: "Global Ecosystem Leadership", text: "Head of external vendor sites (EMEA/APAC) and internal off-shore teams for Logistics, Sales Ops, and Legal, supporting 350k+ annual cases in 10 languages." },
      { label: "Business Case & Cost Optimization", text: "Quantified and negotiated vendor contracts and site expansions, saving 25% in annual costs." },
      { label: "Operational Redesign", text: "Leveraged Salesforce CRM analytics to spearhead company-wide RMA process improvement, achieving 20% increase in CSAT and NPS by streamlining refunds, fraud prevention, and shipping logistics (UPS)." },
      { label: "Self-Service & AI Strategy", text: "Designed AI Chatbots and scaled IVR guidance to drive self-service, reducing regional wait times by 18% and increasing CSAT/NPS by 20%." },
      { label: "Award Recognition", text: "Finalist, Best Multilingual Customer Service - European Contact Centre & Customer Service Awards (2022)." }
    ]
  },
  {
    role: "Account Executive, Vendor Risk",
    company: "UpGuard",
    url: "https://upguard.com",
    location: "Mountain View, CA",
    period: "Jun 2017 – Jan 2019",
    highlights: [
      { label: "Revenue Generation", text: "Pitched complex security and compliance solutions to C-suite stakeholders." },
      { label: "Solution Selling", text: "Managed end-to-end customer lifecycles, identifying client gaps and solutioning value-driven proposals to solve enterprise vendor risk challenges." }
    ]
  },
  {
    role: "Senior Manager, Customer Support",
    company: "ToutApp",
    fullHyperlinkText: "Visit ToutApp (Acquired by Marketo/Adobe)",
    url: "https://toutapp.com",
    location: "San Francisco, CA",
    period: "Mar 2017 – May 2017",
    highlights: [
      { label: "M&A Advisory", text: "Brought on specifically to lead support operations through the transition and due diligence phase ahead of the Marketo acquisition." },
      { label: "Product Feedback Loops", text: "Collaborated with Product/Engineering to improve usability and surface customer insights, ensuring operational stability for a successful exit." }
    ]
  },
  {
    role: "Global Technical Support & Research Manager",
    company: "Netflix",
    url: "https://netflix.com",
    location: "Los Gatos, CA",
    period: "Apr 2015 – Mar 2017",
    highlights: [
      { label: "Delivery Team Leadership", text: "Managed Tier 2 and Tier 3 Internal Delivery Teams that built custom internal tools and CRM features to reduce handle time by 52%." },
      { label: "Large-Scale Transformation", text: "Relocated and scaled Technical Research operations, increasing headcount 10x while maintaining Service Levels and Resolution Rates >90%." },
      { label: "Global Strategy", text: "Served as the sole incident responder for CS globally during the 2016 launch to 130 territories." }
    ]
  },
  {
    role: "Manager, Customer Support",
    company: "Netflix",
    url: "https://netflix.com",
    location: "Los Gatos, CA",
    period: "Mar 2013 – Apr 2015",
    highlights: [
      { label: "CRM Innovation", text: "Advised on the design and implementation of Netflix in-house CRM tools to prioritize security and cost-efficiency over third-party vendors." },
      { label: "Value Optimization", text: "Led customer advocacy teams for global outsourced locations, achieving 95.6% CSAT and improving DSAT by 4% through rigorous A/B testing on cancellation calls." }
    ]
  }
];

const ICON_MAP = {
  Bot: Bot,
  Globe: Globe,
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Layers: Layers,
  Cpu: Cpu,
  Database: Database,
  Users: Users
};

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expandedJobs, setExpandedJobs] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const toggleJob = (id) => {
    setExpandedJobs(prev => {
      const isCurrentlyExpanded = prev[id];
      if (isCurrentlyExpanded) {
        return { ...prev, [id]: false };
      }
      return { [id]: true };
    });
  };

  const Nav = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 py-3 md:py-4 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setActiveTab('home')}>
          <div className="w-10 h-10 transform group-hover:rotate-12 transition-transform duration-300">
            <FudashiLogo />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase group-hover:text-[#4fd5ca] transition-colors">FUDASHI</span>
        </div>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-12 items-center">
          <button onClick={() => setActiveTab('home')} className={`text-xs font-bold tracking-[0.2em] uppercase transition-all ${activeTab === 'home' ? 'text-white underline underline-offset-8 decoration-[#4fd5ca]' : 'text-zinc-500 hover:text-white'}`}>Home</button>
          <button onClick={() => setActiveTab('expertise')} className={`text-xs font-bold tracking-[0.2em] uppercase transition-all ${activeTab === 'expertise' ? 'text-[#e4ff00] underline underline-offset-8 decoration-[#e4ff00]' : 'text-zinc-500 hover:text-white'}`}>EXPERTISE</button>
          <button onClick={() => setActiveTab('consultant')} className={`text-xs font-bold tracking-[0.2em] uppercase transition-all ${activeTab === 'consultant' ? 'text-[#4fd5ca] underline underline-offset-8 decoration-[#4fd5ca]' : 'text-zinc-500 hover:text-white'}`}>Experts</button>
        </div>
      </div>
    </nav>
  );

  const MobileNav = () => (
    <div className="md:hidden fixed bottom-4 left-0 right-0 mx-auto w-[calc(100%-2rem)] max-w-sm z-[100]">
      <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-around py-3 px-2 shadow-2xl shadow-black">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 flex-1 transition-all duration-300 ${activeTab === 'home' ? 'text-[#4fd5ca] scale-110' : 'text-zinc-500'}`}
        >
          <Globe size={20} />
          <span className="text-[10px] font-black uppercase tracking-widest">Home</span>
        </button>
        <button 
          onClick={() => setActiveTab('expertise')}
          className={`flex flex-col items-center gap-1 flex-1 transition-all duration-300 ${activeTab === 'expertise' ? 'text-[#e4ff00] scale-110' : 'text-zinc-500'}`}
        >
          <Layers size={20} />
          <span className="text-[10px] font-black uppercase tracking-widest">Services</span>
        </button>
        <button 
          onClick={() => setActiveTab('consultant')}
          className={`flex flex-col items-center gap-1 flex-1 transition-all duration-300 ${activeTab === 'consultant' ? 'text-[#fc267e] scale-110' : 'text-zinc-500'}`}
        >
          <Briefcase size={20} />
          <span className="text-[10px] font-black uppercase tracking-widest">Experts</span>
        </button>
      </div>
    </div>
  );

  const HomeView = () => (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center relative px-6 overflow-hidden pb-20 md:pb-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#4fd5ca]/10 via-[#fc267e]/5 to-[#e4ff00]/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      
      <div className="relative z-10 text-center animate-in fade-in zoom-in duration-1000">
        <div className="w-40 h-40 md:w-80 md:h-80 mx-auto mb-6 md:mb-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] drop-shadow-[0_0_40px_rgba(79,213,202,0.1)]">
          <FudashiLogo />
        </div>
        
        <div className="space-y-6 md:space-y-8 max-w-5xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-9xl font-black tracking-tighter text-white uppercase leading-none">FUDASHI</h1>
            <p className="text-xl md:text-3xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#4fd5ca] via-[#fc267e] to-[#e4ff00] pb-2">Customer Service Strategy & AI Transformation Consulting</p>
          </div>

          <div className="flex justify-center pt-4 md:pt-10">
            <button 
              onClick={() => setActiveTab('expertise')}
              className="group px-8 py-4 md:px-12 md:py-6 bg-white text-black rounded-sm font-black uppercase tracking-[0.2em] flex items-center gap-4 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
            >
              SERVICES <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ExpertiseView = () => (
    <div className="min-h-screen bg-[#050505] text-white pt-32 md:pt-40 pb-20 md:pb-24 animate-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 space-y-6 max-w-4xl">
          <div className="w-12 h-1 bg-[#e4ff00] mb-6"></div>
          <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-2">CORE EXPERTISE & SERVICES</h2>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">Enterprise optimization. Small-business automation.</h3>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              We refine CRM, chatbot, IVR systems, CCaaS, and CS departments for Fortune 500 companies and eliminate manual work with AI for small businesses. Now teams at every scale can do more with less.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_BLOCKS.map((block, i) => {
            const IconComponent = ICON_MAP[block.icon];
            const iconColors = {
              Bot: "text-[#4fd5ca]",
              Globe: "text-[#e4ff00]",
              TrendingUp: "text-[#fc267e]",
              Briefcase: "text-[#fba03e]",
              Layers: "text-[#4fd5ca]",
              Cpu: "text-[#fc267e]",
              Database: "text-[#e4ff00]",
              Users: "text-[#4fd5ca]"
            };
            return (
              <div key={i} className="p-6 md:p-8 bg-zinc-900/30 border border-white/5 rounded-sm hover:border-white/20 transition-all group flex flex-col min-h-0 md:min-h-[380px]">
                <div className="w-12 h-12 bg-black border border-white/10 rounded-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <IconComponent className={`w-6 h-6 ${iconColors[block.icon]}`} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4">{block.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">{block.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const ConsultantView = () => (
    <div className="min-h-screen bg-[#050505] text-white pt-32 md:pt-40 pb-20 md:pb-24 animate-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Profile Card */}
        <div className="flex flex-col md:flex-row gap-12 mb-32 items-start border-b border-white/5 pb-20">
          <div className="w-full md:w-80 shrink-0">
            <div className="aspect-[3/4] bg-zinc-900 border border-white/10 rounded-sm overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <FudashiLogo className="w-1/2" />
              </div>
              <img
                src="/assets/founder/doug-founder-fudashi-netflix.png"
                alt="Doug - Principal & Founder"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  e.target.style.opacity = '0';
                }}
              />
            </div>
            <div className="mt-8 space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Education</h4>
              <p className="text-sm font-bold text-white leading-relaxed">
                Bachelor of Science <br/> Business Administration & Management <br/>
                <span className="text-[#e4ff00] text-xs font-medium">Minor: Entrepreneurship</span>
              </p>
            </div>
          </div>
          
          <div className="flex-1 space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-start gap-12">
              <div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">DOUG</h2>
                <p className="text-xl font-bold uppercase tracking-[0.1em] text-[#4fd5ca]">Principal & Founder</p>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center gap-2">
                  <a href="https://www.linkedin.com/in/doug-schlechter-b2130a1a/" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 border border-white/5 hover:border-[#4fd5ca] transition-all text-white"><Linkedin size={24}/></a>
                  <span className="text-[11px] font-black uppercase tracking-widest text-white">Connect</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <a href="https://github.com/FUDASHI-DASH" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 border border-white/5 hover:border-[#fc267e] transition-all text-white"><Github size={24}/></a>
                  <span className="text-[11px] font-black uppercase tracking-widest text-white">Projects</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <a href="mailto:contact@fudashi.ai" className="p-4 bg-zinc-900 border border-white/5 hover:border-[#e4ff00] transition-all text-white"><Mail size={24}/></a>
                  <span className="text-[11px] font-black uppercase tracking-widest text-white">Contact</span>
                </div>
              </div>
            </div>

            {/* Competencies Grid */}
            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
              {[
                { 
                  label: "Transformation & Strategy", 
                  color: "text-[#e4ff00]", 
                  content: "Customer Service Transformation | Business Case Development | Transformation Roadmaps | Organizational Redesign | Cost Optimization | Revenue Growth Strategies" 
                },
                { 
                  label: "Technology & AI", 
                  color: "text-[#fba03e]", 
                  content: "GenAI Implementation | Agentic AI | Conversational AI/Chatbots | Salesforce CRM | CCaaS Platforms | IVR Design | Cloud (SaaS) Solutions | Front-End Digital Platforms" 
                },
                { 
                  label: "Operations & Delivery", 
                  color: "text-[#fc267e]", 
                  content: "Global Ecosystem Management | BPO Vendor Management | Agile Delivery | Experience Design | Self-Service Strategy | CSAT/NPS Optimization" 
                },
                { 
                  label: "Client Engagement", 
                  color: "text-[#4fd5ca]", 
                  content: "Proposal Development | Stakeholder Management | Executive Communication | Cross-Functional Collaboration" 
                }
              ].map((c, i) => (
                <div key={i} className="space-y-3">
                  <h5 className={`text-xs font-black uppercase tracking-[0.2em] ${c.color}`}>{c.label}</h5>
                  <p className="text-sm font-medium text-white leading-relaxed tracking-wide">{c.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Projects */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Terminal size={24} className="text-[#fc267e]" />
            <h3 className="text-3xl font-black uppercase tracking-tight">Technical Projects</h3>
          </div>
          <div className="p-10 bg-zinc-900/40 border border-[#fc267e]/20 rounded-sm group hover:border-[#fc267e]/50 transition-all">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
              <h4 className="text-2xl font-black text-white uppercase tracking-tight">FUDASHI PHUTURE — WFM Scheduling Application</h4>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#fc267e] border border-[#fc267e]/30 px-3 py-1 rounded-full">Lead Developer / Architect</span>
            </div>
            <div className="space-y-6">
              {[
                "Designed and built custom WFM application to solve staffing, availability, and behavioral challenges for contact centers.",
                "Translated complex operational requirements into system logic balancing coverage, agent flexibility, and utilization efficiency.",
                "Leveraged AI-assisted development tools for rapid agile prototyping, mirroring enterprise transformation delivery practices."
              ].map((point, i) => (
                <div key={i} className="flex gap-4 items-start text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fc267e] mt-2 shrink-0"></div>
                  <p className="text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase size={24} className="text-[#4fd5ca]" />
            <h3 className="text-3xl font-black uppercase tracking-tight">Career Highlights</h3>
          </div>
          
          <div className="space-y-4">
            {CAREER_HIGHLIGHTS.map((exp, i) => {
              const isExpanded = expandedJobs[i];
              return (
                <div key={i} className="group relative border-b border-white/5 last:border-0 overflow-hidden">
                  <button 
                    onClick={() => toggleJob(i)}
                    className="w-full flex flex-col md:flex-row justify-between items-start md:items-center py-6 group hover:bg-white/[0.02] transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown size={20} className="text-zinc-600 group-hover:text-[#4fd5ca]" />
                      </div>
                      <h4 className="text-xl font-black uppercase tracking-tight">
                        <span className="text-[#4fd5ca]">{exp.company}</span> 
                        <span className="text-zinc-700 mx-2">—</span> 
                        <span className="text-white">{exp.role}</span>
                      </h4>
                    </div>
                  </button>

                  <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 pb-12 pl-4 md:pl-14' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Duration:</span>
                        <span className="text-xs font-black uppercase tracking-widest text-[#fc267e]">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Location:</span>
                        <span className="text-xs font-black uppercase tracking-widest text-[#e4ff00]">{exp.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-8 h-8 bg-white/5 flex items-center justify-center rounded-sm">
                        <Globe size={16} className="text-zinc-500" />
                      </div>
                      <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-[#4fd5ca] font-bold uppercase tracking-widest text-sm hover:underline flex items-center gap-2">
                        {exp.fullHyperlinkText || `Visit ${exp.company}`} <ExternalLink size={12} />
                      </a>
                    </div>
                    
                    <div className="space-y-6 max-w-4xl">
                      {exp.highlights.map((h, j) => (
                        <div key={j} className="flex gap-4">
                          <div className="mt-2.5 w-1.5 h-1.5 bg-zinc-800 rounded-sm shrink-0"></div>
                          <p className="text-base leading-relaxed text-white">
                            <span className="text-[#fba03e] font-black uppercase tracking-tighter text-[12px] mr-2">
                              {h.label}:
                            </span>
                            {h.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <Gamepad2 size={24} className="text-[#e4ff00]" />
            <h3 className="text-3xl font-black uppercase tracking-tight">Competitive Background</h3>
          </div>
          <div className="p-12 bg-zinc-900/30 border border-white/5 rounded-sm relative overflow-hidden group">
            <div className="absolute right-[-10%] bottom-[-10%] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              <FudashiLogo className="w-[600px] h-[600px]" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <Gamepad2 className="text-[#4fd5ca]" size={32} />
                    <h4 className="text-3xl font-black tracking-tighter uppercase">CO-FOUNDER: <span className="text-[#4fd5ca]">EXO Esports</span></h4>
                  </div>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed font-medium italic pr-4">
                  "Before founding FUDASHI, we scaled EXO Esports into a globally competitive professional gaming organization, competing for million-dollar prize pools worldwide. By integrating performance coaching, data analysis, and Silicon Valley type problem solving, we built a disciplined, results-driven operation in one of the most competitive environments imaginable. That foundation in high-stakes performance now informs our data-first approach to business transformation and operational turnarounds."
                </p>
                <div className="flex gap-8 pt-4">
                  <a href="https://liquipedia.net/halo/EXO_Esports/Results" target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-[#4fd5ca] transition-colors">Tournament Results <ExternalLink size={14} /></a>
                  <a href="https://raven.gg/stores/exo/" target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:text-[#4fd5ca] transition-colors">EXO Store <ExternalLink size={14} /></a>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                 <div className="p-6 md:p-10 bg-black/40 border border-white/5 rounded-sm flex items-center justify-center w-full max-w-xs group-hover:border-[#4fd5ca]/30 transition-all min-h-[220px] md:min-h-[280px]">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src="/assets/exo/exo-logo.png"
                        alt="EXO Esports Logo"
                        loading="lazy"
                        className="max-h-[150px] md:max-h-[190px] w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(79,213,202,0.4)] transition-all duration-500 group-hover:drop-shadow-[0_0_30px_rgba(79,213,202,0.6)]"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const placeholder = document.createElement('div');
                          placeholder.innerText = 'EXO';
                          placeholder.className = 'text-[#4fd5ca] text-6xl font-black italic tracking-tighter';
                          e.target.parentNode.appendChild(placeholder);
                        }}
                      />
                    </div>
                 </div>
                 <span className="text-[10px] text-zinc-600 uppercase font-black tracking-[0.2em]">Professional Esports Organization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="selection:bg-white selection:text-black font-sans tracking-tight bg-[#050505] min-h-screen">
      <Nav />
      <MobileNav />
      {activeTab === 'home' && <HomeView />}
      {activeTab === 'expertise' && <ExpertiseView />}
      {activeTab === 'consultant' && <ConsultantView />}
      
      <footer className="bg-[#050505] py-12 md:py-24 border-t border-white/5 mb-24 md:mb-0">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8"><FudashiLogo /></div>
              <span className="text-2xl font-black tracking-tighter uppercase text-white">FUDASHI</span>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-xs uppercase font-bold tracking-tighter">Portland based. Global mission. Turning data into human performance.</p>
          </div>
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Capability</h5>
              <div className="flex flex-col gap-2 text-xs font-bold text-zinc-400 uppercase tracking-tighter">
                <span className="hover:text-white transition-colors cursor-default">CCaaS Strategy</span>
                <span className="hover:text-white transition-colors cursor-default">AI Automation</span>
                <span className="hover:text-white transition-colors cursor-default">Global Ops</span>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Inquire</h5>
              <div className="flex flex-col gap-2 text-xs font-bold text-zinc-400 uppercase tracking-tighter">
                <a href="mailto:contact@fudashi.ai" className="hover:text-[#4fd5ca] transition-colors">contact@fudashi.ai</a>
                <span className="hover:text-white transition-colors cursor-default">Portland, OR</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col md:items-end gap-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Principal</h5>
            <p className="text-xl font-black uppercase tracking-tighter text-white underline decoration-[#4fd5ca] underline-offset-8">DOUG</p>
            <div className="flex gap-6">
              <a href="https://github.com/FUDASHI-DASH" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors"><Github size={20}/></a>
              <a href="https://www.linkedin.com/in/doug-schlechter-b2130a1a/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors"><Linkedin size={20}/></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 md:mt-20 pt-6 md:pt-10 border-t border-white/5 opacity-20">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">© 2024 FUDASHI CONSULTING GROUP</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
