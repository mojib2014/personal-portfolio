module.exports = {
  content: ["./pages/**/*.{js, jsx}", "./components/**/*.{js, jsx}"],
  theme: {
    textColor: {
      red: "#dc3545",
      pink: "#e83e8c",
    },
    extend: {
      colors: {
        pink: "#E94A93",
        indigo: "#6610f2",
        purple: "#6f42c1",
        orange: "#fd7e14",
        yellow: "#ffc107",
        green: "#28a745",
        teal: "#20c997",
        cyan: "#17a2b8",
        white: "#fff",
        gray: "#6c757d",
        "gray-dark": "#343a40",
        primary: "#007bff",
        secondary: "#6c757d",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        dark: "#343a40",
        "light-black": "rgba(0, 0, 0, 0.9)",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
