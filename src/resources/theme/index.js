import { extendTheme } from "@chakra-ui/react";
import { lightn } from "@chakra-ui/theme-tools";
import { inputStyles as Input } from "./form";

// darken  2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: "#00A6FB",
  primaryDark:"#0582CA",
  secondary: "#1D1E2C",
  light:"#FEFFEA",
  brown: "#DB9065",
  brownHover:"#C6662F"
};

const borders = {
  base: "#15333D",
  hover:"#245A6A"
}

const shadows = {
  sm:  "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
  darks:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;"
};

const Button = {
  baseStyle: {
    color: "light",
    borderRadius: "0.313rem",
    textTransform: "uppercase",
    paddingTop: "0.156rem",
    boxShadow: "sm",
    fontFamily: "Raleway, sans-serif",
  },
  sizes: {
    sm: {
      lineHeight: "2.5rem",
      fontSize: "0.625",
      fontWeight: "semibold",
    },
    md: {
      height: "2.5rem",
      maxHeight: "2.5rem",
      fontSize: "xs",
    },
    lg: {
      height: "3rem",
      maxHeight: "3rem",
      fontSize: "xs",
    },
    xl: {
      height: "3rem",
      maxHeight: "3rem",
      fontSize: "xs",
      px: { base: "2.5rem", lg: "4.375rem" },
    },
  },
  variants: {
    solidPrimary: {
      color: "light",
      bg: "brown",
    },
    outline: {
      color: "brown",
      bg: "light",
      border: "1px solid",
      borderColor: "brown",
    },
    ghost: {
      color: "light",
      bg: "transparent",
      border: "1px solid",
      borderColor: "light",
      marginTop: "0.625",
      borderRadius: "0px",
      _hover: {
        borderColor: "transparent",
      },
    },
  },
};

const Link = {
  baseStyle: {
    letterSpacing: "0px",
    textDecoration: "none",
    _hover: {
      textDecoration: "none",
    },
  },
};

const fonts = {
  heading: "Raleway, sans-serif",
  body: "Raleway, sans-serif",
  link: "Raleway, sans-serif",
  text: "Aboreto, cursive",
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
    },
    h1: {
      color: "light",
    },
  }
};
const fontSizes = {
  "2xs": "0.625",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.75rem",
  "3xl": "2.125rem",
  "4xl": "2.25rem",
};

export const theme = extendTheme({
  colors,
  shadows,
  borders,
  styles,
  fonts,
  fontSizes,
  components: {
    Button,
    Link,
    Input,
  },
});
