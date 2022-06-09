import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    color: #222;
    font-family: 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ',
      Meiryo, sans-serif;
    font-size: 16px;
    height: 100%;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input {
    appearance: none;
    background: transparent;
    border: 0;
    border-radius: 0;
    margin: 0;
  }

  /* 上記と分けて記述しない場合EdgeでCSS Resetが効かなくなるので注意 */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    background: transparent;
    border: 0;
    border-radius: 0;
    margin: 0;
  }
`;
