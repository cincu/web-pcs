import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import useCincuStore from "@/store/useCincu";
export default function Cv() {
  const { about, cincu } = useCincuStore();
  const long = cincu.long;
  function getProgressValue(language) {
    switch (language.toLowerCase()) {
      case "turkish":
      case "english":
        return 100;
      case "german":
        return 50;
      case "italian":
        return 40;
      default:
        return 10; // Default value if none of the cases match
    }
  }
  return (
    <>
      {cincu.long.map((long, index) => (
        <Box
          key={index}
          textAlign="center"
          fontSize="xl"
          margin="0 auto"
          padding="1rem"
        >
          <p>{long}</p>
        </Box>
      ))}{" "}
      <br></br>
      <br></br>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "grey", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                Education
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>
              {about.education.map((education, index) => (
                <li key={index}>{education}</li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "grey", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                Experience
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>
              {about.experience.map((experience, index) => (
                <li key={index}>{experience}</li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "grey", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                Languages
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>
              {about.languages.map((language, index) => (
                <li key={index}>
                  {language}
                  <CircularProgress
                    style={{ padding: "2rem", right: "1rem" }}
                    value={getProgressValue(language)}
                    size="1.4rem"
                  />
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "grey", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                Voluntary
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>
              {about.voluntary.map((voluntary, index) => (
                <li key={index}>{voluntary}</li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "grey", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                References
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>
              {about.references.map((references, index) => (
                <li key={index}>
                  <Link href={references}>{references}</Link>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
