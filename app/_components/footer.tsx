// components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center space-y-2">

          {/* Terminal line */}
          <p className="text-gray-400 text-sm font-mono">
            <span>// end of file</span>
          </p>

          {/* Fun panic message */}
          <p className="text-gray-500 text-xs font-mono">
            panic!("made with 💜 and questionable amounts of drank")
          </p>

        </div>
      </div>
    </footer>
  );
}
