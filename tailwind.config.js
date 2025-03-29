module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
        dash: "dash 1.5s ease-in-out infinite",
      },
      keyframes: {
        dash: {
          "0%": { strokeDasharray: "1, 150", strokeDashoffset: "0" },
          "50%": { strokeDasharray: "90, 150", strokeDashoffset: "-35" },
          "100%": { strokeDasharray: "90, 150", strokeDashoffset: "-124" },
        },
      },
    },
  },
  plugins: [],
  important: true,
};
