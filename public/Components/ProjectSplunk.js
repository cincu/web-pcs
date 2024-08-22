import styles from "@/styles/Home.module.css";
import ToggleTable from "./ToggleTable";
import useLogTables from "@/store/useLogTables";
import Link from "next/link";
import LogReportTemplate from "./LogReportTemplate";
import { Code, Text } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
export default function ProjectSplunk() {
  const { logTables } = useLogTables();
  const {
    sysmonLogData,
    vpnLogData,
    networkLogData,
    windowsEventLogData,
    firewallLogData,
    webServerLogData,
  } = logTables;

  return (
    <div>
      <ul>
        <li>
          <strong>Centralized Log Management:</strong> Splunk gathers logs from
          all over the network into one place, making it easier to spot issues.
        </li>
        <li>
          <strong>Real-Time Threat Detection:</strong> It helps security teams
          catch threats as they happen by analyzing data in real time.
        </li>
        <li>
          <strong>Incident Response:</strong> Splunk’s alerts and dashboards
          help teams quickly investigate and deal with security incidents.
        </li>
        <li>
          <strong>Compliance Reporting:</strong> It simplifies meeting
          regulatory requirements by generating reports and maintaining audit
          trails.
        </li>
        <li>
          <strong>Behavioral Analytics:</strong> Splunk tracks user behavior to
          detect unusual activity, which can indicate insider threats or
          compromised accounts.
        </li>
        <li>
          <strong>Threat Intelligence:</strong> It integrates threat
          intelligence to add context to security events, helping prioritize
          serious threats.
        </li>
        <li>
          <strong>APT Detection:</strong> By correlating events over time,
          Splunk can identify sophisticated, long-term attacks (APTs).
        </li>
        <li>
          <strong>Automation:</strong> Through tools like Splunk Phantom, it
          automates threat response, making incident handling faster.
        </li>
        <li>
          <strong>Custom Dashboards:</strong> Security teams can create visual
          dashboards tailored to monitor and report on their specific needs.
        </li>
      </ul>
      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="md"
        className={styles.projectSubtitle}
      >
        What to watch out for and what do they might indicate{" "}
      </Heading>
      <div>
        <ToggleTable
          title="Network Log Elements"
          columns={["Element", "Description"]}
          data={networkLogData}
        />
        <ToggleTable
          title="Sysmon Log Elements"
          columns={["Element", "Description"]}
          data={sysmonLogData}
        />
        <ToggleTable
          title="Windows Event Log Elements"
          columns={["Element", "Description"]}
          data={windowsEventLogData}
        />
        <ToggleTable
          title="Firewall Log Elements"
          columns={["Element", "Description"]}
          data={firewallLogData}
        />
        <ToggleTable
          title="Web Server Log Elements"
          columns={["Element", "Description"]}
          data={webServerLogData}
        />
        <ToggleTable
          title="VPN Log Elements"
          columns={["Element", "Description"]}
          data={vpnLogData}
        />
      </div>
      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="md"
        className={styles.projectSubtitle}
      >
        Preparation{" "}
      </Heading>
      <Box p={4} overflow="hidden">
        <Text fontWeight="bold">1. Set Up the Environment:</Text>
        <Text mb={4}>
          Start by accessing the environment using this link:{" "}
          <Link
            href="https://tryhackme.com/r/room/problemsolvingwithsplunk"
            color="teal.500"
            isExternal
          >
            TryHackMe Room
          </Link>
          .
        </Text>

        <Text fontWeight="bold">2. Download the Logs:</Text>
        <Text mb={4}>
          You’ll need three log files (<Code>Log1.json</Code>,{" "}
          <Code>Log2.json</Code>, <Code>Log3.csv</Code>). Download them from{" "}
          <Link
            href="https://github.com/LGOG/Masterschool/tree/Problem-Solving-with-Splunk"
            color="teal.500"
            isExternal
          >
            this GitHub repository
          </Link>
          , or use this command on your Linux machine (AttackBox/VM) to download
          all files in a zip:
        </Text>
        <Code display="block" p={2} bg="gray.100" mb={4}>
          wget
          https://github.com/LGOG/Masterschool/archive/refs/heads/Problem-Solving-with-Splunk.zip
        </Code>
        <Text mb={4}>After downloading, unzip the file.</Text>

        <Text fontWeight="bold">3. Upload Logs to Splunk:</Text>
        <Box mb={4}>
          <Text>
            Access Splunk at <Code>http://MACHINE_IP:8000</Code>.
          </Text>
          <Text>
            On the home screen, click <Code>Add Data</Code>.
          </Text>
          <Text>
            Upload one of the log files and click <Code>Next</Code>.
          </Text>
          <Text>
            In the <Code>Set Source Type</Code> section, explore different
            source types for better log parsing. For example,{" "}
            <Code>log1.json</Code> can be set as <Code>cisco:asa</Code>.
          </Text>
          <Text>
            Update the <Code>Host field value</Code> to identify the log’s
            purpose.
          </Text>
          <Text>Finally, start searching the uploaded log data.</Text>
        </Box>
      </Box>
      <div>
        <LogReportTemplate logType="logOne" />
        <LogReportTemplate logType="logTwo" />
        <LogReportTemplate logType="logThree" />
      </div>
    </div>
  );
}
