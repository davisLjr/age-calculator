import PropTypes from "prop-types";
import { Box, Flex, Link, Heading, IconButton,  Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { ArrowBackIcon, HamburgerIcon } from "@chakra-ui/icons";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <nav>
        <Flex
          justifyContent="space-between"
          padding="1.5rem 1rem"
          boxShadow="md"
        >
          <Heading as="h5" size="md" fontFamily="cursive" alignSelf='center'>
              {title}
          </Heading>
          <Box width="270px" justifyContent="space-between" display={{base:'none',md:'flex'}}>
            <Link href="/" sx={stylesLink} position="relative">
              Birthday calculator
            </Link>
            <Link href="/age-calculator" sx={stylesLink} position="relative">
              Age calculator
            </Link>
          </Box>
          <Box display={{base:'flex',md:'none'}}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                _hover={{
                  background:'white',
                  borderColor:'secondary'
                }}
              />
              <MenuList display='flex'
                flexDirection='column'
                padding='1rem'
              >
                <Link  href="/" borderBottom='1px solid' borderColor='#d3d3d3' mb='0.5rem'>
                  Birthday calculator
                </Link>
                <Link href="/age-calculator" borderBottom='1px solid' borderColor='#d3d3d3' mb='0.5rem'>
                  Age calculator
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
const stylesLink = {
  _before: {
    content: "''",
    position: "absolute",
    top: "-5px",
    left: "0",
    width: "100%",
    height: "3px",
    background: "#282a3e",
    transform: "scaleX(0)",
    transformOrigin: "top left",
    transition: "transform 0.3s",
  },
  _after: {
    content: "''",
    position: "absolute",
    bottom: "-4px",
    right: "0",
    width: "100%",
    height: "3px",
    background: "#282a3e",
    transform: "scaleX(0)",
    transformOrigin: "bottom right",
    transition: "transform 0.3s",
  },
  _hover: {
    _before: {
      transform: "scaleX(1)",
      transition: "transform 0.2s 0.3s",
    },
    _after: {
      transform: "scaleX(1)",
      transition: "transform 0.2s 0.1s",
    },
  },
  _active: {
    _before: {
      transform: "scaleX(1)",
      transition: "transform 0.2s 0.3s",
    },
    _after: {
      transform: "scaleX(1)",
      transition: "transform 0.2s 0.1s",
    },
  },
};
