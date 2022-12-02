import "../styles/globals.css";
import "../styles/Header.css";
import "../styles/Books.css";
import "../styles/Home.css";
import "../styles/Categories.css";
import "../styles/About.css";
import "../styles/Login.css";
import "../styles/Register.css";
import "../styles/Footer.css";
import "../styles/Category.css";
import "../styles/Book.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
