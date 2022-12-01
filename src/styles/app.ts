import { styled } from ".";

export const RootApp = styled("main", {
  display: "flex",
  width: "100vw",
  minHeight: "100vh",
});

export const Main = styled("main", {
  width: "85vw",
  padding: "1rem 0 0 1rem",
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
