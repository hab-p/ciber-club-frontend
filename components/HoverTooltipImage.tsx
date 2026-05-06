'use client';

import { useState } from 'react';

type HoverTooltipImageProps = {
  href: string;
  src: string;
  alt: string;
  tooltip: string;
  className?: string;
};

export default function HoverTooltipImage({
  href,
  src,
  alt,
  tooltip,
  className = '',
}: HoverTooltipImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={tooltip}
      className={`group relative block w-full ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left + 16,
          y: e.clientY - rect.top - 16,
        });
      }}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-xl border border-gray-700 shadow-xl transition-opacity duration-300 group-hover:opacity-90"
      />

      {isVisible ? (
        <span
          className="pointer-events-none absolute z-10 -translate-y-full rounded-md bg-black/80 px-3 py-2 text-sm font-medium text-white shadow"
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        >
          {tooltip}
        </span>
      ) : null}
    </a>
  );
}
