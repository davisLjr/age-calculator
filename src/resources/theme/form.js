export const inputStyles = {
  // Styles for the visual style variations
  baseStyle: {
    field: {
      outline: "none !important",
      fontSize: "sm",
      //border: "1px solid",

      _active: {
        borderColor: "brown",
        boxShadow: "0 0 0 1px var(--chakra-colors-badge)",
      },
      _focus: {
        borderColor:'secondary',
      },
      _invalid: {
        borderColor: "red",
        boxShadow: "none",
      },
      _disabled: {
        bg: "gray",
        _placeholder: {
          color: "white",
        },
      },
    },
  },
  variants: {
    flushed: {
      field:{ 
        _focus:{
          borderColor:"#3c4044 !important",
          boxShadow:"0px 1px 0px 0px #3c4044 !important"
        }
      }
    }
  }
/*
  variants: {
    outline: {
      field: {
        color: "light",
        height: "50px",
        background: "#272727bd",
        borderColor: "brown",
        fontSize: "sm",

        _hover: {
          borderColor: "brownHover",
        },
        _focus: {
          borderColor: "light",
          outline: "none",
          boxShadow: "0 0 0 1px var(--chakra-colors-badge)",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        height: "45px",
        borderRadius: "4px",
        padding: "11px 12px",
      },
    },
    lg: {
      field: {
        height: "48px",
        borderRadius: "4px",
        padding: "16px 12px",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
  */
};
