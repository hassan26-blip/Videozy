import { motion } from 'motion/react';
import { Play, Video, Film, MousePointer2, ChevronRight, Star, Quote, Mail, Phone, MapPin, Youtube, Instagram, Twitter, Facebook, ArrowRight, Sparkles, Cpu, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg rotate-3 overflow-hidden">
             <Video className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter">VIDEOZY</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#ai-services" className="hover:text-primary transition-colors text-primary font-bold">AI Video</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-primary transition-colors text-white border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black">Get a Quote</a>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6 transition-all shadow-sm">
              Premium Video Production
            </span>
            <h1 className="text-6xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
              WE BRING YOUR <span className="text-primary italic">STORY</span> TO LIFE.
            </h1>
            <p className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
              Videozy helps brands communicate better through stunning animated explainer videos and professional cinematography.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center gap-2 group shadow-2xl shadow-primary/20 cursor-pointer">
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 cursor-pointer">
                <Play className="w-5 h-5" /> View Showreel
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
             <img 
               src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2070&auto=format&fit=crop" 
               alt="Video Production" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <p className="text-primary font-bold text-sm mb-2 uppercase tracking-widest">Latest Project</p>
                  <h3 className="text-2xl font-display font-bold text-white">Dynamic Brand Identity 2024</h3>
                </div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                   whileHover={{ scale: 1.1 }}
                   className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer border border-white/30"
                >
                  <Play className="w-8 h-8 fill-white text-white" />
                </motion.div>
             </div>
          </div>
          
          {/* Animated Floaties */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <MousePointer2 className="text-black w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="text-white/40 uppercase">Delivery Time</div>
                <div className="text-white font-bold">14 Working Days</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "2D & 3D Animation",
      desc: "Captivating explainer videos that break down complex ideas into simple visuals.",
      icon: <Video className="w-10 h-10 text-primary" />,
      tag: "Explainer"
    },
    {
      title: "Commercial Shoots",
      desc: "High-end cinematography for TV commercials and online brand campaigns.",
      icon: <Film className="w-10 h-10 text-accent" />,
      tag: "Cinema"
    },
    {
      title: "Motion Graphics",
      desc: "Dynamic UI/UX animations and social media assets to boost engagement.",
      icon: <MousePointer2 className="w-10 h-10 text-white" />,
      tag: "UI/UX"
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="md:w-1/2">
            <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Our Expertise</span>
            <h2 className="text-5xl font-display font-bold leading-none tracking-tighter">UNMATCHED VIDEO QUALITY FOR AMBITIOUS BRANDS.</h2>
          </div>
          <p className="text-white/40 md:w-1/3 leading-relaxed">
            We combine technical mastery with creative storytelling to ensure your message doesn't just get seen, but felt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-white/5 border border-white/10 rounded-3xl group transition-all duration-500 hover:bg-white hover:border-white"
            >
              <div className="mb-8 group-hover:bg-black rounded-2xl w-16 h-16 flex items-center justify-center transition-all">
                {s.icon}
              </div>
              <div className="text-primary font-bold uppercase tracking-widest text-xs mb-3 group-hover:text-primary/70 transition-colors">{s.tag}</div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-black transition-colors">{s.title}</h3>
              <p className="text-white/60 group-hover:text-black/60 transition-colors leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <section id="portfolio" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter uppercase underline decoration-primary/50 underline-offset-8">Selected Works</h2>
          <p className="text-white/50 max-w-xl mx-auto uppercase tracking-widest text-sm">A glimpse into our visual legacy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl group aspect-video"
            >
              <img src={p} alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl font-display font-bold text-white">Brand Storytelling</h4>
                  <p className="text-white/60 mb-4">Motion Graphics & Sound Design</p>
                  <button className="text-sm font-bold flex items-center gap-2 text-primary cursor-pointer">
                    View Project <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <button className="border border-white/20 hover:border-primary text-white hover:text-primary px-10 py-4 rounded-full font-bold transition-all uppercase tracking-widest text-sm cursor-pointer">
             Browse Full Portfolio
           </button>
        </div>
      </div>
    </section>
  );
};

const Workflow = () => {
  const steps = [
    { title: "Discovery", desc: "We dive deep into your brand identity and goals." },
    { title: "Scripting", desc: "Crafting a narrative that resonates and converts." },
    { title: "Storyboard", desc: "Visual mapping of every frame for perfect flow." },
    { title: "Production", desc: "Bringing it all together with high-end tools." }
  ];

  return (
    <section id="process" className="py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-5xl md:text-8xl font-display font-bold mb-20 tracking-tighter uppercase flex flex-wrap gap-4 leading-none">
          {["THE", "PROCESS", "OF", "PERFECTION"].map((word, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <div className="grid md:grid-cols-4 gap-12 text-white">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-8xl font-display font-black opacity-10 absolute -top-12 -left-4">0{i+1}</div>
              <h3 className="text-2xl font-display font-bold mb-4 relative z-10">{step.title}</h3>
              <p className="text-white/80 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-black border-y border-white/5 overflow-hidden">
       <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <div className="space-y-12">
                <div className="flex gap-1">
                   {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <blockquote className="text-4xl md:text-5xl font-display font-bold text-white leading-tight italic">
                   "Videozy completely transformed our social presence. Their explainer video helped us increase conversion by <span className="text-primary underline">40%</span> in just a month!"
                </blockquote>
                <div className="flex items-center gap-4">
                   <div className="w-14 h-14 bg-white/10 rounded-full overflow-hidden border border-white/20">
                      <img src="https://i.pravatar.cc/150?u=1" alt="Avatar" referrerPolicy="no-referrer" />
                   </div>
                   <div>
                      <div className="font-bold text-white">Sarah Jenkins</div>
                      <div className="text-white/40 text-sm">Marketing Director, TechFlow Ltd.</div>
                   </div>
                </div>
             </div>
             
             <div className="relative">
                <div className="aspect-square bg-white/5 rounded-full flex items-center justify-center border border-white/10 relative">
                   <Quote className="w-32 h-32 text-primary opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                   <motion.div 
                     animate={{ rotate: 360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full"
                   />
                   <div className="p-12 text-center space-y-4 z-10">
                      <div className="text-6xl font-display font-bold">250+</div>
                      <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Happy Clients Worldwide</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

const AIServices = () => {
  const services = [
    {
      title: "AI Video Ads",
      desc: "Harness the power of generative AI to create high-converting video ads in minutes, not weeks.",
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      tag: "AI Gen"
    },
    {
      title: "AI Commercials",
      desc: "Cinematic quality AI-generated commercials for TV and social media with hyper-realistic visuals.",
      icon: <Cpu className="w-10 h-10 text-accent" />,
      tag: "Deep Tech"
    },
    {
      title: "Virtual Avatars",
      desc: "Digital humans and AI spokespersons for your brand that speak any language fluently.",
      icon: <Zap className="w-10 h-10 text-white" />,
      tag: "Avatars"
    }
  ];

  return (
    <section id="ai-services" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Future of Production</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.8] tracking-tighter uppercase">AI DRIVEN <br/><span className="text-primary">CREATIVITY.</span></h2>
          </div>
          <p className="text-white/40 md:w-1/3 leading-relaxed border-l border-white/10 pl-8">
            Leverage cutting-edge artificial intelligence to scale your video content production without compromising on premium quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-12 bg-black/40 backdrop-blur-xl border border-white/5 rounded-[40px] group transition-all duration-500 hover:border-primary/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-primary transition-all">
                {s.icon}
              </div>
              <div className="text-primary font-bold uppercase tracking-widest text-[10px] mb-3">{s.tag}</div>
              <h3 className="text-2xl font-display font-bold mb-4">{s.title}</h3>
              <p className="text-white/40 leading-relaxed group-hover:text-white/80 transition-colors">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoShowcase = () => {
  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display font-bold mb-6 tracking-tighter">WATCH OUR SHOWREEL</h2>
          <p className="text-white/40 max-w-xl mx-auto">See the quality we deliver to our premium clients around the globe.</p>
        </div>
        
        <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 group bg-white/5 flex items-center justify-center">
          {/* Using a placeholder video URL or Iframe */}
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=0&loop=1" 
            title="Showcase Video"
            className="w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-1000"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/40" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-all duration-700 group-hover:opacity-0">
            <motion.div 
               whileHover={{ scale: 1.1 }}
               className="w-24 h-24 bg-primary rounded-full flex items-center justify-center cursor-pointer shadow-3xl shadow-primary/40"
            >
              <Play className="w-10 h-10 text-white fill-white" />
            </motion.div>
            <h3 className="mt-8 text-3xl font-display font-bold">2024 SHOWCASE</h3>
            <p className="text-white/40 uppercase tracking-widest text-xs font-bold mt-2">Click to play with sound</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter AI",
      price: "499",
      features: ["1 AI Explainer Video", "Script Writing", "Premium VO", "2 Rounds of Revision", "7 Days Delivery"],
      color: "white"
    },
    {
      name: "Brand Scale",
      price: "1299",
      features: ["3 AI Commercials", "Full Creative Strategy", "AI Human Avatars", "Unlimited Revisions", "Priority Support"],
      color: "primary",
      popular: true
    },
    {
      name: "Enterprise",
      price: "3499",
      features: ["Custom AI Training", "Bulk Ad Production", "Dedicated Producer", "Global Media Buying", "White-label Portal"],
      color: "white"
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Pricing Plans</span>
          <h2 className="text-5xl font-display font-bold tracking-tighter">AFFORDABLE EXCELLENCE</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[40px] border flex flex-col items-center text-center transition-all duration-500 ${
                plan.popular 
                ? 'bg-primary border-primary text-white scale-105 shadow-2xl shadow-primary/20' 
                : 'bg-white/5 border-white/10 text-white'
              }`}
            >
              {plan.popular && <span className="bg-black text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase mb-6">Most Popular</span>}
              <h3 className="text-2xl font-display font-bold mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-display font-bold">$</span>
                <span className="text-7xl font-display font-bold leading-none">{plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className={`text-sm ${plan.popular ? 'text-white/80' : 'text-white/40'} flex items-center justify-center gap-2`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${plan.popular ? 'bg-black' : 'bg-primary'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-2xl font-bold transition-all uppercase tracking-widest text-xs cursor-pointer ${
                plan.popular ? 'bg-black text-white hover:bg-black/80' : 'bg-primary text-white hover:bg-primary/90'
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[40px] p-12 md:p-20 text-black grid md:grid-cols-2 gap-16">
             <div>
                <h2 className="text-5xl font-display font-bold mb-8 leading-none tracking-tight">READY TO MAKE SOMETHING <span className="text-primary">LEGENDARY?</span></h2>
                <p className="text-black/60 text-lg mb-12">
                   Fill out the form below or reach out directly. We usually respond within 24 hours.
                </p>
                
                <div className="space-y-6 text-black">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                         <Mail className="w-6 h-6" />
                      </div>
                      <div>
                         <div className="text-xs font-bold opacity-50 uppercase">Email Us</div>
                         <div className="font-bold">hello@videozy.com</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                         <Phone className="w-6 h-6" />
                      </div>
                      <div>
                         <div className="text-xs font-bold opacity-50 uppercase">Call Us</div>
                         <div className="font-bold">+1 (555) 123-4567</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                         <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                         <div className="text-xs font-bold opacity-50 uppercase">Location</div>
                         <div className="font-bold">Los Angeles, CA</div>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="space-y-6 text-black">
                <div className="space-y-4">
                   <label className="text-xs font-black uppercase tracking-widest">Full Name</label>
                   <input type="text" placeholder="John Doe" className="w-full bg-black/5 border border-black/10 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-4">
                   <label className="text-xs font-black uppercase tracking-widest">Email Address</label>
                   <input type="email" placeholder="john@example.com" className="w-full bg-black/5 border border-black/10 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-4">
                   <label className="text-xs font-black uppercase tracking-widest">Project Details</label>
                   <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-black/5 border border-black/10 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <button className="w-full bg-primary hover:bg-black text-white px-8 py-5 rounded-xl font-bold transition-all uppercase tracking-widest text-sm shadow-xl shadow-primary/20 cursor-pointer">
                   Send Inquiry
                </button>
             </div>
          </div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
       <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 pb-12 mb-12 border-b border-white/5">
             <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg rotate-3 overflow-hidden">
                   <Video className="text-white w-6 h-6" />
                </div>
                <span className="font-display font-bold text-2xl tracking-tighter">VIDEOZY</span>
             </div>
             
             <div className="flex gap-8">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:border-primary group">
                   <Youtube className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:border-primary group">
                   <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:border-primary group">
                   <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:border-primary group">
                   <Facebook className="w-5 h-5 text-white" />
                </a>
             </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between text-white/40 text-xs uppercase tracking-widest font-bold">
             <div>© 2024 Videozy Production Group. All rights reserved.</div>
             <div className="flex gap-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             </div>
          </div>
       </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans antialiased bg-[#0D0D0D] text-white selection:bg-primary selection:text-white scroll-smooth leading-normal tracking-wide">
      <Navbar />
      <Hero />
      <AIServices />
      <VideoShowcase />
      <Services />
      <Workflow />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
