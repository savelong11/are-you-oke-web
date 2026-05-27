"use client";

import React from "react";
import Link from "next/link";

export default function PaymentPolicy() {
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
          <h1 className="text-4xl font-black text-white tracking-tight">Payment & Billing Policy</h1>
          <p className="text-sm text-slate-500 font-mono">Last Updated: May 26, 2026</p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-slate-300 leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Secure In-App Purchases</h2>
            <p>
              We offer advanced features via Pro-plan and Premium-plan subscription tiers. All payments, transactions, in-app purchases, and auto-renewable subscriptions are securely managed, processed, and verified through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Apple App Store:</strong> For iOS device users.
              </li>
              <li>
                <strong>Google Play Store:</strong> For Android device users.
              </li>
            </ul>
            <p>
              We use the industry-leading <strong>RevenueCat SDK</strong> to handle server-side subscription state checks, ensuring your purchase state is verified and synchronized across your account securely.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Auto-Renewable Subscriptions</h2>
            <p>
              Our subscription packages (Pro and Premium) are offered on a monthly or yearly basis:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Billing Period:</strong> Subscription charges are billed immediately upon confirmation of purchase to your Apple iTunes Account or Google Play Store Account.
              </li>
              <li>
                <strong>Automatic Renewal:</strong> Your subscription will automatically renew at the end of the billing cycle (monthly or yearly) unless auto-renew is turned off at least 24 hours prior to the conclusion of the current subscription period.
              </li>
              <li>
                <strong>Account Charges for Renewal:</strong> Your account will be charged for renewal at the same subscription rate within 24 hours prior to the end of the current period.
              </li>
              <li>
                <strong>Active Period Cancellations:</strong> No cancellation of the current subscription is allowed during the active subscription period. If you cancel, your benefits remain active until the billing cycle ends.
              </li>
              <li>
                <strong>Free Trial Terms:</strong> Any unused portion of a free trial period, if offered, will be forfeited when you purchase a subscription to that tier, where applicable.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Cancellation Policy</h2>
            <p>
              You are free to manage and cancel your subscriptions at any time. Active subscriptions can be easily managed by visiting your account settings in the respective app stores:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>For iOS users:</strong> Go to iPhone Settings &gt; [Your Name] &gt; Subscriptions &gt; Select &quot;Are You Okay?&quot; &gt; Cancel Subscription.
              </li>
              <li>
                <strong>For Android users:</strong> Open Google Play Store &gt; Tap Profile Icon &gt; Payments &amp; Subscriptions &gt; Subscriptions &gt; Select &quot;Are You Okay?&quot; &gt; Cancel Subscription.
              </li>
            </ul>
            <p>
              If you cancel, your active subscription benefits will remain fully functional until the end of your current billing cycle.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Refund Policy</h2>
            <p>
              Since all payments and subscription bills are directly processed by Apple and Google, we do not store your credit card details on our servers, nor do we have the administrative authority to issue direct billing refunds. All refund claims and disputes must be addressed directly to the store operator:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Requesting iOS Refunds:</strong> Please visit Apple&apos;s support portal at <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://reportaproblem.apple.com</a>.
              </li>
              <li>
                <strong>Requesting Android Refunds:</strong> Please visit Google Play Refund support at <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://support.google.com/googleplay/answer/2479637</a>.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Subscriptions & Tier Benefits</h2>
            <table className="w-full border-collapse border border-slate-900 text-left text-xs text-slate-400">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="border border-slate-900 p-3">Feature</th>
                  <th className="border border-slate-900 p-3">Free-plan</th>
                  <th className="border border-slate-900 p-3">Pro-plan</th>
                  <th className="border border-slate-900 p-3">Premium-plan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-slate-900">
                  <td className="border border-slate-900 p-3 font-semibold text-white">Ad Experience</td>
                  <td className="border border-slate-900 p-3">Contains Ads</td>
                  <td className="border border-slate-900 p-3 text-emerald-400 font-semibold">No Ads</td>
                  <td className="border border-slate-900 p-3 text-emerald-400 font-semibold">No Ads</td>
                </tr>
                <tr className="border border-slate-900">
                  <td className="border border-slate-900 p-3 font-semibold text-white">Safety Net Contacts</td>
                  <td className="border border-slate-900 p-3">1 Contact</td>
                  <td className="border border-slate-900 p-3">3 Contacts</td>
                  <td className="border border-slate-900 p-3 text-emerald-400 font-semibold">5 Contacts</td>
                </tr>
                <tr className="border border-slate-900">
                  <td className="border border-slate-900 p-3 font-semibold text-white">Journals Allowed</td>
                  <td className="border border-slate-900 p-3">Only when &quot;Not Okay&quot;</td>
                  <td className="border border-slate-900 p-3">Only when &quot;Not Okay&quot;</td>
                  <td className="border border-slate-900 p-3 text-emerald-400 font-semibold">ALL Moods (including &quot;Okay&quot;)</td>
                </tr>
                <tr className="border border-slate-900">
                  <td className="border border-slate-900 p-3 font-semibold text-white">AI Psychologist Counselor</td>
                  <td className="border border-slate-900 p-3">Unavailable</td>
                  <td className="border border-slate-900 p-3">Unavailable</td>
                  <td className="border border-slate-900 p-3 text-emerald-400 font-semibold">2 sessions / day</td>
                </tr>
                <tr className="border border-slate-900">
                  <td className="border border-slate-900 p-3 font-semibold text-white">Friend Journals Followed</td>
                  <td className="border border-slate-900 p-3">1 friend (with Ads)</td>
                  <td className="border border-slate-900 p-3">3 friends</td>
                  <td className="border border-slate-900 p-3 text-emerald-400 font-semibold">Up to 10 friends</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Billing Queries & Support</h2>
            <p>
              For general billing queries or assistance with account synchronization, please contact our support team at:
            </p>
            <p className="font-semibold text-blue-400 mt-2">
              Email: loverhide.blog@gmail.com
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
