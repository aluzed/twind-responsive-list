import React from "react";

type SpinnerProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | string;
  className?: string;
};

const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "primary",
  className = "",
}) => {
  const sizeMap = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12",
  };

  const colorMap: Record<string, string> = {
    primary: "text-blue-600",
    secondary: "text-gray-600",
    success: "text-green-600",
    danger: "text-red-600",
    warning: "text-yellow-600",
    info: "text-sky-600",
  };

  const colorClass = colorMap[color] || color;

  const sizeClass = sizeMap[size];

  return (
    <>
      <style>
        {`
          @keyframes spinner-grow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes spinner-dash {
            0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
            50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
            100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
          }
          .animate-spinner-grow {
            animation: spinner-grow 2s linear infinite;
          }
          .animate-spinner-dash {
            animation: spinner-dash 1.5s ease-in-out infinite;
          }
        `}
      </style>

      <svg
        className={`animate-spinner-grow ${sizeClass} ${className}`}
        viewBox="0 0 50 50"
      >
        <circle
          className={`animate-spinner-dash ${colorClass}`}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          stroke="currentColor"
        />
      </svg>
    </>
  );
};

export default Spinner;
