import { useState } from "react";
import styles from "@/styles/Home.module.css";

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

  const bgColor = useBreakpointValue({
    base: "rgba(255, 255, 255, 0.5)",
    md: "white",
  });

  return (
    <Flex
      as="nav"
      w="100%"
      h="6rem"
      p={4}
      justifyContent="center"
      bg={bgColor}
      position="fixed"
      top="0"
      zIndex="1000"
      className={styles.grid}
    >
      <Flex
        w={{ base: "100%", md: "80%" }}
        direction="row"
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
            _hover={{ color: "purple.600" }}
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
            color: "purple.600",
          }}
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={isActive("/about") ? "purple.600" : "black"}
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
            color: "purple.600",
          }}
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={isActive("/projects") ? "purple.600" : "black"}
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
            color: "purple.600",
          }}
          p={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          color={isActive("/contact") ? "purple.600" : "black"}
        >
          Contact
        </MotionLink>
      </Flex>
    </Flex>
  );
}
