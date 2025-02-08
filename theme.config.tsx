import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.svg"/>
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Stackly'
    }
  },
  logo: (
    <>
      <img width="24" height="24" src="/favicon.svg"></img>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Stackly</span>
    </>
  ),
  project: {
    link: "https://github.com/simon-bonnedahl/stackly",
  },
  docsRepositoryBase: "https://github.com/simon-bonnedahl/stackly/blob/main/",
  footer: {
    text: "Stackly",
  },
};

export default config;
