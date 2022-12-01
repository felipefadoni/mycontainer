import { styled } from "src/styles";

export const TableNetworks = styled("table", {
  width: "100%",
  borderSpacing: 0,
  borderCollapse: "collapse",

  "thead tr th:first-child": {
    width: "1%",
  },

  "thead tr th": {
    textAlign: "left",
    background: "$blueLight",
    fontSize: "1rem",
    color: "$white",
    padding: "8px 16px",
  },

  "tbody tr": {
    transition: "background 0.2s",
  },

  "tbody tr:nth-child(odd)": {
    background: "$white",
  },

  "tbody tr:nth-child(even)": {
    background: "$greyLight",
  },

  "tbody tr:hover": {
    background: "$poolBlue",
  },

  "tbody tr td": {
    fontSize: "1rem",
    padding: "8px 16px",
  },

  "tbody tr td:first-child": {
    p: {
      textOverflow: "ellipsis",
      display: "block",
      width: "200px",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  },
});
