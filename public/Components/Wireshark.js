import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Input,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";

const wiresharkFilters = [
  "ip.addr == 192.168.1.1",
  "tcp.port == 80",
  "udp.port == 53",
  "http.request",
  "dns",
  "ftp",
  "icmp",
  "arp",
  "tcp.flags.syn == 1",
  "ip.src == 10.0.0.1",
  "eth.addr == 00:11:22:33:44:55",
  "tcp.analysis.flags",
];

const WiresharkNotes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFilters = wiresharkFilters.filter((filter) =>
    filter.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ChakraProvider>
      <Box p={5}>
        <Heading as="h1" size="xl" mb={5}>
          Notes on Wireshark
        </Heading>
        <Input
          placeholder="Search filters"
          mb={5}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <UnorderedList spacing={3}>
          {filteredFilters.map((filter, index) => (
            <ListItem key={index}>
              <Text className="highlightedCode">{filter}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </ChakraProvider>
  );
};

export default WiresharkNotes;
