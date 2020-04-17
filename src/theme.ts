import "typeface-montserrat";
import "typeface-quicksand";

type HexCode = string;

export interface Theme {
  headerFont: {
    family: string;
    size: string;
    weight: string;
  };
  subHeaderFont: {
    family: string;
    size: string;
    letterSpacing: string;
  };
  bodyFont: {
    family: string;
    size: string;
    lineHeight: string;
  };
  formInputFont: {
    family: string;
    size: string;
  },
  fontWeightReallyBold: string,
  fontWeightBold: string;
  fontWeightMedium: string;
  fontWeightLight: string;
  colours: {
    neutral: HexCode;
    yellow: HexCode;
    pink: HexCode;
    orange: HexCode;
    green: HexCode;
  };
  sizes: {
    desktop: {
      columnWidth: string
      marginTop: string
    }
  }
  borderRadius: string;
  boxShadow: {
    smallHover: string;
  };
  easing: string;
}

const theme: Theme = {
  headerFont: {
    family: "Montserrat",
    size: "3.4em",
    weight: "610"
  },
  subHeaderFont: {
    family: "Montserrat",
    size: "1.5em",
    letterSpacing: "0.3em"
  },
  bodyFont: {
    family: "Quicksand",
    size: "1.3em",
    lineHeight: "1.8"
  },
  formInputFont: {
    family: "Quicksand",
    size: "1.1em"
  },
  fontWeightReallyBold: "600",
  fontWeightBold: "500",
  fontWeightMedium: "400",
  fontWeightLight: "300",
  colours: {
    neutral: "#FFF5DA",
    yellow: "#F8BF3A",
    pink: "#FF6264",
    orange: "#FC612B",
    green: "#6A7031"
  },
  sizes: {
    desktop: {
      columnWidth: "40%",
      marginTop: "140px"
    }
  },
  borderRadius: "8px",
  boxShadow: {
    smallHover: "0px 6px 15px rgba(0, 0, 0, 0.1)"
  },
  easing: "cubic-bezier(0.165, 0.84, 0.44, 1)"
};

export default theme;
