"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-[60vh] right-1/4 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Navigation */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-emerald-400 p-0.5 shadow-lg shadow-blue-500/20 flex items-center justify-center overflow-hidden">
              <Image 
                src="/icon.png" 
                width={40} 
                height={40} 
                className="rounded-[10px] object-cover" 
                alt="Are You Okay? Logo"
              />
            </div>
            <div>
              <span className="font-extrabold text-lg bg-gradient-to-r from-blue-400 to-emerald-300 bg-clip-text text-transparent">
                Are You Okay?
              </span>
              <span className="block text-[10px] text-slate-500 font-mono leading-none mt-0.5">DAILY CHECK-IN</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="#features" 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:inline-block"
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:inline-block"
            >
              How it works
            </Link>
            <Link 
              href="#faq" 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:inline-block"
            >
              FAQ
            </Link>
            <Link
              href="#download"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:opacity-90 active:scale-95 transition-all"
            >
              Get the App
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Hero Left */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-blue-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Your Daily Emotional Safety Companion
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-white">
              A Daily Check-in{" "}
              <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                For Your Peace of Mind
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Check in with your emotions in just one tap. If you go silent for too long, your designated trusted person gets a secure alert link to check in on you.
            </p>

            {/* App Store / Google Play CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4" id="download">
              {/* App Store Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl w-52 transition-all active:scale-98 shadow-md"
              >
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M18.71,19.5C17.88,20.74,17,21.95,15.66,22c-1.31,0-1.72-.8-3.22-.8s-2,.78-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25,17,2.94,12.45,4.7,9.39c.87-1.52,2.43-2.48,4.12-2.51,1.28,0,2.5.87,3.29.87s1.78-.87,3.3-.73a4.72,4.72,0,0,1,3.69,2c-3.15,1.9-2.64,6,.12,7.12A8.6,8.6,0,0,1,18.71,19.5M15.9,5.79A4.82,4.82,0,0,0,17,2.28a4.9,4.9,0,0,0-3.2,1.64,4.55,4.55,0,0,0-1.15,3.39A4.32,4.32,0,0,0,15.9,5.79Z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-medium leading-none">Download on the</span>
                  <span className="text-sm font-semibold text-white mt-1 block">App Store</span>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl w-52 transition-all active:scale-98 shadow-md"
              >
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M3,5.27V18.73L16.55,12L3,5.27M17.87,11.33L19.5,12.15L17.87,12.97L16.55,12L17.87,11.33M3,3.73L18.66,11.53L16.55,12L3,3.73M3,20.27L16.55,12L18.66,12.47L3,20.27Z" />
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-medium leading-none">Get it on</span>
                  <span className="text-sm font-semibold text-white mt-1 block">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Hero Right - Interactive Mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Glowing background behind device */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none scale-75"></div>
            
            {/* iPhone Mockup Frame */}
            <div className="w-[300px] h-[610px] rounded-[50px] border-[8px] border-slate-900 bg-slate-950 shadow-2xl relative overflow-hidden flex flex-col p-4">
              {/* Camera Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-850/80 mr-2"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-850/80"></div>
              </div>

              {/* Status Bar */}
              <div className="h-6 flex items-center justify-between px-4 text-[10px] text-slate-400 z-10 font-medium">
                <span>9:41</span>
                <div className="flex items-center gap-1">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* App Screen Content Mockup - High Fidelity HomeScreen.tsx */}
              <div className="flex-1 bg-slate-950 rounded-[36px] p-4 flex flex-col justify-between overflow-hidden relative border border-slate-900 select-none">
                
                {/* App Top Bar */}
                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <div className="flex items-center gap-1.5">
                    <Image 
                      src="/icon.png" 
                      width={14} 
                      height={14} 
                      className="rounded object-cover" 
                      alt="Are You Okay? Logo"
                    />
                    <span className="text-[10px] font-black text-slate-300">Are You Okay?</span>
                  </div>
                  <span className="text-xs">💎</span>
                </div>

                {/* Real App Greeting & Date */}
                <div className="text-left mt-3">
                  <h3 className="text-sm font-black text-white leading-tight">Good morning, Alex!</h3>
                  <p className="text-[9px] text-slate-400 mt-0.5">Hope you are having a peaceful day.</p>
                  <p className="text-[8px] text-slate-500 font-medium mt-1">Tuesday, May 26</p>
                </div>

                {/* Real App Streak Card Component */}
                <div className="bg-slate-900/60 border border-slate-900 rounded-xl p-2.5 mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">STREAK</span>
                    <span className="text-[8px] font-bold text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded-md">🔥 5 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    {[
                      { label: "S", status: "ok" },
                      { label: "M", status: "ok" },
                      { label: "T", status: "ok" },
                      { label: "W", status: "not-ok" },
                      { label: "T", status: "ok" },
                      { label: "F", status: "ok" },
                      { label: "S", status: "missed" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                          item.status === 'ok' ? 'bg-teal-500/20 border border-teal-500 text-teal-400 font-bold' : 
                          item.status === 'not-ok' ? 'bg-rose-500/20 border border-rose-500 text-rose-400 font-bold' : 
                          'bg-slate-800 border border-slate-700 text-slate-500'
                        }`}>
                          {item.status === 'ok' ? '✓' : item.status === 'not-ok' ? '⚠' : ''}
                        </div>
                        <span className="text-[8px] text-slate-500 font-semibold">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real App Check-in Action Card */}
                <div className="bg-slate-900/60 border border-slate-900 rounded-xl p-3 mt-3 flex-1 flex flex-col justify-center">
                  <h4 className="text-[11px] font-extrabold text-white text-center mb-3">
                    How are you feeling today?
                  </h4>
                  <div className="flex gap-2">
                    {/* Teal-green I'm Okay Button */}
                    <div className="flex-1 py-2.5 rounded-lg bg-teal-500/10 border border-teal-500/30 flex flex-col items-center justify-center gap-1 cursor-pointer">
                      <span className="text-base">😊</span>
                      <span className="text-[9px] font-black text-teal-400">I&apos;m Okay</span>
                    </div>
                    {/* Rose-red Not Okay Button */}
                    <div className="flex-1 py-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 flex flex-col items-center justify-center gap-1 cursor-pointer">
                      <span className="text-base">😔</span>
                      <span className="text-[9px] font-black text-rose-400">Not Okay</span>
                    </div>
                  </div>
                </div>

                {/* Secure Notice Footer */}
                <div className="bg-slate-950 border border-slate-900 rounded-xl p-2 mt-3 flex items-center gap-1.5">
                  <span className="text-[9px]">🔒</span>
                  <span className="text-[8px] text-slate-500 text-left leading-normal font-semibold">
                    Inactivity for 3 days automatically triggers emergency alert.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="bg-slate-950 border-t border-slate-900 py-24 relative" id="features">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
              Designed For Mental Well-Being & Peace of Mind
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Powerful Features For Your Care
            </p>
            <p className="text-slate-400">
              Simple to use on the surface, backed by a robust and highly secure notification engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 hover:border-slate-800 transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                📱
              </div>
              <h3 className="text-xl font-bold text-white mb-3">One-Tap Daily Check-in</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Log your daily mood instantly with a single button. Choose personalized emotional tags to reflect on how you&apos;re feeling without typing a single word if you don&apos;t want to.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 hover:border-slate-800 transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-2xl text-emerald-400 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-md">
                🚨
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Emergency Contact Alerts</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Designate a trusted family member or friend. If you go silent and fail to check in for your preset duration, our secure system automatically notifies them with a secure access link.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 hover:border-slate-800 transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-2xl text-teal-400 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-md">
                📝
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure Text & Voice Journals</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Express yourself clearly. Write detailed emotional diaries or record private audio notes. All entries are encrypted and stored safely to safeguard your absolute privacy.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 hover:border-slate-800 transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-2xl text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-md">
                🤖
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Empathetic AI Advice</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Struggling with a difficult day? Connect with our built-in empathetic AI counselor. Get personalized, soothing, and supportive feedback tailored specifically to help you process your emotions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-24 bg-slate-950 border-t border-slate-900" id="how-it-works">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              Simple & Reliable Workflow
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How &quot;Are You Okay?&quot; Works
            </p>
            <p className="text-slate-400">
              Three simple steps to build a daily mindfulness habit and establish an emotional safety net.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="space-y-4 relative">
              <div className="text-5xl font-black text-slate-800 font-mono">01</div>
              <h3 className="text-xl font-bold text-white">Daily Check-in</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Log your emotional status every day. Choose your mood tags and write down a brief note or save a private audio entry of your thoughts.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-4 relative">
              <div className="text-5xl font-black text-slate-800 font-mono">02</div>
              <h3 className="text-xl font-bold text-white">Safety Buffer</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Set a custom threshold of days (e.g., 3 days). If you check in regularly, your trusted contact is never bothered and your logs remain 100% private.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 relative">
              <div className="text-5xl font-black text-slate-800 font-mono">03</div>
              <h3 className="text-xl font-bold text-white">Emergency Reassurance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                If you fail to check in past your threshold, your contact gets a secure link. They can instantly see you are inactive and reach out to support you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-950 border-t border-slate-900" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
              Frequently Asked Questions
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Everything you need to know
            </p>
            <p className="text-slate-400">
              Answers to the most common questions about how Are You Okay? keeps you safe.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is my data really private?",
                a: "Yes. Your journals, mood logs, and voice notes are encrypted and only visible to you. Trusted contacts never see your entries — they only receive a silent alert if you go inactive past your threshold.",
              },
              {
                q: "What exactly does my trusted contact see?",
                a: "They receive a secure access link showing only your inactivity status and the last time you checked in. They cannot read your journal entries, listen to voice notes, or see your mood history.",
              },
              {
                q: "Can I change my inactivity threshold?",
                a: "Absolutely. You can set the buffer anywhere from 1 to 14 days based on what feels right for your routine and peace of mind.",
              },
              {
                q: "What happens if I check in late?",
                a: "As soon as you check in, the countdown resets and any pending alert is cancelled. Your trusted contact is only notified once the threshold is fully exceeded.",
              },
              {
                q: "Is the app free to use?",
                a: "The daily check-in, streak tracking, and emergency alerts are free forever. Premium features like unlimited voice journals and AI counseling are part of an optional subscription.",
              },
              {
                q: "Which platforms are supported?",
                a: "Are You Okay? is available on iOS and Android. Your data syncs securely across devices when you sign in.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-slate-900/40 border border-slate-900 rounded-2xl p-6 hover:border-slate-800 transition-all"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-base font-bold text-white pr-4">{item.q}</h3>
                  <span className="text-slate-500 group-open:rotate-45 transition-transform text-2xl font-light shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-slate-400 text-sm leading-relaxed mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Download Banner */}
      <section className="bg-slate-950 border-t border-slate-900 py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-4xl">💙</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Start Your Emotional Journey Today
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Build emotional awareness, keep a secure private journal, and reassure your loved ones that you are safe.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3.5 rounded-full bg-white text-slate-950 font-bold text-base shadow-lg shadow-white/5 hover:bg-slate-200 transition-all active:scale-95 flex items-center gap-2"
            >
               Download for iOS
            </a>
            <a
              href="#"
              className="px-8 py-3.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-white font-bold text-base shadow-lg transition-all active:scale-95 flex items-center gap-2"
            >
              ▶ Get it on Android
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-500 py-12 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image 
              src="/icon.png" 
              width={32} 
              height={32} 
              className="rounded-lg object-cover" 
              alt="Are You Okay? Logo"
            />
            <div>
              <p className="text-slate-300 font-bold leading-none">Are You Okay?</p>
              <p className="text-[10px] text-slate-500 mt-1">© 2026 Are You Okay? Team. All rights reserved.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use (EULA)
            </Link>
            <a href="mailto:loverhide.blog@gmail.com" className="hover:text-white transition-colors">
              Support Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
