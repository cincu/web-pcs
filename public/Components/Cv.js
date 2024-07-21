import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  CircularProgress,
  CircularProgressLabel,
  VStack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
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
        return 10;
    }
  }

  return (
    <VStack spacing={8} align="stretch">
      {long.map((text, index) => (
        <Box
          key={index}
          bg="white"
          color="smoke"
          p={6}
          borderRadius="md"
          boxShadow="sm"
        >
          <Text fontSize="l" textAlign="center">
            {text}
          </Text>
        </Box>
      ))}

      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "purple.600", color: "white" }}>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
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
            <AccordionButton _expanded={{ bg: "purple.600", color: "white" }}>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
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
            <AccordionButton _expanded={{ bg: "purple.600", color: "white" }}>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                Languages
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>
              {about.languages.map((language, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {language}
                  <CircularProgress
                    value={getProgressValue(language)}
                    size="1.4rem"
                    color="purple.600"
                  />
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "purple.600", color: "white" }}>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
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
            <AccordionButton _expanded={{ bg: "purple.600", color: "white" }}>
              <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                References
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>
              {about.references.map((reference, index) => (
                <li key={index}>
                  <Link href={reference} isExternal color="teal.500">
                    {reference}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
}
