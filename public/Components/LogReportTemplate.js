import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Collapse,
  VStack,
  Heading,
  UnorderedList,
  ListItem,
  List,
} from "@chakra-ui/react";
import useLogData from "@/store/useLogData.js";
import styles from "@/styles/Home.module.css";

function LogReportTemplate({ logType }) {
  const { logOne, logTwo, logThree } = useLogData();
  const logTypeLabels = {
    logOne: "Log 1",
    logTwo: "Log 2",
    logThree: "Log 3",
  };

  const reportData =
    logType === "logOne" ? logOne : logType === "logTwo" ? logTwo : logThree;

  const [isOpen, setIsOpen] = useState(false);

  const toggleReport = () => {
    setIsOpen(!isOpen);
  };

  if (!reportData) {
    return <Text>No data available for the selected log type.</Text>;
  }

  return (
    <Box mb={8}>
      <Button onClick={toggleReport} mb={4}>
        {isOpen
          ? `- ${logTypeLabels[logType]} Report`
          : `+ ${logTypeLabels[logType]} Report`}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p={4}>
          <Heading fontFamily="Quicksand" as="h4" size="md">
            {reportData.summary}
          </Heading>
          <br></br>
          <VStack align="start" spacing={4}>
            <Box>
              <Heading fontFamily="Quicksand" size="md">
                IT INFRASTRUCTURE DETAILS{" "}
              </Heading>
              <Text>
                <strong>Host:</strong> {reportData.itInfrastructure.host}
              </Text>
              <Text>
                <strong>Source Type:</strong>{" "}
                {reportData.itInfrastructure.sourceType}
              </Text>
              <Text>
                <strong>Log File Analyzed:</strong>{" "}
                {reportData.itInfrastructure.logFile}
              </Text>
              <Text>
                <strong>Index:</strong> {reportData.itInfrastructure.index}
              </Text>
            </Box>
            <Box>
              <Heading fontFamily="Quicksand" size="md">
                FINDINGS
              </Heading>
              {reportData.findings.map((finding, index) => (
                <UnorderedList key={index} mt={4}>
                  <ListItem>
                    <strong>{finding.title}</strong>
                  </ListItem>
                  <Text>
                    <strong>Observation:</strong> {finding.observation}
                  </Text>
                  <Text>
                    <strong>MITRE ATT&CK Technique:</strong> {finding.mitre}
                  </Text>
                </UnorderedList>
              ))}
            </Box>
            {reportData.analysis && (
              <Box>
                <Heading size="sm">Detailed Analysis</Heading>
                {reportData.analysis.map((analysisItem, index) => (
                  <Box key={index} mt={4}>
                    <Text>
                      <strong>{analysisItem.title}</strong>
                    </Text>
                    <Text>{analysisItem.description}</Text>
                  </Box>
                ))}
              </Box>
            )}
            {reportData.iocs && reportData.iocs.length > 0 && (
              <Box>
                <Heading size="sm">Indicators of Compromise (IOCs)</Heading>
                {reportData.iocs.map((ioc, index) => (
                  <Box key={index} mt={4}>
                    <Text>
                      <strong>{ioc.title}</strong>
                    </Text>
                    <VStack align="start" spacing={2}>
                      {ioc.findings.map((finding, fIndex) => (
                        <Text key={fIndex}>{finding.description}</Text>
                      ))}
                    </VStack>
                  </Box>
                ))}
              </Box>
            )}
            <Box>
              <Heading fontFamily="Quicksand" size="md">
                NEXT STEPS
              </Heading>
              <br />
              {reportData.nextSteps.immediate && (
                <>
                  <Text>
                    <strong>Immediate Actions:</strong>
                  </Text>
                  <VStack align="start" spacing={2}>
                    {reportData.nextSteps.immediate.map((step, index) => (
                      <Text key={index}>{step}</Text>
                    ))}
                  </VStack>
                </>
              )}
              {reportData.nextSteps.enhancedMonitoring && (
                <>
                  <Text mt={2}>
                    <strong>Enhanced Monitoring:</strong>
                  </Text>
                  <VStack align="start" spacing={2}>
                    {reportData.nextSteps.enhancedMonitoring.map(
                      (step, index) => (
                        <Text key={index}>{step}</Text>
                      )
                    )}
                  </VStack>
                </>
              )}
              {reportData.nextSteps.internalReview && (
                <>
                  <Text mt={2}>
                    <strong>Internal Review:</strong>
                  </Text>
                  <VStack align="start" spacing={2}>
                    {reportData.nextSteps.internalReview.map((step, index) => (
                      <Text key={index}>{step}</Text>
                    ))}
                  </VStack>
                </>
              )}
            </Box>
            <Box>
              <Heading fontFamily="Quicksand" size="md">
                PREVENTION
              </Heading>
              {reportData.prevention && (
                <VStack align="start" spacing={2}>
                  {Object.entries(reportData.prevention).map(
                    ([key, measures], index) => (
                      <Box key={index}>
                        <Text mt={2}>
                          <strong>{key.replace(/([A-Z])/g, " $1")}</strong>
                        </Text>
                        {measures.map((measure, mIndex) => (
                          <Text key={mIndex}>{measure}</Text>
                        ))}
                      </Box>
                    )
                  )}
                </VStack>
              )}
            </Box>
            <Box>
              <Heading fontFamily="Quicksand" size="md">
                MITRE ATT&CK FRAMEWORK MAPPING
              </Heading>
              <br />
              <VStack align="start" spacing={2}>
                {reportData.mitreMapping.map((mapping, index) => (
                  <Text key={index}>
                    <strong>{mapping.tactic}:</strong> {mapping.technique}
                  </Text>
                ))}
              </VStack>
            </Box>
            <Box>
              <Heading fontFamily="Quicksand" size="md">
                CONCLUSION
              </Heading>
              <Text>{reportData.conclusion}</Text>
            </Box>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
}

export default LogReportTemplate;
