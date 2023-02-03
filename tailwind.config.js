const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        redd: "#FF0000",
        green: "#00AC83;",
      },
      gridTemplateColumns: {
        // Simple 14 column grid
        14: "repeat(14, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn-red": {
          background: "linear-gradient(91.96deg, #B81313 0%, #000000 100%)",
          boxShadow: "0px 20px 40px rgba(113, 62, 215, 0.3)",
          borderRadius: "30px",
          color: "#ffffff",
        },

        ".btn-white": {
          background: "#ffffff",
          boxShadow: "0px 20px 40px rgba(113, 62, 215, 0.3)",
          borderRadius: "30px",
          color: "#EE1D23",
          border: "2px solid #EE1D23",
        },

        ".Input-Field": {
          height: "50px",
          border: "1px solid #000000",
          boxSizing: "border-box",
          borderRadius: "53px",
          "&::placeholder": {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "18px",
            color: "#596787",
            paddingLeft: "30px",
          },
        },
        ".Upload-Field": {
          height: "50px",
          border: "1px solid #000000",
          boxSizing: "border-box",
          borderRadius: "53px",
          backgroundColor: "#ffffff",
          label: {
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "18px",
            color: "#596787",
            paddingLeft: "30px",
            marginTop: "10px",
          },
        },
        ".form-bg": {
          background: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0px 4px 10px rgba(113, 62, 215, 0.3)",
          borderRadius: "30px",
        },
        ".input-field": {
          borderRadius: "0.5rem",
          color: "#000",
          appearance: "none",
          width: "100%",
          padding: "0.5rem 1rem!important",
          border: "1px solid #000000!important",
        },
        ".dash-input-field": {
          borderRadius: "0.25rem",
          color: "#000",
          appearance: "none",
          width: "100%",
          padding: "0.8rem 1rem!important",
          backgroundColor: "#edf0ff",
        },
        ".products__arrow": {
          width: "40px",
          height: "40px",
          border: "2px solid #EFEFEF",
          borderRadius: "50%",
          transition: "border-color .2s",
        },
        ".products__foot": {
          display: "flex",
          justifyContent: "center",
          marginTop: "24px",
        },
      });
    }),
  ],
};
