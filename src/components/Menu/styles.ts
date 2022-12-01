import { styled } from "src/styles";

export const MenuContainer = styled("aside", {
  width: "15vw",
  minHeight: "100vh",
  background: "$blueDark",

  ".logo": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 16px",

    svg: {
      color: "$white",
      fill: "$white",
      height: "60px",
    },

    span: {
      fontSize: 22,
      fontWeight: "bold",
      marginLeft: "8px",
      color: "$white",
      cursor: "default",
    },
  },
});

export const NavContainer = styled("nav", {
  display: "block",

  "ul li": {
    marginTop: "8px",

    "&.active": {
      background: "$pinkDark",

      "&.active a": {
        color: "$white",
      },
    },
  },

  "ul li a": {
    display: "block",
    padding: "8px 16px",
    textDecoration: "none",
    color: "$halfTransparentWhite",

    "&:hover": {
      color: "$white",
      background: "$pinkDark",
    },
  },
});
