"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { x: 60, y: 70, label: "Gov Market Systems" },
  { x: 60, y: 330, label: "HR Platforms" },
  { x: 540, y: 70, label: "Recovery & Finance" },
  { x: 540, y: 330, label: "Healthcare Scheduling" },
];

const center = { x: 300, y: 200 };

export function NodeNetwork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 600 400"
      className="h-full w-full"
      role="img"
      aria-label="Diagram of enterprise systems — government, HR, finance, and healthcare — connecting to a central platform"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={center.x} cy={center.y} r={110} fill="url(#centerGlow)" />

      {nodes.map((node, i) => (
        <g key={node.label}>
          <motion.path
            d={`M ${node.x} ${node.y} L ${center.x} ${center.y}`}
            stroke="url(#lineGrad)"
            strokeWidth={1.5}
            strokeDasharray="6 6"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
          />
          {!shouldReduceMotion && (
            <motion.circle
              r={3}
              fill="#06b6d4"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 2.4,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                offsetPath: `path("M ${node.x} ${node.y} L ${center.x} ${center.y}")`,
              }}
            />
          )}
        </g>
      ))}

      {nodes.map((node, i) => (
        <motion.g
          key={`node-${node.label}`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
        >
          <circle cx={node.x} cy={node.y} r={7} fill="#0d1330" stroke="#4f46e5" strokeWidth={2} />
          <circle cx={node.x} cy={node.y} r={2.5} fill="#f8fafc" />
          <text
            x={node.x}
            y={node.y + (node.y < center.y ? -18 : 30)}
            textAnchor="middle"
            className="fill-slate-300 text-[11px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {node.label}
          </text>
        </motion.g>
      ))}

      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <circle cx={center.x} cy={center.y} r={34} fill="#0d1330" stroke="#06b6d4" strokeWidth={2} />
        <text
          x={center.x}
          y={center.y - 4}
          textAnchor="middle"
          className="fill-white text-[11px] font-semibold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          UF
        </text>
        <text
          x={center.x}
          y={center.y + 12}
          textAnchor="middle"
          className="fill-slate-400 text-[8px] uppercase tracking-wider"
        >
          Platform
        </text>
      </motion.g>
    </svg>
  );
}
