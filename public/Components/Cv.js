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
  UnorderedList,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import useCincuStore from "@/store/useCincu";
import { AddIcon } from "@chakra-ui/icons";

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
          <Text fontSize="l" textAlign="justify" lineHeight="2">
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
            <UnorderedList listStyleType="circle">
              {about.education.map((education, index) => (
                <li key={index}>{education}</li>
              ))}
            </UnorderedList>
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
            <UnorderedList listStyleType="circle">
              {about.experience.map((experience, index) => (
                <ListItem key={index}>{experience}</ListItem>
              ))}
            </UnorderedList>
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
            <UnorderedList>
              {about.languages.map((language, index) => (
                <ListItem
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
                </ListItem>
              ))}
            </UnorderedList>
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
            <UnorderedList listStyleType="circle">
              {about.voluntary.map((voluntary, index) => (
                <ListItem key={index}>{voluntary}</ListItem>
              ))}
            </UnorderedList>
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
            <UnorderedList listStyleType="none">
              {about.references.map((reference, index) => (
                <ListItem key={index}>
                  <Link href={reference} isExternal color="teal.500">
                    {reference}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
}
