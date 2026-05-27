"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface Entry {
  id: string;
  date: string;
  status: "ok" | "not-ok";
  moods: string[] | null;
  text_content: string | null;
  audio_url: string | null;
  audio_duration_seconds: number | null;
  created_at: string;
}

interface AccessResult {
  valid: boolean;
  user_name: string;
  days_inactive: number;
  journal_access: boolean;
  message?: string;
  entries?: Entry[];
}

const MOOD_EMOJIS: Record<string, string> = {
  Stressed: "😫",
  Sad: "😢",
  Tired: "😴",
  Anxious: "😰",
  Lonely: "🥺",
  Angry: "😠",
  Confused: "😕",
  Pressured: "🏋️",
  Disappointed: "😞",
  Scared: "😨",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ViewContent() {
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const [data, setData] = useState<AccessResult | null>(null);
  const [, setPlayingAudio] = useState<string | null>(null);

  useEffect(() => {
    let activeToken = searchParams.get("token");

    if (activeToken) {
      // Securely store token in sessionStorage
      sessionStorage.setItem("emergency_token", activeToken);
      
      // Strip the token from the browser address bar immediately to prevent Referer leakage & history logging
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete("token");
        window.history.replaceState({}, "", url.pathname + url.search);
      } catch (e) {
        console.error("Failed to strip token from URL:", e);
      }
    } else {
      // Fallback to sessionStorage if user refreshes the page
      activeToken = sessionStorage.getItem("emergency_token");
    }

    const fetchAccess = async () => {
      try {
        if (!activeToken) {
          setError("No token provided");
          return;
        }

        setLoading(true);
        const response = await fetch("/api/grant-access", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: activeToken }),
        });

        const result = await response.json();

        if (!response.ok) {
          setErrorCode(result.code || "UNKNOWN_ERROR");
          setError(result.error || "Failed to verify access");
          return;
        }

        setData(result);
      } catch {
        setError("Failed to connect to server");
      } finally {
        setLoading(false);
      }
    };

    fetchAccess();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">💙</div>
          <p className="text-gray-500">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md text-center p-8">
          {errorCode === "TOKEN_EXPIRED" ? (
            <>
              <div className="text-4xl mb-4">⏰</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">
                Link Expired
              </h1>
              <p className="text-gray-500 mb-6">
                This link has expired (after 7 days). If you are concerned about
                your loved one, please reach out to them directly.
              </p>
            </>
          ) : errorCode === "INVALID_TOKEN" ? (
            <>
              <div className="text-4xl mb-4">❌</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">
                Invalid Link
              </h1>
              <p className="text-gray-500 mb-6">
                This link is not valid. Please check the URL and try again.
              </p>
            </>
          ) : (
            <>
              <div className="text-4xl mb-4">⚠️</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">
                Something went wrong
              </h1>
              <p className="text-gray-500 mb-6">{error}</p>
            </>
          )}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-800 text-sm">
              If you are worried about someone, please contact a mental health
              helpline:
              <br />
              <strong>Vietnam:</strong> 1800 599 920 (Free, 24/7)
              <br />
              <strong>International:</strong> befrienders.org
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (data && !data.journal_access) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md text-center p-8">
          <div className="text-4xl mb-4">🔒</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Journal Access Not Enabled
          </h1>
          <p className="text-gray-500 mb-4">
            You received this alert because{" "}
            <strong>{data.user_name}</strong> has not checked in for{" "}
            <strong>
              {data.days_inactive} day{data.days_inactive > 1 ? "s" : ""}
            </strong>
            .
          </p>
          <p className="text-gray-500 mb-6">
            The journal sharing feature has not been activated yet. Please
            reach out to <strong>{data.user_name}</strong> directly.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-800 text-sm">
              If you are worried about someone, please contact a mental health
              helpline:
              <br />
              <strong>Vietnam:</strong> 1800 599 920 (Free, 24/7)
              <br />
              <strong>International:</strong> befrienders.org
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {data?.user_name}&apos;s Journal
          </h1>
          <p className="text-gray-500">
            {data?.user_name} has not checked in for{" "}
            <strong>
              {data?.days_inactive} day{data?.days_inactive !== 1 ? "s" : ""}
            </strong>
            . Please reach out to them.
          </p>
        </div>

        {/* Privacy notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <p className="text-amber-800 text-sm">
            🤝 This is private information. Please read with respect and care.
          </p>
        </div>

        {/* Entries */}
        <div className="space-y-4">
          {data?.entries?.map((entry) => (
            <div key={entry.id} className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500">
                  {formatDate(entry.date)}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    entry.status === "ok"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {entry.status === "ok" ? "✓ Okay" : "Not okay"}
                </span>
              </div>

              {entry.moods && entry.moods.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {entry.moods.map((mood) => (
                    <span
                      key={mood}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {MOOD_EMOJIS[mood] || ""} {mood}
                    </span>
                  ))}
                </div>
              )}

              {entry.text_content && (
                <p className="text-gray-700 leading-relaxed mb-3">
                  {entry.text_content}
                </p>
              )}

              {entry.audio_url && (
                <div className="mt-3">
                  <audio
                    controls
                    src={entry.audio_url}
                    className="w-full"
                    onPlay={() => setPlayingAudio(entry.id)}
                    onPause={() => setPlayingAudio(null)}
                  />
                  {entry.audio_duration_seconds && (
                    <p className="text-xs text-gray-400 mt-1">
                      🎵 Voice note •{" "}
                      {Math.floor(entry.audio_duration_seconds / 60)}:
                      {(entry.audio_duration_seconds % 60)
                        .toString()
                        .padStart(2, "0")}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {data?.entries?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-4xl mb-4">📝</p>
            <p className="text-gray-500">No journal entries found.</p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="bg-gray-100 rounded-xl p-6">
            <p className="text-gray-600 text-sm mb-3">
              You are viewing this page because <strong>{data?.user_name}</strong>{" "}
              trusted you. If they need professional mental health support:
            </p>
            <p className="text-gray-800 font-semibold text-sm">
              📞 Vietnam: 1800 599 920 (Free, 24/7)
              <br />
              🌐 International: befrienders.org
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ViewPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">💙</div>
            <p className="text-gray-500">Loading...</p>
          </div>
        </div>
      }
    >
      <ViewContent />
    </Suspense>
  );
}