import React, { useState } from 'react';
import { FaPhone, FaLinkedin, FaGithub, FaDiscord, FaInstagram, FaCopy, FaCheck } from 'react-icons/fa6';
import GmailIcon from '../assets/gmail_icon.svg';

const Footer = () => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jayani9476/',
      icon: <FaLinkedin className="text-xl" />,
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/jayani9',
      icon: <FaGithub className="text-xl" />,
      color: 'hover:text-white hover:border-slate-500',
    },
    {
      name: 'Discord',
      icon: <FaDiscord className="text-xl" />,
      color: 'hover:text-[#5865F2] hover:border-[#5865F2]/40',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="text-xl" />,
      color: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
    },
  ];

  return (
    <footer className="relative bg-[#030712] text-slate-300 border-t border-slate-900 overflow-hidden font-inter">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Intro & Brand */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Connect</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Open for full-stack, mobile, and data engineering opportunities. Feel free to reach out for collaborations or inquiries.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400/90 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities
            </div>
          </div>

          {/* Column 2: Direct Contact */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              
              {/* Email */}
              <div 
                onClick={() => copyToClipboard('jayani135@gmail.com', 'email')}
                className="group flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/50">
                    <img src={GmailIcon} alt="Gmail" className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition">
                    jayani135@gmail.com
                  </span>
                </div>
                <button className="text-slate-500 group-hover:text-cyan-400 transition p-1.5 rounded-lg hover:bg-slate-800">
                  {copiedText === 'email' ? <FaCheck className="w-3.5 h-3.5 text-emerald-400" /> : <FaCopy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div 
                onClick={() => copyToClipboard('+358417225397', 'phone')}
                className="group flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/50 text-cyan-400">
                    <FaPhone className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition font-mono">
                    +358 41 722 5397
                  </span>
                </div>
                <button className="text-slate-500 group-hover:text-cyan-400 transition p-1.5 rounded-lg hover:bg-slate-800">
                  {copiedText === 'phone' ? <FaCheck className="w-3.5 h-3.5 text-emerald-400" /> : <FaCopy className="w-3.5 h-3.5" />}
                </button>
              </div>

            </div>
          </div>

          {/* Column 3: Social Networks */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Social Profiles
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-400 text-xs font-mono transition-all duration-300 ${social.color} hover:-translate-y-0.5`}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Jayani Kothalawala. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Built with <span className="text-cyan-400">React</span> & <span className="text-purple-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;