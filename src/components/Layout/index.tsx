import * as React from "react";
import PropTypes from "prop-types";

import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
  titles: string;
}

export const Layout = ({ children, hideHeader = false , hideFooter = false, titles }: LayoutProps) => {
  return (
    <Box className="main-main">
      <h1 style={{ opacity: 0, height: '1px' }} >Neitrys Barrera</h1>
      {!hideHeader && <Header title={titles} />}
      <main className="main-">{children}</main>
      {!hideFooter && <Footer />}
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideHeader: PropTypes.bool,
  hideFooter: PropTypes.bool,
  titles: PropTypes.string,
};

Layout.defaultProps = {
  hideHeader: false,
  hideFooter: false,
};

