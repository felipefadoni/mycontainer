import { styled } from ".";

export const RootApp = styled("main", {
  display: "flex",
  width: "100%",
  minHeight: "100vh",
});

export const Main = styled("main", {
  width: "100%",
  padding: "16px",
});

export const LoadingModal = styled("div", {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 99,
  background: "rgba(255,255,255,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
