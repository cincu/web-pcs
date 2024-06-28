import {
  Box,
  Heading,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { Text } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";

export default function ProjectNessus() {
  return (
    <div>
      <Tabs orientation="vertical" variant="unstyled">
        <Box display="flex" alignItems="start">
          <TabList>
            <Tab>0. Install </Tab>
            <Tab>1. Test Scan</Tab>
            <Tab>2. Risk Scoring</Tab>
            <Tab>3. Nessus Lab</Tab>
            <Tab>4. Final Notes</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <p>
                Participating in a Nessus vulnerability scan is an invaluable
                exercise for anyone looking to enhance their cybersecurity
                skills. This task helps you become proficient in identifying
                potential security weaknesses across various systems. By using
                Nessus, you learn to scan networks and applications for
                vulnerabilities, interpret scan results, and prioritize
                remediation efforts. This hands-on experience provides practical
                knowledge essential for protecting sensitive information and
                maintaining robust security postures. Engaging in Nessus
                vulnerability scanning is crucial for preparing to tackle
                real-world cybersecurity challenges and ensuring the integrity
                and safety of digital infrastructures.
              </p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </div>
  );
}
