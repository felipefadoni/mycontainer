import type { AppProps } from "next/app";
import { Menu } from "src/components";
import { Main, RootApp } from "src/styles/app";
import { globalStyles } from "src/styles/global";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootApp>
      <Menu />
      <Main>
        <Component {...pageProps} />
      </Main>
    </RootApp>
  );
}
