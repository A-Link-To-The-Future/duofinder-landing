'use client';

import React, { useState } from 'react';
import { ArrowRight, MessageCircle, X, CheckCircle, Target, Zap, Headphones } from 'lucide-react';

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setShowModal(false);
        setSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar - centered container */}
      <nav className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-small.png" alt="DuoFinder" className="h-10 md:h-20 w-auto rounded-lg" />
            <span className="text-xl font-bold text-white tracking-tight">DuoFinder</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 after:transition-all hover:after:w-full">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-purple-500 after:transition-all hover:after:w-full">How It Works</button>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="btn-primary btn-glow text-sm py-2.5 px-5"
          >
            <span>Get Early Access</span>
          </button>
        </div>
      </nav>

      {/* Hero Section - fully centered */}
      <section className="relative z-10 w-full px-6 lg:px-8 pt-16 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Coming Soon — Join 500+ players on the waitlist
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight mx-auto text-center">
            Find Your Perfect
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              League Duo
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-center">
            Smart matchmaking for serious League of Legends players. We pair you with compatible teammates based on role, rank, and playstyle. No more solo queue nightmares.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => setShowModal(true)}
              className="btn-primary btn-glow group"
            >
              <span>
                Join Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="btn-secondary"
            >
              Learn More
            </button>
          </div>

          {/* Stats - centered */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto pt-12 border-t border-slate-800/50">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">Role</div>
              <div className="text-slate-500 text-xs sm:text-sm">Based</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">Rank</div>
              <div className="text-slate-500 text-xs sm:text-sm">Matched</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">Live</div>
              <div className="text-slate-500 text-xs sm:text-sm">Queue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - centered */}
      <section id="features" className="relative z-10 w-full px-6 lg:px-8 py-24 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Serious Players
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Everything you need to find consistent, compatible duo partners
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <FeatureCard 
              icon={<Target className="w-5 h-5" />}
              title="Smart Matching"
              description="Our algorithm considers your role, rank, and champion mastery to find duos that complement your playstyle."
            />
            <FeatureCard 
              icon={<Zap className="w-5 h-5" />}
              title="Live Queue"
              description="See real-time stats on who's queuing for which roles. Know your estimated wait time before you start."
            />
            <FeatureCard 
              icon={<Headphones className="w-5 h-5" />}
              title="Discord Integration"
              description="Get auto-invited to temporary voice channels with your match. Coordinate seamlessly from day one."
            />
          </div>
        </div>
      </section>

      {/* How It Works - centered */}
      <section id="how-it-works" className="relative z-10 w-full px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            How It Works
          </h2>
          
          <div className="space-y-6">
            <Step 
              number="01"
              title="Link Your Riot Account"
              description="Sign in with your Riot ID. We pull your rank, role preferences, and champion mastery automatically."
            />
            <Step 
              number="02"
              title="Enter the Queue"
              description="Select your preferred role(s) and see live data on who's waiting. Queue solo or as a partial party."
            />
            <Step 
              number="03"
              title="Get Matched"
              description="When we find a compatible partner, you'll get a notification with their Discord and Riot ID. Accept or pass."
            />
            <Step 
              number="04"
              title="Climb Together"
              description="Add them in-game, join the Discord voice channel, and start your climb. Rate your duo after the session."
            />
          </div>
        </div>
      </section>

      {/* CTA Section - centered */}
      <section className="relative z-10 w-full px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Duo?
          </h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">
            Join the waitlist today and be the first to know when we launch. Early adopters get lifetime premium perks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowModal(true)}
              className="btn-primary btn-glow w-full sm:w-auto"
            >
              <span>Join Waitlist</span>
            </button>
            <a
              href="https://discord.gg/duofinder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              Join Discord
            </a>
          </div>
        </div>
      </section>

      {/* Footer - centered */}
      <footer className="relative z-10 w-full px-6 lg:px-8 py-12 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <span className="text-lg font-bold text-white">DuoFinder</span>
            <p className="text-slate-500 text-sm order-last md:order-none">
              © 2025 DuoFinder. Not affiliated with Riot Games.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="https://twitter.com/duofinder" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a>
              <a href="https://discord.gg/duofinder" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Discord</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-md w-full relative mx-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:text-white hover:bg-slate-800 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            
            {!submitted ? (
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Join the Waitlist</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Be the first to find your perfect duo. Early access members get lifetime premium features.
                </p>
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition text-sm text-center"
                  />
                  <button
                    type="submit"
                    className="btn-primary btn-glow w-full py-3 rounded-xl"
                  >
                    <span className="justify-center">Get Early Access</span>
                  </button>
                </form>
                <p className="text-slate-500 text-xs mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                <p className="text-slate-400 text-sm">
                  We'll notify you as soon as DuoFinder launches.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-7 hover:border-slate-700 transition group text-center mx-auto w-full">
      <div className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center text-cyan-400 mx-auto mb-4 group-hover:bg-slate-700 transition">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 text-center">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed text-center">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="bg-slate-900/30 rounded-2xl p-6 text-center mx-auto w-full">
      <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-cyan-400 font-bold text-sm mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 text-center">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto text-center">{description}</p>
    </div>
  );
}
