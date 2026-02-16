import React from 'react';
import { Gamepad2, Users, Zap, Shield, ArrowRight, MessageCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-8 h-8 text-cyan-400" />
          <span className="text-xl font-bold text-white">DuoFinder</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how-it-works" className="hover:text-white transition">How It Works</a>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-2 rounded-lg transition">
          Get Early Access
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-20 pb-32 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Coming Soon — Join the Waitlist
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Find Your Perfect
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            {" "}League Duo
          </span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Smart matchmaking for League of Legends players. We pair you with compatible teammates based on role, rank, and champion synergy. No more solo queue nightmares.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition group">
            Join Waitlist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl border border-slate-700 transition">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16 pt-16 border-t border-slate-800">
          <div>
            <div className="text-3xl font-bold text-white">Role</div>
            <div className="text-slate-500 text-sm">Based Matching</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">Rank</div>
            <div className="text-slate-500 text-sm">Compatible</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">Live</div>
            <div className="text-slate-500 text-sm">Queue Status</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Serious Players
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to find consistent, compatible duo partners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="w-6 h-6" />}
              title="Smart Matching"
              description="Our algorithm considers your role, rank, and champion mastery to find duos that actually complement your playstyle."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />}
              title="Live Queue"
              description="See real-time stats on who's queuing for which roles. Know your estimated wait time before you even start."
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6" />}
              title="Discord Integration"
              description="Matched? Get auto-invited to a temporary voice channel. Coordinate with your new duo seamlessly."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            How It Works
          </h2>
          
          <div className="space-y-8">
            <Step 
              number="1"
              title="Link Your Riot Account"
              description="Sign in with your Riot ID. We pull your rank, role preferences, and champion mastery automatically."
            />
            <Step 
              number="2"
              title="Enter the Queue"
              description="Select your preferred role(s) and see live data on who's waiting. Queue solo or as a partial party."
            />
            <Step 
              number="3"
              title="Get Matched"
              description="When we find a compatible partner, you'll get a notification with their Discord and Riot ID. Accept or pass."
            />
            <Step 
              number="4"
              title="Climb Together"
              description="Add them in-game, join the Discord voice channel, and start your climb. Rate your duo after the session."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl p-12 text-center border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Duo?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Join the waitlist today and be the first to know when we launch. Early adopters get lifetime premium perks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-4 rounded-xl transition">
              Join Waitlist
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition">
              <MessageCircle className="w-5 h-5" />
              Join Discord
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-cyan-400" />
            <span className="text-lg font-bold text-white">DuoFinder</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2025 DuoFinder. Not affiliated with Riot Games.
          </p>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition group">
      <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500/20 transition">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-slate-900 font-bold text-xl shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
}
