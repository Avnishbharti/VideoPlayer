/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        2: "3fr 1fr",
      },
      height: {
        v: "96.5vh",
        mh: "49vh",
      },
      width: {
        description: "99%",
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
      },
    },
  },
  plugins: [],
};
