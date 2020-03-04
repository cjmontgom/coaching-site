import "typeface-abril-fatface";
import "typeface-quicksand";
import "typeface-fjalla-one"

type HexCode = string;

export interface Theme {
  headerFont: {
    family: string;
    size: string;
  };
  subHeaderFont: {
    family: string;
    size: string;
  }
  bodyFont: {
    family: string;
  };
  fontWeightBold: string;
  fontWeightMedium: string;
  fontWeightLight: string;
  colours: {
    primaryNeutral: HexCode;
    secondaryNeutral: HexCode;
    seventiesDarkBrown: HexCode;
    seventiesGreen: HexCode;
    seventiesOrange: HexCode;
    seventiesPink: HexCode;
    seventiesYellow: HexCode;
    seventiesYellowSecondary: HexCode;
  };
  borderRadius: string;
  boxShadow: {
    smallHover: string;
  };
  easing: string;
}

const theme: Theme = {
  headerFont: {
    family: "Abril Fatface",
    size: "4em"
  },
  subHeaderFont: {
    family: "Fjalla One",
    size: "1.5em"
  },
  bodyFont: {
    family: "Quicksand"
  },
  fontWeightBold: "500",
  fontWeightMedium: "400",
  fontWeightLight: "300",
  colours: {
    primaryNeutral: "#f7f5eb",
    secondaryNeutral: "#EEE0D3",
    seventiesDarkBrown: "#3F362A",
    seventiesGreen: "#6A7031",
    seventiesOrange: "#FC632B",
    seventiesPink: "#FF6265",
    seventiesYellow: "#F8BF3A",
    seventiesYellowSecondary: "#F0B978"
  },
  borderRadius: "8px",
  boxShadow: {
    smallHover: "0px 6px 15px rgba(0, 0, 0, 0.1)",
  },
  easing: "cubic-bezier(0.165, 0.84, 0.44, 1)"
};

export default theme;
