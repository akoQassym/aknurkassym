import "nextra-theme-blog/style.css";
import type { AppProps } from "next/app";
import { GeistSans } from 'geist/font/sans';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "../styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={GeistSans.className}>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
