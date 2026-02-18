"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Layout, Users, Zap } from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 selection:bg-aim-gold selection:text-aim-blue">
      <Navbar />

      {/* --- ILLUSTRATIVE HERO --- */}
      <section className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
        {/* Background Blob for Depth */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-aim-blue/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-aim-gold/20 text-aim-blue font-bold text-sm">
              🚀 For the Students, By the Students
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
              Make It <span className="text-aim-blue">Happen.</span><br />
              Make It <span className="underline decoration-aim-gold decoration-4 underline-offset-4">Exist.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Don't let your ideas stay on the whiteboard. We build extensively, 
              launch efficiently, and help you lead. 
              <span className="block mt-2 font-semibold text-aim-blue">
                Websites. Mobile Apps. AI Solutions.
              </span>
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-aim-blue text-white rounded-xl font-bold hover:bg-aim-navy hover:scale-105 transition-all shadow-lg shadow-aim-blue/30 flex items-center gap-2">
                Start Building <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-bold text-slate-700 dark:text-slate-200 hover:border-aim-gold hover:text-aim-gold transition-all">
                Meet the Builders
              </button>
            </div>
          </motion.div>

          {/* ILLUSTRATION SLOT */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
            className="hidden md:flex justify-center"
          >
            {/* Replace this div with an <img src="/hero-illustration.svg" /> */}
            <div className="w-full h-96 bg-gradient-to-tr from-aim-blue/5 to-aim-gold/20 rounded-3xl border border-dashed border-aim-blue/30 flex items-center justify-center relative">
               <Cpu size={64} className="text-aim-blue mb-4 absolute top-10 left-10 opacity-50" />
               <Layout size={64} className="text-aim-gold mb-4 absolute bottom-10 right-10 opacity-50" />
               <p className="text-aim-blue font-mono text-sm">[ Insert "Team Building App" Illustration Here ]</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- THE WEEKEND MANIFESTO (Visual) --- */}
      <section className="py-24 bg-aim-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <Zap size={48} className="text-aim-gold mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Built on Weekends. Ready for Monday.</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            We know student life is busy. That's why we operate on <span className="text-aim-gold font-bold">sprints</span>.
            We take your concept on Friday and aim to have a prototype by Sunday. 
            Hosted on Vercel. Powered by coffee.
          </p>
        </div>
      </section>

      {/* --- CARDS WITH ICONS (Aim Theming) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Toolbelt</h2>
          <p className="text-slate-500">Industry standard tech, zero cost hosting.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Layout className="w-8 h-8 text-aim-blue" />, 
              title: "Web & Mobile", 
              desc: "Responsive sites and native apps built with React & Next.js.",
              border: "border-aim-blue"
            },
            { 
              icon: <Cpu className="w-8 h-8 text-aim-gold" />, 
              title: "AI & Emerging Tech", 
              desc: "Integration with OpenAI, vision models, and predictive analytics.",
              border: "border-aim-gold" 
            },
            { 
              icon: <Users className="w-8 h-8 text-aim-blue" />, 
              title: "Student Experience", 
              desc: "scheduling apps, club portals, and event managers.",
              border: "border-slate-200 dark:border-slate-700"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl bg-white dark:bg-slate-800 border-t-4 ${item.border} shadow-xl shadow-slate-200/50 dark:shadow-none`}
            >
              <div className="mb-4 bg-slate-50 dark:bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TEAM SECTION (Masonry Layout) --- */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white">The Builders</h2>
                    <p className="text-aim-blue font-medium mt-2">The 4 Guys Making It Happen</p>
                </div>
                <div className="hidden md:block pb-2">
                    <ArrowRight className="text-aim-gold w-8 h-8" />
                </div>
            </div>

            {/* A more illustrative grid layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
                {[1, 2, 3, 4].map((n) => (
                    <div key={n} className={`relative rounded-2xl overflow-hidden group ${n % 2 === 0 ? 'mt-8' : 'mb-8'}`}>
                        <img 
                            src={`https://api.dicebear.com/7.x/micah/svg?seed=${n}&backgroundColor=b6e3f4`}
                            alt="Team"
                            className="w-full h-full object-cover bg-slate-200" 
                        />
                        <div className="absolute inset-0 bg-aim-blue/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-4">
                            <div>
                                <p className="text-white font-bold text-lg">Builder {n}</p>
                                <p className="text-aim-gold text-sm">Tech Lead</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </main>
  );
}
