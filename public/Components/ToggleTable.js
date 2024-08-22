import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
} from "@chakra-ui/react";

function ToggleTable({ title, columns, data }) {
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <Box mb={6}>
      <Button onClick={toggleTable} mb={4}>
        {showTable ? `- ${title}` : `+ ${title}`}
      </Button>

      {showTable && (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                {columns.map((column, index) => (
                  <Th key={index}>{column}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {data.map((row, rowIndex) => (
                <Tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <Td key={cellIndex}>{cell}</Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default ToggleTable;
