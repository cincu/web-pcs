// components/Navbar.js
import { useState } from "react";
import {
  Flex,
  Link as ChakraLink,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
const MotionLink = motion(ChakraLink);

export default function Navbar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(router.pathname);

  function isActive(path) {
    return router.pathname.startsWith(path) ? "active" : "";
  }

  function isHome() {
    return router.pathname === "/";
  }

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Flex
      as="nav"
      w="100%"
      p={7}
      justifyContent="center"
      bg="white"
      position="fixed"
      top="0"
      zIndex="1000"
      className="grid"
    >
      <Flex
        w={{ base: "100%", md: "80%" }}
        direction={flexDirection}
        alignItems="center"
        justifyContent="space-around"
      >
        <MotionLink
          href="/"
          display="flex"
          alignItems="center"
          visibility={isHome() ? "hidden" : "visible"}
          onClick={() => handleLinkClick("/")}
          animate={{
            x: activeLink === "/" ? 20 : 0,
          }}
          whileHover={{ x: 20 }}
          transition={{ type: "spring", stiffness: 300 }}
          _hover={{ textDecoration: "none" }}
          p={4}
        >
          <ChevronLeftIcon
            aria-label="Home"
            boxSize={6}
            _hover={{ color: "silver" }}
            transition="color 0.3s"
          />
        </MotionLink>
        <MotionLink
          href="/about"
          className={isActive("/about")}
          onClick={() => handleLinkClick("/about")}
          animate={{
            x: activeLink === "/about" ? 20 : 0,
          }}
          whileHover={{ x: 20 }}
          transition={{ type: "spring", stiffness: 300 }}
          _hover={{
            textDecoration: "none",
            color: "silver",
          }}
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={isActive("/about") ? "silver" : "black"}
        >
          About
        </MotionLink>
        <MotionLink
          href="/projects"
          className={isActive("/projects")}
          onClick={() => handleLinkClick("/projects")}
          animate={{
            x: activeLink === "/projects" ? 20 : 0,
          }}
          whileHover={{ x: 20 }}
          transition={{ type: "spring", stiffness: 300 }}
          _hover={{
            textDecoration: "none",
            color: "silver",
          }}
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={isActive("/projects") ? "silver" : "black"}
        >
          Projects
        </MotionLink>
        <MotionLink
          href="/contact"
          className={isActive("/contact")}
          onClick={() => handleLinkClick("/contact")}
          animate={{
            x: activeLink === "/contact" ? 20 : 0,
          }}
          whileHover={{ x: 20 }}
          transition={{ type: "spring", stiffness: 300 }}
          _hover={{
            textDecoration: "none",
            color: "silver",
          }}
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={isActive("/contact") ? "silver" : "black"}
        >
          Contact
        </MotionLink>
      </Flex>
    </Flex>
  );
}
