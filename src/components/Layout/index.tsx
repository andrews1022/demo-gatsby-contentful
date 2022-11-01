import React from "react";
import { ThemeProvider } from "styled-components";

// types
import type { ReactNode } from "react";

// components
import Footer from "../Footer";
import Navigation from "../Navigation";
import Seo from "../Seo";

// styled components
import GlobalStyle from "../../styles/GlobalStyle";
import theme from "../../styles/theme";

// props
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Seo title="Gatsby Contentful Blog w/ TypeScript" />
    <Navigation />
    <main className="test">{children}</main>
    <Footer />
  </ThemeProvider>
);

export default Layout;
