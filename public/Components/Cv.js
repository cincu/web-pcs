import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  VStack,
  Text,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";

import useCincuStore from "@/store/useCincu";

export default function Cv() {
  const { about, cincu } = useCincuStore();
  const long = cincu.long;

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
          <Text
            className={styles.textRegular}
            fontSize="l"
            textAlign="justify"
            lineHeight="2"
          >
            {text}
          </Text>
        </Box>
      ))}

      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "purple.600", color: "white" }}
              style={{ borderRadius: "8px" }}
            >
              <Box className={styles.title} as="span" flex="1" textAlign="left">
                Education
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList listStyleType="'+ '">
              {about.education.map((education, index) => (
                <ListItem
                  className={styles.textRegular}
                  key={index}
                  dangerouslySetInnerHTML={{ __html: education }}
                />
              ))}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "purple.600", color: "white" }}
              style={{ borderRadius: "8px" }}
            >
              <Box className={styles.title} as="span" flex="1" textAlign="left">
                Experience
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList listStyleType="'+ '">
              {about.experience.map((experience, index) => (
                <ListItem
                  className={styles.textRegular}
                  key={index}
                  dangerouslySetInnerHTML={{ __html: experience }}
                />
              ))}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "purple.600", color: "white" }}
              style={{ borderRadius: "8px" }}
            >
              <Box as="span" flex="1" textAlign="left" className={styles.title}>
                Languages
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList listStyleType="none">
              {about.languages.map((language, index) => (
                <ListItem
                  className={styles.textRegular}
                  key={index}
                  dangerouslySetInnerHTML={{ __html: language }}
                />
              ))}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              style={{ borderRadius: "8px" }}
              _expanded={{ bg: "purple.600", color: "white" }}
            >
              <Box as="span" flex="1" textAlign="left" className={styles.title}>
                Voluntary
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList listStyleType="'+ '">
              {about.voluntary.map((voluntary, index) => (
                <ListItem
                  className={styles.textRegular}
                  key={index}
                  dangerouslySetInnerHTML={{ __html: voluntary }}
                />
              ))}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton
              style={{ borderRadius: "8px" }}
              _expanded={{ bg: "purple.600", color: "white" }}
            >
              <Box as="span" flex="1" textAlign="left" className={styles.title}>
                References
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList listStyleType="none">
              {about.references.map((reference, index) => (
                <ListItem className={styles.textRegular} key={index}>
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
