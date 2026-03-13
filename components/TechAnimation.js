"use client";
import './TechAnimation.css';

export default function TechAnimation() {
  return (
    <div className="tech-animation">
      {/* Cloud Upload */}
      <div className="icon cloud-icon">
        <svg viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 38 C3 38 3 26 10 22 C6 14 18 4 30 12 C38 4 52 8 52 20 C60 24 60 38 48 38 Z" />
          <path d="M30 42 L30 28 M24 34 L30 28 L36 34" strokeWidth="2.5" />
        </svg>
      </div>

      {/* CPU Chip */}
      <div className="icon cpu-icon">
        <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="12" y="12" width="26" height="26" rx="3" />
          <rect x="18" y="18" width="14" height="14" rx="2" fill="currentColor" />
          {/* Pins */}
          <line x1="18" y1="8" x2="18" y2="12" />
          <line x1="25" y1="8" x2="25" y2="12" />
          <line x1="32" y1="8" x2="32" y2="12" />
          <line x1="18" y1="38" x2="18" y2="42" />
          <line x1="25" y1="38" x2="25" y2="42" />
          <line x1="32" y1="38" x2="32" y2="42" />
          <line x1="8" y1="18" x2="12" y2="18" />
          <line x1="8" y1="25" x2="12" y2="25" />
          <line x1="8" y1="32" x2="12" y2="32" />
          <line x1="38" y1="18" x2="42" y2="18" />
          <line x1="38" y1="25" x2="42" y2="25" />
          <line x1="38" y1="32" x2="42" y2="32" />
        </svg>
      </div>

      {/* Code Terminal */}
      <div className="icon terminal-icon">
        <svg viewBox="0 0 60 45" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="56" height="41" rx="4" />
          <line x1="2" y1="12" x2="58" y2="12" />
          <circle cx="8" cy="7" r="2" fill="currentColor" />
          <circle cx="14" cy="7" r="2" fill="currentColor" />
          <circle cx="20" cy="7" r="2" fill="currentColor" />
          <path d="M10 22 L18 28 L10 34" strokeWidth="2.5" />
          <line x1="22" y1="34" x2="35" y2="34" strokeWidth="2.5" />
        </svg>
      </div>

      {/* Database */}
      <div className="icon database-icon">
        <svg viewBox="0 0 40 50" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="20" cy="10" rx="16" ry="6" />
          <path d="M4 10 L4 40 C4 44 11 48 20 48 C29 48 36 44 36 40 L36 10" />
          <path d="M4 22 C4 26 11 30 20 30 C29 30 36 26 36 22" />
          <path d="M4 34 C4 38 11 42 20 42 C29 42 36 38 36 34" />
        </svg>
      </div>

      {/* Gears */}
      <div className="icon gears-icon">
        <svg viewBox="0 0 60 50" fill="currentColor">
          <g className="gear-rotate">
            <circle cx="22" cy="25" r="10" />
            <circle cx="22" cy="25" r="4" fill="white" />
            {[...Array(8)].map((_, i) => (
              <rect key={i} x="20" y="10" width="4" height="6" rx="1"
                transform={`rotate(${i * 45} 22 25)`} />
            ))}
          </g>
          <g className="gear-rotate-reverse">
            <circle cx="42" cy="32" r="7" />
            <circle cx="42" cy="32" r="3" fill="white" />
            {[...Array(6)].map((_, i) => (
              <rect key={i} x="40.5" y="22" width="3" height="4" rx="0.5"
                transform={`rotate(${i * 60} 42 32)`} />
            ))}
          </g>
        </svg>
      </div>

      {/* Code Brackets */}
      <div className="icon brackets-icon">
        <svg viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M15 5 L5 20 L15 35" />
          <path d="M35 5 L45 20 L35 35" />
        </svg>
      </div>

      {/* Git Branch */}
      <div className="icon git-icon">
        <svg viewBox="0 0 40 50" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="20" cy="8" r="5" />
          <circle cx="20" cy="42" r="5" />
          <circle cx="32" cy="25" r="5" />
          <line x1="20" y1="13" x2="20" y2="37" />
          <path d="M20 20 Q20 25 27 25" />
        </svg>
      </div>

      {/* API/Network */}
      <div className="icon api-icon">
        <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="25" cy="25" r="8" />
          <circle cx="25" cy="8" r="4" />
          <circle cx="42" cy="25" r="4" />
          <circle cx="25" cy="42" r="4" />
          <circle cx="8" cy="25" r="4" />
          <line x1="25" y1="17" x2="25" y2="12" />
          <line x1="33" y1="25" x2="38" y2="25" />
          <line x1="25" y1="33" x2="25" y2="38" />
          <line x1="17" y1="25" x2="12" y2="25" />
        </svg>
      </div>

      {/* Mobile App */}
      <div className="icon mobile-icon">
        <svg viewBox="0 0 30 50" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="26" height="46" rx="4" />
          <line x1="2" y1="10" x2="28" y2="10" />
          <line x1="2" y1="40" x2="28" y2="40" />
          <circle cx="15" cy="45" r="2" fill="currentColor" />
          <rect x="8" y="16" width="14" height="8" rx="1" fill="currentColor" opacity="0.3" />
          <line x1="8" y1="28" x2="22" y2="28" strokeWidth="1.5" />
          <line x1="8" y1="32" x2="18" y2="32" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Lock/Security */}
      <div className="icon lock-icon">
        <svg viewBox="0 0 40 50" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="20" width="30" height="25" rx="3" />
          <path d="M10 20 L10 14 C10 6 30 6 30 14 L30 20" />
          <circle cx="20" cy="32" r="4" fill="currentColor" />
          <line x1="20" y1="36" x2="20" y2="40" strokeWidth="3" />
        </svg>
      </div>

      {/* Rocket/Deploy */}
      <div className="icon rocket-icon">
        <svg viewBox="0 0 40 50" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 5 C20 5 35 15 35 30 L20 45 L5 30 C5 15 20 5 20 5 Z" />
          <circle cx="20" cy="22" r="5" fill="currentColor" />
          <path d="M8 35 L2 45 L12 40" />
          <path d="M32 35 L38 45 L28 40" />
        </svg>
      </div>

      {/* Lightning/Fast */}
      <div className="icon lightning-icon">
        <svg viewBox="0 0 35 50" fill="currentColor" stroke="currentColor" strokeWidth="1">
          <path d="M20 2 L5 25 L15 25 L12 48 L30 20 L18 20 Z" />
        </svg>
      </div>

      {/* Binary/Data */}
      <div className="icon binary-icon">
        <svg viewBox="0 0 50 40" fill="currentColor">
          <text x="2" y="12" fontSize="10" fontFamily="monospace">01</text>
          <text x="22" y="12" fontSize="10" fontFamily="monospace">10</text>
          <text x="2" y="26" fontSize="10" fontFamily="monospace">11</text>
          <text x="22" y="26" fontSize="10" fontFamily="monospace">00</text>
          <text x="12" y="38" fontSize="10" fontFamily="monospace">01</text>
        </svg>
      </div>

      {/* WiFi Signal */}
      <div className="icon wifi-icon">
        <svg viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 15 Q25 -5 45 15" />
          <path d="M12 22 Q25 8 38 22" />
          <path d="M18 29 Q25 18 32 29" />
          <circle cx="25" cy="35" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Settings Cog */}
      <div className="icon settings-icon">
        <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="25" cy="25" r="8" />
          <path d="M25 2 L25 8 M25 42 L25 48 M2 25 L8 25 M42 25 L48 25" />
          <path d="M8 8 L13 13 M37 37 L42 42 M42 8 L37 13 M13 37 L8 42" />
        </svg>
      </div>

      {/* Cursor/Pointer */}
      <div className="icon cursor-icon">
        <svg viewBox="0 0 35 45" fill="white" stroke="currentColor" strokeWidth="2">
          <path d="M5 5 L5 38 L12 30 L20 42 L26 38 L18 26 L28 24 Z" />
        </svg>
      </div>
    </div>
  );
}
