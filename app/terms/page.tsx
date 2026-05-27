"use client";

import React from "react";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white py-16 px-6 relative overflow-x-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-900 pb-8">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-slate-400 group-hover:text-white transition-colors">← Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-lg">💙</span>
            <span className="font-extrabold text-sm text-white">Are You Okay?</span>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl font-black text-white tracking-tight">Terms of Use (EULA)</h1>
          <p className="text-sm text-slate-500 font-mono">Last Updated: May 26, 2026</p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8 text-slate-300 leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By installing, accessing, or using the &quot;Are You Okay?&quot; mobile application or website, you agree to be bound by these Terms of Use and End User License Agreement (EULA). If you do not agree to these terms, do not install or use our application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Standard EULA & Device Store Policies</h2>
            <p>
              Depending on the platform you downloaded the application from, you are also bound by the standard device store terms:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Apple App Store:</strong> Purchases and access are subject to Apple&apos;s Standard End User License Agreement (EULA) available at: <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</a>.
              </li>
              <li>
                <strong>Google Play Store:</strong> Purchases and access are subject to the standard Google Play Terms of Service: <a href="https://play.google.com/intl/en_US/gplay/about/play-terms/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://play.google.com/intl/en_US/gplay/about/play-terms/index.html</a>.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Auto-Renewable Subscriptions & Billing</h2>
            <p>
              Our application offers in-app purchases and auto-renewable subscriptions (Pro and Premium Tiers) to grant advanced features:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Subscription Options & Periods:</strong> Options include Monthly (1 month) or Yearly (1 year) durations.
              </li>
              <li>
                <strong>Payment & Account Billing:</strong> Subscription payments are processed via Apple App Store / Google Play and are charged to your associated iTunes/Google Play Store account upon confirmation of purchase.
              </li>
              <li>
                <strong>Auto-Renewal:</strong> Subscriptions automatically renew unless auto-renew is turned off at least 24-hours before the end of the current period.
              </li>
              <li>
                <strong>Renewal Charges:</strong> Your account will be charged for renewal within 24-hours prior to the end of the current period at the rate of the selected plan. The cost of the renewal will be clearly identified in your account settings.
              </li>
              <li>
                <strong>Active Period Cancellations:</strong> No cancellation of the current subscription is allowed during the active subscription period. If you cancel, your active subscription benefits remain functional until the end of the billing cycle.
              </li>
              <li>
                <strong>Free Trial Terms:</strong> Any unused portion of a free trial period, if offered, will be forfeited when you purchase a subscription to that tier, where applicable.
              </li>
              <li>
                <strong>Cancellation & Settings:</strong> You can manage or disable subscription auto-renewals at any time in your Apple ID or Google Play Store Account Settings after purchase. Refunds are processed and managed solely by the respective app stores.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Medical & Crisis Disclaimer (CRITICAL)</h2>
            <p className="bg-amber-950/40 border border-amber-900 rounded-xl p-4 text-amber-300">
              <strong>⚠ IMPORTANT NOTICE:</strong> &quot;Are You Okay?&quot; is a personal self-help logging and mindfulness tool. It is **NOT** a medical diagnostic service, clinical treatment companion, or suicide prevention hotline. 
              <br /><br />
              If you or someone you know is undergoing an acute psychological crisis, experiencing thoughts of self-harm, or facing a medical emergency, please immediately contact emergency services or reach out to a professional mental health hotline:
              <br /><br />
              • **Vietnam Helpline:** 1800 599 920 (Free, 24/7)
              <br />
              • **International Helplines:** befrienders.org / suicide.org
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Trusted Contacts & Notifications</h2>
            <p>
              If you configure a &quot;trusted contact&quot;, you authorize our server to securely send them an notification email containing a secure link to access your mood log history if you fail to check in for your designated duration. You are solely responsible for ensuring the contact details you enter are correct and that you have obtained the contact&apos;s permission to be designated.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Intellectual Property</h2>
            <p>
              All software code, visual designs, assets, logo iconography, and trademark designations of &quot;Are You Okay?&quot; remain the exclusive intellectual property of our development team. You are granted a limited, personal, non-transferable, revocable license to use the app for personal, non-commercial purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the applicable consumer and technology laws of the developer&apos;s jurisdiction, alongside international App Store and Google Play merchant compliance guidelines.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-900 pt-8 text-center text-xs text-slate-600">
          <p>© 2026 Are You Okay? Team. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
