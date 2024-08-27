import { Box, Button, Code, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { Text } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
export default function ProjectNessus() {
  const [showContents, setShowContents] = useState(false);

  const toggleContents = () => {
    setShowContents(!showContents);
  };
  return (
    <Box>
      <UnorderedList spacing={2} styleType="none" marginBottom="4">
        <ListItem>
          <Button as="a" href="#heading1" variant="link" colorScheme="teal">
            1. Installation and Setup
          </Button>
        </ListItem>
        <ListItem>
          <Button as="a" href="#heading2" variant="link" colorScheme="teal">
            2. Scan Execution
          </Button>
        </ListItem>
        <ListItem>
          <Button as="a" href="#heading3" variant="link" colorScheme="teal">
            3. Vulnerability Analysis
          </Button>
        </ListItem>
        <ListItem>
          <Button as="a" href="#heading4" variant="link" colorScheme="teal">
            4. Final Notes
          </Button>
        </ListItem>
      </UnorderedList>

      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="lg"
        className={styles.projectSubtitle}
        marginBottom="4"
        id="heading1"
      >
        1. Installing Nessus on Kali Linux
      </Heading>
      <Box>
        <UnorderedList listStyleType="'- '" spacing={3}>
          <ListItem>
            Visit the{" "}
            <a
              href="https://www.tenable.com/downloads/nessus?loginAttempted=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nessus download page
            </a>
            . The page should automatically detect the correct platform for your
            machine, but if it does not, select the correct version/architecture
            manually. For instance, choose <Code>Ubuntu aarch64</Code> if that
            matches your system.
          </ListItem>

          <ListItem>
            Once the download is complete, navigate to your Downloads folder and
            start the installation process.
            <UnorderedList listStyleType="none" spacing={2} marginTop="2">
              <ListItem>
                Open Terminal and run the following command:
                <Code
                  display="block"
                  marginY="2"
                  padding="2"
                  backgroundColor="gray.100"
                >
                  cd ~/Downloads
                </Code>
              </ListItem>
              <ListItem>
                Then, install the downloaded package with:
                <Code
                  display="block"
                  marginY="2"
                  padding="2"
                  backgroundColor="gray.100"
                >
                  sudo dpkg -i filename.deb
                </Code>
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem>
            After the installation is complete, copy the line at the bottom of
            the installation output that starts the Nessus service. Run the
            following command to start the service:
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              sudo /bin/systemctl start nessusd.service
            </Code>
          </ListItem>

          <ListItem>
            Open your browser and navigate to <Code>https://kali:8834/</Code>.
          </ListItem>

          <ListItem>
            Log in to your account. If this is your first time setting up
            Nessus, select Nessus Essentials and register your account. Be sure
            to save the code provided during registration.
          </ListItem>
        </UnorderedList>
      </Box>
      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="lg"
        className={styles.projectSubtitle}
        id="heading2"
      >
        2. Test Scan on Kali
      </Heading>
      <Box>
        <UnorderedList spacing={3} marginBottom="4" listStyleType="'- '">
          <ListItem>
            Realized that the scan can be scheduled for a future time or set to
            run regularly. I started a test scan:
          </ListItem>

          <ListItem>
            Here you can find templates of scans, which I found quite
            interesting:
            <UnorderedList
              listStyleType="none"
              marginTop="2"
              marginLeft="8"
              spacing={2}
            >
              <ListItem>
                <strong>Basic Network Scan:</strong> Performs safe vulnerability
                checks across a wide range of network devices, suitable for
                regular security assessments.
              </ListItem>
              <ListItem>
                <strong>Advanced Scan:</strong> More detailed than the Basic
                Network Scan, this template allows for customized settings to
                deeply assess complex networks.
              </ListItem>
              <ListItem>
                <strong>Credentialed Patch Audit:</strong> Checks systems for
                missing updates using credentials, crucial for verifying
                compliance with internal security policies.
              </ListItem>
              <ListItem>
                <strong>Mobile Device Scan:</strong> Specifically designed to
                identify vulnerabilities in mobile platforms, including
                smartphones and tablets.
              </ListItem>
              <ListItem>
                <strong>Malware Scan:</strong> Searches network devices for
                malware infections, ideal for environments at risk or suspected
                of malware activities.
              </ListItem>
              <ListItem>
                <strong>PCI DSS Compliance:</strong> Focuses on compliance with
                the Payment Card Industry Data Security Standard, necessary for
                any business processing card payments.
              </ListItem>
              <ListItem>
                <strong>Web Application Tests:</strong> Targets vulnerabilities
                in web applications, checking for issues like SQL injection and
                XSS, vital for protecting business-critical web services.
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem>
            Scanned my local device and found some vulnerabilities:
          </ListItem>

          <ListItem>
            Went to the vulnerabilities tab to investigate further. I had
            previously enabled SSH connection, and I suspected it might be
            related:
          </ListItem>

          <ListItem>
            Clicked on the vulnerability and found that the report suggested
            updating the OpenSSH client. The vulnerabilities addressed in
            updates like OpenSSH 9.6 typically include:
            <UnorderedList
              listStyleType="none"
              marginTop="2"
              marginLeft="8"
              spacing={2}
            >
              <ListItem>
                <strong>Authentication Bypass:</strong> Flaws that might allow
                an attacker to bypass authentication mechanisms and gain
                unauthorized access to the system.
              </ListItem>
              <ListItem>
                <strong>Denial of Service (DoS):</strong> Bugs that could allow
                an attacker to crash the service, making it unavailable for
                legitimate users.
              </ListItem>
              <ListItem>
                <strong>Code Execution:</strong> Vulnerabilities that might
                permit an attacker to execute arbitrary code on the host
                machine, potentially taking over the system.
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem>
            After exploring the vulnerabilities and reading more, I continued
            with the TryHackMe room. You can find it here:
            <a
              href="https://tryhackme.com/r/room/masterschoolvulnerability"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tryhackme.com/r/room/masterschoolvulnerability
            </a>
          </ListItem>
        </UnorderedList>
      </Box>
      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="md"
        className={styles.projectSubtitle}
        marginBottom="4"
      >
        Understanding Nessus, CVE, and CVSS
      </Heading>
      <Box>
        <Text marginBottom="4">
          When conducting a Nessus scan, a primary output to review is the risk
          score for each identified vulnerability, guiding response
          prioritization. CVE identifiers, unique labels for known
          vulnerabilities, are typically linked to these scores, standardizing
          discussions across global security platforms. The CVE system ensures
          that security professionals are uniformly informed.
        </Text>

        <Text marginBottom="4">
          Additionally, the CVSS (Common Vulnerability Scoring System)
          complements CVE by quantifying vulnerability severity on a scale from
          0 to 10. This scoring is vital for assessing the urgency and potential
          impact of vulnerabilities.
        </Text>

        <Text>
          Both CVE and CVSS scores are cataloged in the NVD (National
          Vulnerability Database), which integrates these scores with detailed
          mitigation guidelines. Nessus utilizes this information to highlight
          critical vulnerabilities, aiding in informed decision-making about
          remediation priorities. This integration of tools and databases is
          crucial for effective cybersecurity management.
        </Text>
        <Box />
        <Heading
          fontFamily="Quicksand"
          as="h4"
          size="lg"
          className={styles.projectSubtitle}
          id="heading3"
        >
          3. Vulnerability Analysis
        </Heading>
        <Heading
          fontFamily="Quicksand"
          as="h4"
          size="md"
          className={styles.projectSubtitle}
        >
          Task 4 - THM Room EternalBlue and CVE Investigation
        </Heading>

        <Text marginBottom="4">
          Screenshot from THM room. Questions and Answers of Task 4:
        </Text>

        <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
          <ListItem>What does CVE stand for?</ListItem>
          <Text>common vulnerabilities and exposures</Text>

          <ListItem>
            So let us investigate a real CVE; we are going to talk about
            EternalBlue
          </ListItem>
          <Text>
            EternalBlue is a Windows exploit created by the US National Security
            Agency (NSA) and used in the 2017 WannaCry ransomware attack.
          </Text>

          <ListItem>What is the CVE for EternalBlue?</ListItem>
          <Text>CVE-2017-0144</Text>

          <ListItem>
            Use MITRE to look up this CVE; what is the Problem Type of this
            vulnerability?
          </ListItem>
          <Text>remote code execution</Text>

          <ListItem>
            The important question is, which service/protocol Product does this
            vulnerability attack?
          </ListItem>
          <Text>SMB</Text>

          <ListItem>
            Use the National Vulnerability Database (NVD) to search for this
            vulnerability. What is the NVD Published Date?
          </ListItem>
          <Text>03/16/2017</Text>

          <ListItem>What is the Base Score for this vulnerability?</ListItem>
          <Text>8.1 HIGH</Text>

          <ListItem>
            Look at the References to Advisories, Solutions, and Tools what is
            the URL for the Vendor Advisory?
          </ListItem>
          <Text>
            https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2017-0144
          </Text>

          <ListItem>What did the vendor name this Vulnerability?</ListItem>
          <Text>Windows SMB Remote Code Execution Vulnerability</Text>

          <ListItem>Who is the vendor for this Vulnerability?</ListItem>
          <Text>Microsoft</Text>

          <ListItem>When did the vendor release the Security Updates?</ListItem>
          <Text>Mar 14, 2017</Text>

          <ListItem>What was the Impact?</ListItem>
          <Text>Remote Code Execution</Text>

          <ListItem>What was the max severity?</ListItem>
          <Text>critical</Text>

          <ListItem>Go back to the NVD page of this Vulnerability</ListItem>
          <Text>
            Under References to Advisories, Solutions, and Tools how many links
            do we have from exploit-db?
          </Text>
          <Text>4</Text>

          <ListItem>
            We will learn more about exploit-db in the future, but for now,
            remember that this is an archive of exploits for the purpose of
            public security
          </ListItem>

          <ListItem>
            Click on the last link from exploit-db; what is the EDB-ID for this
            exploit?
          </ListItem>
          <Text>42031</Text>

          <ListItem>
            In which programming language is this exploit written in?
          </ListItem>
          <Text>python</Text>

          <ListItem>Who wrote this exploit?</ListItem>
          <Text>SLEEPYA</Text>

          <ListItem>
            If we had only Linux machines in our environment, would we need to
            patch against this Vulnerability? (Y/N)
          </ListItem>
          <Text>NO</Text>
        </UnorderedList>
      </Box>

      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="md"
        className={styles.projectSubtitle}
      >
        Task 5 - THM Room Analysis Overview
      </Heading>
      <Box>
        <Text marginBottom="4">
          The room has quite straightforward questions that I won’t be covering
          the answers here.
        </Text>

        <Text marginBottom="4">
          Following the instructions, I can only access the <Code>/login</Code>{" "}
          page once I accept the risk. Credentials are provided for this THM
          room.
        </Text>

        <Text marginBottom="4">
          Once logged in, there’s a Scan Report for sample investigation. Three
          hosts are scanned.
        </Text>

        <Text marginBottom="4">
          The interesting one to analyze would be the first one with critical
          vulnerabilities (192.168.114.177). Next to the hosts(3) tab, there are
          vulnerabilities(49), remediations(130), VPR Top threats, and history
          tabs.
        </Text>

        <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
          <ListItem>
            Hosts tab ⇒ displays a list of all the devices (computers and
            servers) that have been scanned, providing details about each host’s
            security status.
          </ListItem>
          <ListItem>
            Vulnerabilities ⇒ shows all the security weaknesses found during the
            scans, categorized by severity to help prioritize which issues to
            address first.
          </ListItem>
          <ListItem>
            Remediations ⇒ this tab offers specific actions or fixes to address
            the vulnerabilities identified in the scans, often grouping similar
            issues to streamline the resolution process.
          </ListItem>
          <ListItem>
            VPR Top Threats ⇒ shows the most critical vulnerabilities based on
            their potential impact and the likelihood of exploitation, helping
            to focus efforts on the most threatening issues.
          </ListItem>
          <ListItem>
            History ⇒ provides a historical view of all scans conducted,
            allowing to track changes and improvements in security.
          </ListItem>
        </UnorderedList>

        <Text marginBottom="4">
          Again, obviously the attention should be on the critical risk with a
          score of 10.0. The high rating is based on the potential impact and
          the risks associated with running outdated or unsupported software.
        </Text>
      </Box>

      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="md"
        className={styles.projectSubtitle}
      >
        Why It is Rated 10.0
      </Heading>
      <Box>
        <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
          <ListItem>
            No Updates or Patches: Unsupported versions of operating systems no
            longer receive security patches or updates from the vendor. This
            means any newly discovered vulnerabilities in the software will not
            be fixed, leaving the system perpetually vulnerable to these issues.
          </ListItem>
          <ListItem>
            Known Vulnerabilities: Attackers often target older, unsupported
            systems because their vulnerabilities are well-documented and widely
            known, making them easier to exploit.
          </ListItem>
          <ListItem>
            Compliance Issues: Running unsupported software can also result in
            non-compliance with various regulatory standards, which might
            require systems to be up-to-date to ensure data protection and
            security.
          </ListItem>
        </UnorderedList>
      </Box>
      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="md"
        className={styles.projectSubtitle}
      >
        Potential Consequences of Running an Unsupported Unix System
      </Heading>
      <Box>
        <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
          <ListItem>
            Increased Risk of Breaches: Without the protection of security
            updates, these systems are more susceptible to hacks, data breaches,
            and unauthorized access.
          </ListItem>
          <ListItem>
            System Compromise: Exploits for known vulnerabilities can lead to
            complete system compromise, where an attacker could gain control
            over the system, manipulate or steal data, and potentially use the
            compromised system as a launchpad for further attacks within the
            network.
          </ListItem>
          <ListItem>
            Denial of Service: Vulnerabilities could also be exploited to
            disrupt services, leading to downtime and loss of productivity or
            service availability.
          </ListItem>
        </UnorderedList>

        <Text marginBottom="4">
          The solution is simply ‘upgrading to a version of the Unix operating
          system that’s currently supported.’
        </Text>
      </Box>
      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="md"
        className={styles.projectSubtitle}
      >
        Another Vulnerability: Unsecured SMB Server
      </Heading>

      <Text marginBottom="4">
        An SMB server that doesn not require a sign-in poses a medium-risk
        vulnerability as it can be easily exploited in man-in-the-middle
        attacks. This configuration allows unauthorized users to intercept or
        manipulate data moving between clients and the server, potentially
        leading to data theft or corruption. To mitigate this risk, it is
        crucial to configure SMB servers to require authentication and use
        encryption to secure data transmissions. Implementing these security
        measures will help prevent unauthorized access and protect the integrity
        of the data being transferred.
      </Text>

      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="lg"
        className={styles.projectSubtitle}
        id="heading4"
      >
        4. Findings and Final Notes
      </Heading>

      <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
        <ListItem>
          Installation and Setup: Successfully installed Nessus on Kali Linux,
          which required selecting the appropriate version for my machine's
          architecture. The process is straightforward once the correct platform
          is identified, illustrating the initial setup steps clearly.
        </ListItem>
        <ListItem>
          Scan Execution: Conducted various scans using different templates
          provided by Nessus, such as the Basic Network Scan and Advanced Scan.
          These scans helped identify multiple vulnerabilities, showcasing the
          utility of Nessus in a real-world testing environment.
        </ListItem>
        <ListItem>
          Vulnerability Analysis: Analyzed specific vulnerabilities like the
          outdated OpenSSH version and the unprotected SMB server. These
          examples highlighted the risks associated with these vulnerabilities
          and underscored the importance of timely updates and proper
          configuration.
        </ListItem>
        <ListItem>
          Resource Utilization: Integrated external resources effectively,
          including CVE, NVD, and CVSS scores, to enhance understanding and
          provide a pathway for in-depth vulnerability research.
        </ListItem>
        <ListItem>
          Educational Value: Through practical application, demonstrated the
          critical aspects of cybersecurity, including risk assessment,
          problem-solving, and the application of remediation strategies.
        </ListItem>
      </UnorderedList>
      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="md"
        className={styles.projectSubtitle}
      >
        Final Note
      </Heading>

      <Text marginBottom="4">
        Throughout this exercise, I’ve explored the capabilities of Nessus
        within a Kali Linux environment, from installation to deep dive into
        vulnerability analysis. The practical experience gained underscores the
        importance of regular vulnerability scanning as a cornerstone of
        proactive security measures. The vulnerabilities detected, such as those
        related to OpenSSH and SMB services, highlight the necessity for
        diligent system configuration and prompt software updates. Moving
        forward, the use of Nessus and similar tools should be regarded as an
        integral part of any cybersecurity strategy, ensuring systems are
        protected against known threats through continuous monitoring and
        immediate response. As we continue to explore more tools and techniques,
        maintaining a hands-on approach will be vital for developing a robust
        defensive posture against evolving cyber threats.
      </Text>
    </Box>
  );
}
