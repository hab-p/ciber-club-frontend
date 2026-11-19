import { ReactNode } from "react";

type NeonPanelProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

export default function NeonPanel({ label, children, className = "" }: NeonPanelProps) {
  return (
    <div className={`neon-panel ${className}`}>
      <h2 className="neon-label">{label}</h2>
      {children}
    </div>
  );
}
