import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import GitHubStars from "./components/GitHubStars";

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.svg"/>
    </>
  ),
  useNextSeoProps() {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    return {
      titleTemplate: 'Stackly | %s',
      canonical: `https://stackly.simbo.dev${currentPath}`,
      description: 'A comprehensive guide to fullstack web development, covering frontend, backend, DevOps, and best practices.',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `https://stackly.simbo.dev${currentPath}`,
        siteName: 'Stackly',
        description: 'A comprehensive guide to fullstack web development, covering frontend, backend, DevOps, and best practices.'
      }
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
    icon: (
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
      }}>

        <svg width="24" height="24" viewBox="0 0 16 16">
          <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <GitHubStars />
      </div>
    )
  },
  docsRepositoryBase: "https://github.com/simon-bonnedahl/stackly/blob/main/",
  footer: {
    text: "Stackly",
  },
};

export default config;
