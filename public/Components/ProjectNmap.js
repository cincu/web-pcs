import {
  Box,
  Button,
  Code,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { Text } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";
export default function ProjectNmap() {
  const [showContents, setShowContents] = useState(false);

  const toggleContents = () => {
    setShowContents(!showContents);
  };
  return (
    <Box>
      <UnorderedList spacing={2} styleType="none" marginBottom="4">
        <ListItem>
          <Button as="a" href="#heading1" variant="link" colorScheme="teal">
            1. Live Host Discovery
          </Button>
        </ListItem>
        <ListItem>
          <Button as="a" href="#heading2" variant="link" colorScheme="teal">
            2. Basic Port Scans and Impact of Firewalls
          </Button>
        </ListItem>
        <ListItem>
          <Button as="a" href="#heading3" variant="link" colorScheme="teal">
            3. Advanced Port Scans
          </Button>
        </ListItem>
        <ListItem>
          <Button as="a" href="#heading4" variant="link" colorScheme="teal">
            4. Post Port Scans
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
        Live Host Discovery
      </Heading>
      <Box>
        <Text marginBottom="4">
          Discovering live hosts is usually not detailed but simpler and fast.
          This process is used for narrowing down which hosts to focus on for
          further exploration or detailed scanning.
        </Text>

        <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
          <ListItem>
            <Text fontWeight="bold">ARP Host Discovery Scan:</Text>
            <Text>
              Uses ARP requests to discover live hosts{" "}
              <strong>in the same subnet/network</strong> ⇒ link layer ⇒
              receives MAC addresses on the same LAN.
            </Text>
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              sudo nmap -PR -sn $ip/24
            </Code>
          </ListItem>

          <ListItem>
            <Text fontWeight="bold">ICMP Host Discovery Scan:</Text>
            <Text>
              Uses ICMP requests to identify live hosts{" "}
              <strong>outside the local network</strong> ⇒ network layer ⇒ for
              privileged user <em>(sudo)</em>, ICMP Echo request (-PE), TCP ACK
              to port 80, TCP SYN to port 443, ICMP timestamp request (-PP). For{" "}
              <em>unprivileged user</em>, TCP 3-way handshake by sending SYN
              packets to port 80 and 443.
            </Text>
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              sudo nmap -PE -sn $ip/24 ⇒ ICMP Echo scan
            </Code>
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              sudo nmap -PP -sn $ip/24 ⇒ ICMP Timestamp scan
            </Code>
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              sudo nmap -PM -sn $ip/24 ⇒ ICMP Address Mask
            </Code>
          </ListItem>

          <ListItem>
            <Text fontWeight="bold">TCP/UDP Ping Host Discovery Scan:</Text>
            <Text>
              Sends packets to TCP and UDP ports to determine live hosts.
            </Text>
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              (sudo) nmap -PS -sn $ip/24 ⇒ TCP SYN Ping, you don’t have to be{" "}
              <strong>privileged</strong>
            </Code>
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              sudo nmap -PA -sn $ip/24 ⇒ TCP ACK Ping
            </Code>
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              sudo nmap -PU -sn $ip/24 ⇒ UDP Ping
            </Code>
          </ListItem>

          <ListItem>
            <Text>Additional Options:</Text>
            <UnorderedList
              marginLeft="8"
              marginBottom="4"
              spacing={2}
              styleType="'- '"
            >
              <ListItem>
                <Code>-PS</Code> ⇒ TCP SYN ping
              </ListItem>
              <ListItem>
                <Code>-PS21, -PS21-25</Code> ⇒ targeting a specific port or
                range
              </ListItem>
              <ListItem>
                <Code>-n</Code> ⇒ don’t include DNS server
              </ListItem>
              <ListItem>
                <Code>-R</Code> ⇒ reverse-DNS lookup for all hosts ⇒ to query
                the DNS server including offline hosts ⇒{" "}
                <Code>—dns-servers &lt;DNS_SERVER&gt;</Code>
              </ListItem>
              <ListItem>
                <Code>-sn</Code> ⇒ for host discovery /{" "}
                <Code>-P&lt;number&gt;</Code> ⇒ for port discovery
              </ListItem>
            </UnorderedList>
          </ListItem>

          <ListItem>
            <Text>Examples of Nmap Commands:</Text>
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              nmap $ip scanme.nmap.org example.org ⇒ <strong>LIST</strong> =
              scans 3 IP addresses
            </Code>
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              nmap 10.11.12.15-20 ⇒ <strong>RANGE</strong> = scans 10.11.12.15,
              10.11.12.16… 10.11.12.20
            </Code>
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              nmap $ip/30 ⇒ <strong>SUBNET</strong> = scans 4 IP addresses
            </Code>
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              nmap -iL list_of_hosts.txt ⇒ scans the provided IP addresses from
              text file
            </Code>
            <Code
              display="block"
              marginY="2"
              padding="2"
              backgroundColor="gray.100"
            >
              nmap -sn TARGETS ⇒ host discovery only
            </Code>
          </ListItem>
        </UnorderedList>
      </Box>
      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="lg"
        className={styles.projectSubtitle}
        marginBottom="4"
        id="heading2"
      >
        Basic Port Scans and Impact of Firewalls
      </Heading>
      <Box>
        <Text marginBottom="4">
          Port scanning is more detailed and is used to map open ports on live
          hosts. It's useful for understanding what services are running and
          potentially accessible on a network.
        </Text>

        <Heading fontFamily="Quicksand" as="h4" size="md" marginBottom="4">
          Impacts of Firewalls
        </Heading>

        <Text marginBottom="4">
          A port might be open, but a firewall might be blocking the packets.
          Nmap considers six possible states for a port:
        </Text>

        <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
          <ListItem>
            <strong>Open:</strong> Service is listening on the port.
          </ListItem>
          <ListItem>
            <strong>Closed:</strong> No service is listening on the port, but
            the port is <strong>accessible</strong> (reachable and{" "}
            <strong>not</strong> blocked by a firewall or other security
            appliances/programs).
          </ListItem>
          <ListItem>
            <strong>Filtered:</strong> Nmap <strong>can’t</strong> determine if
            the port is open or closed because it’s <strong>not</strong>{" "}
            accessible.
          </ListItem>
          <ListItem>
            <strong>Unfiltered:</strong> Nmap <strong>can’t</strong> determine
            if the port is open or closed, but it’s accessible. This state can
            usually be encountered when using an ACK scan with <Code>-sA</Code>.
          </ListItem>
          <ListItem>
            <strong>Open|Filtered:</strong> Nmap can’t determine if the port is
            open <strong>OR</strong> filtered.
          </ListItem>
          <ListItem>
            <strong>Closed|Filtered:</strong> Nmap can’t determine if the port
            is closed <strong>OR</strong> filtered.
          </ListItem>
        </UnorderedList>

        <Text marginBottom="4" fontWeight="bold">
          TCP Flags Reminder:
        </Text>
        <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
          <ListItem>
            <strong>URG:</strong> Urgent flag indicates that the urgent pointer
            field is significant. The urgent pointer indicates that the incoming
            data is urgent, and that a TCP segment with the URG flag set is
            processed immediately.
          </ListItem>
          <ListItem>
            <strong>ACK:</strong> Acknowledgement flag indicates that the
            acknowledgement number is significant. It is used to acknowledge the
            receipt of a TCP segment.
          </ListItem>
          <ListItem>
            <strong>PSH:</strong> Push flag asking TCP to pass the data to the
            application promptly.
          </ListItem>
          <ListItem>
            <strong>RST:</strong> Reset flag is used to reset the connection.
            Another device, such as a firewall, might send it to tear down a TCP
            connection.
          </ListItem>
          <ListItem>
            <strong>SYN:</strong> Synchronize flag is used to initiate a TCP
            3-way handshake and synchronize sequence numbers with the other
            host.
          </ListItem>
          <ListItem>
            <strong>FIN:</strong> The sender has no more data to send.
          </ListItem>
        </UnorderedList>

        <Heading fontFamily="Quicksand" as="h4" size="md" marginBottom="4">
          TCP Connect Scan
        </Heading>

        <Text marginBottom="4">
          If you are not a sudo user, this is the only way to find out open TCP
          ports:
        </Text>
        <Code
          display="block"
          marginY="2"
          padding="2"
          backgroundColor="gray.100"
        >
          nmap -sT $ip
        </Code>

        <Heading fontFamily="Quicksand" as="h4" size="md" marginBottom="4">
          TCP SYN Scan
        </Heading>

        <Text marginBottom="4">
          Requires sudo. This is the default and reliable scan mode. It{" "}
          <strong>does not</strong> complete the 3-way handshake (stealth):
        </Text>
        <Code
          display="block"
          marginY="2"
          padding="2"
          backgroundColor="gray.100"
        >
          sudo nmap -sS $ip
        </Code>

        <Heading fontFamily="Quicksand" as="h4" size="md" marginBottom="4">
          UDP Scan
        </Heading>

        <Text marginBottom="4">
          UDP is a connectionless protocol, meaning it <strong>does not</strong>{" "}
          require a handshake:
        </Text>
        <Code
          display="block"
          marginY="2"
          padding="2"
          backgroundColor="gray.100"
        >
          sudo nmap -sU $ip
        </Code>

        <Heading fontFamily="Quicksand" as="h4" size="md" marginBottom="4">
          Fine-tuning Scans
        </Heading>

        <Table variant="striped" marginBottom="4">
          <Thead>
            <Tr>
              <Th>Option</Th>
              <Th>Purpose</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Code>-p-</Code>
              </Td>
              <Td>Scan all ports</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>-p1-1023</Code>
              </Td>
              <Td>Scan ports 1 to 1023</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>-F</Code>
              </Td>
              <Td>Scan the 100 most common ports</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>-r</Code>
              </Td>
              <Td>Scan ports in consecutive order</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>-T&lt;0-5&gt;</Code>
              </Td>
              <Td>-T0 being the slowest and T5 the fastest</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>--max-rate 50</Code>
              </Td>
              <Td>Rate ≤ 50 packets/sec</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>--min-rate 15</Code>
              </Td>
              <Td>Rate ≥ 15 packets/sec</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>--min-parallelism 100</Code>
              </Td>
              <Td>At least 100 probes in parallel</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="lg"
        className={styles.projectSubtitle}
        marginBottom="4"
        id="heading3"
      >
        Advanced Port Scans{" "}
      </Heading>
      <Box>
        <Text marginBottom="4">
          The TCP Maimon Scan is used to understand whether there is a firewall:
        </Text>
        <Code
          display="block"
          marginY="2"
          padding="2"
          backgroundColor="gray.100"
        >
          sudo nmap -sM 10.10.252.27
        </Code>

        <Heading
          fontFamily="Quicksand"
          as="h4"
          size="md"
          marginBottom="4"
          marginTop="8"
        >
          Summary of Scans
        </Heading>

        <Text marginBottom="4">
          This room covered the following types of scans:
        </Text>

        <Table variant="striped" marginBottom="4">
          <Thead>
            <Tr>
              <Th>Port Scan Type</Th>
              <Th>Example Command</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>TCP Null Scan</Td>
              <Td>
                <Code>sudo nmap -sN 10.10.26.232</Code>
              </Td>
            </Tr>
            <Tr>
              <Td>TCP FIN Scan</Td>
              <Td>
                <Code>sudo nmap -sF 10.10.26.232</Code>
              </Td>
            </Tr>
            <Tr>
              <Td>TCP Xmas Scan</Td>
              <Td>
                <Code>sudo nmap -sX 10.10.26.232</Code>
              </Td>
            </Tr>
            <Tr>
              <Td>TCP Maimon Scan</Td>
              <Td>
                <Code>sudo nmap -sM 10.10.26.232</Code>
              </Td>
            </Tr>
            <Tr>
              <Td>TCP ACK Scan</Td>
              <Td>
                <Code>sudo nmap -sA 10.10.26.232</Code>
              </Td>
            </Tr>
            <Tr>
              <Td>TCP Window Scan</Td>
              <Td>
                <Code>sudo nmap -sW 10.10.26.232</Code>
              </Td>
            </Tr>
            <Tr>
              <Td>Custom TCP Scan</Td>
              <Td>
                <Code>
                  sudo nmap --scanflags URGACKPSHRSTSYNFIN 10.10.26.232
                </Code>
              </Td>
            </Tr>
            <Tr>
              <Td>Spoofed Source IP</Td>
              <Td>
                <Code>sudo nmap -S SPOOFED_IP 10.10.26.232</Code>
              </Td>
            </Tr>
            <Tr>
              <Td>Spoofed MAC Address</Td>
              <Td>
                <Code>--spoof-mac SPOOFED_MAC</Code>
              </Td>
            </Tr>
            <Tr>
              <Td>Decoy Scan</Td>
              <Td>
                <Code>nmap -D DECOY_IP,ME 10.10.26.232</Code>
              </Td>
            </Tr>
            <Tr>
              <Td>Idle (Zombie) Scan</Td>
              <Td>
                <Code>sudo nmap -sI ZOMBIE_IP 10.10.26.232</Code>
              </Td>
            </Tr>
            <Tr>
              <Td>Fragment IP data into 8 bytes</Td>
              <Td>
                <Code>-f</Code>
              </Td>
            </Tr>
            <Tr>
              <Td>Fragment IP data into 16 bytes</Td>
              <Td>
                <Code>-ff</Code>
              </Td>
            </Tr>
          </Tbody>
        </Table>

        <Table variant="striped" marginBottom="4">
          <Thead>
            <Tr>
              <Th>Option</Th>
              <Th>Purpose</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Code>--source-port PORT_NUM</Code>
              </Td>
              <Td>Specify source port number</Td>
            </Tr>
            <Tr>
              <Td>
                <Code>--data-length NUM</Code>
              </Td>
              <Td>Append random data to reach the given length</Td>
            </Tr>
          </Tbody>
        </Table>

        <Text marginBottom="4">
          These scan types rely on setting TCP flags in unexpected ways to
          prompt ports for a reply. Null, FIN, and Xmas scans provoke a response
          from closed ports, while Maimon, ACK, and Window scans provoke a
          response from open and closed ports.
        </Text>
      </Box>
      <Heading
        fontFamily="Quicksand"
        as="h4"
        size="lg"
        className={styles.projectSubtitle}
        marginBottom="4"
        id="heading4"
      >
        Post Port Scans
      </Heading>
      <Box>
        <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
          <ListItem>
            <Code>-sV</Code> ⇒ Adds a column to the scan results 'VERSION' and
            appends it to the service. Proceeds with TCP 3-way handshake.
          </ListItem>
          <ListItem>
            <Code>-sV --version-light</Code> ⇒ Intensity of the version
            detection, range between 0-9.
          </ListItem>
          <ListItem>
            <Code>-sV --version-all</Code> ⇒ Intensity level of 9.
          </ListItem>
        </UnorderedList>
        <Code
          display="block"
          marginY="2"
          padding="2"
          backgroundColor="gray.100"
        >
          sudo nmap -sV $ip
        </Code>

        <Heading
          fontFamily="Quicksand"
          as="h4"
          size="md"
          marginBottom="4"
          marginTop="8"
        >
          OS Detection
        </Heading>

        <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
          <ListItem>
            <Code>-O</Code> ⇒ Stealth is possible with this scan.
          </ListItem>
        </UnorderedList>
        <Code
          display="block"
          marginY="2"
          padding="2"
          backgroundColor="gray.100"
        >
          sudo nmap -sS -O $ip
        </Code>

        <Heading
          fontFamily="Quicksand"
          as="h4"
          size="md"
          marginBottom="4"
          marginTop="8"
        >
          Traceroute
        </Heading>

        <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
          <ListItem>
            <Code>--traceroute</Code> ⇒ Standard traceroute works with TTL and
            keeps increasing until it reaches the target. Nmap works in reverse
            (starts with a packet of high TTL).
          </ListItem>
        </UnorderedList>
        <Code
          display="block"
          marginY="2"
          padding="2"
          backgroundColor="gray.100"
        >
          sudo nmap -sS --traceroute $ip
        </Code>

        <Heading
          fontFamily="Quicksand"
          as="h4"
          size="md"
          marginBottom="4"
          marginTop="8"
        >
          Nmap Scripting Engine (NSE)
        </Heading>

        <Text marginBottom="4">
          A script is a code that doesn’t need to be compiled and remains
          human-readable. Nmap installation by default includes almost 600
          scripts.
        </Text>
        <Text marginBottom="4">
          <Code>/usr/share/nmap/scripts</Code> ⇒ Location of the scripts.
        </Text>

        <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
          <ListItem>
            <Code>--script=default</Code> or <Code>-sC</Code> ⇒ Default script.
          </ListItem>
          <ListItem>
            <Code>--script=auth</Code> ⇒ Authentication related scripts.
          </ListItem>
          <ListItem>
            <Code>--script=broadcast</Code> ⇒ Discover hosts by sending
            broadcast messages.
          </ListItem>
          <ListItem>
            <Code>--script=brute</Code> ⇒ Performs brute-force password auditing
            against logins.
          </ListItem>
          <ListItem>
            <Code>--script=discovery</Code> ⇒ Retrieve accessible information,
            such as database tables and DNS names.
          </ListItem>
          <ListItem>
            <Code>--script=dos</Code> ⇒ Detects servers vulnerable to Denial of
            Service (DoS).
          </ListItem>
          <ListItem>
            <Code>--script=exploit</Code> ⇒ Attempts to exploit various
            vulnerable services.
          </ListItem>
          <ListItem>
            <Code>--script=external</Code> ⇒ Checks using a third-party service,
            such as Geoplugin and Virustotal.
          </ListItem>
          <ListItem>
            <Code>--script=fuzzer</Code> ⇒ Launch fuzzing attacks.
          </ListItem>
          <ListItem>
            <Code>--script=intrusive</Code> ⇒ Intrusive scripts such as
            brute-force attacks and exploitation.
          </ListItem>
          <ListItem>
            <Code>--script=malware</Code> ⇒ Scans for backdoors.
          </ListItem>
          <ListItem>
            <Code>--script=safe</Code> ⇒ Safe scripts that won’t crash the
            target.
          </ListItem>
          <ListItem>
            <Code>--script=version</Code> ⇒ Retrieve service versions.
          </ListItem>
          <ListItem>
            <Code>--script=vuln</Code> ⇒ Checks for vulnerabilities or exploit
            vulnerable services.
          </ListItem>
          <ListItem>
            <Code>--script=http-date</Code> ⇒ Retrieve server time and date
            (benign example).
          </ListItem>
        </UnorderedList>
        <Code
          display="block"
          marginY="2"
          padding="2"
          backgroundColor="gray.100"
        >
          nmap -sS -sC $ip
        </Code>
        <Code
          display="block"
          marginY="2"
          padding="2"
          backgroundColor="gray.100"
        >
          sudo nmap -sS -n --script "http-date" $ip
        </Code>
        <Text marginBottom="4">
          You can go to the scripts directory{" "}
          <Code>cd /usr/share/nmap/scripts</Code> and view a script with{" "}
          <Code>cat &lt;script_name&gt;.nse</Code>.
        </Text>

        <Heading
          fontFamily="Quicksand"
          as="h4"
          size="md"
          marginBottom="4"
          marginTop="8"
        >
          Saving the Output
        </Heading>

        <Text marginBottom="4">
          There are three main formats for saving the output: Normal, Grepable,
          and XML.
        </Text>
        <UnorderedList marginBottom="4" spacing={2} styleType="'- '">
          <ListItem>
            <Code>-oN &lt;FILENAME&gt;</Code> ⇒ Normal format. Example:{" "}
            <Code>cat MACHINE_IP_scan.nmap</Code>.
          </ListItem>
          <ListItem>
            <Code>-oG &lt;FILENAME&gt;</Code> ⇒ Grepable format for filtering
            the scan output for specific keywords. Example:{" "}
            <Code>cat MACHINE_IP_scan.gnmap | grep http</Code>.
          </ListItem>
          <ListItem>
            <Code>-oX &lt;FILENAME&gt;</Code> ⇒ XML format.
          </ListItem>
        </UnorderedList>

        <Text marginBottom="4" fontWeight="bold">
          Note: <Code>-sS</Code> (stealth scan) is not possible with{" "}
          <Code>-sV</Code> (version detection).
        </Text>
      </Box>
    </Box>
  );
}
