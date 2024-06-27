import "nextra-theme-blog/style.css";
import type { AppProps } from "next/app";
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from "next-theme";
import "../styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider darkTheme="dark" defaultTheme="dark" setAttribute={false}>
      <main className={GeistSans.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
