import React from "react";
import Head from "next/head";
import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VisuallyHidden,
} from "@chakra-ui/react";
import Layout from "../components/layout/layout";
import { getDaysInRange } from "../utils/date.utils";

import rooms from "../data/rooms";

export default function Calendar() {
  const today = new Date();
  const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 50);
  const dates = getDaysInRange(startDate, 100);

  return (
    <>
      <Head>
        <title>Concierge - Calendar</title>
      </Head>

      <>
        <Heading as="h2" size="lg" mb="5">
          Reservations Calendar
        </Heading>
        <TableContainer overflowY="auto" h="100vh" borderRadius="lg">
          <Table
            size="sm"
            sx={{
              "& tr > *:first-child": { position: "sticky", left: 0 },
              "& th, & td": { borderBottomColor: "gray.200" },
            }}
          >
            <TableCaption w="sm">
              <VisuallyHidden>Reservations Calendar</VisuallyHidden>
            </TableCaption>
            <Thead position="sticky" top="0" zIndex="1">
              <Tr>
                <Th bgColor="gray.50"></Th>
                {dates.map((date, index) => (
                  <Th key={index} bgColor="gray.50" py="4">
                    <Box display="flex" flexDirection="column" alignItems="center" rowGap="1">
                      <Text as="span" fontWeight="normal">
                        {date.weekDay.slice(0, 3)}
                      </Text>
                      <Text as="span" fontSize="sm">
                        {date.day}
                      </Text>
                    </Box>
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {rooms.map((room) => (
                <React.Fragment key={room._id}>
                  <Tr>
                    <Th bgColor="teal.50" color="teal.400">
                      {room.type.replace("_", " ")}
                    </Th>
                  </Tr>
                  {room.units.map((unit) => (
                    <Tr key={unit}>
                      <Th py="4" bgColor="gray.50">
                        {room.type
                          .split("_")
                          .map((title, index) => (index === 0 ? title.slice(0, 3) : title.slice(0, 2)))}
                        -{unit}
                      </Th>
                      {dates.map((_, index) => (
                        <Td key={index}></Td>
                      ))}
                    </Tr>
                  ))}
                </React.Fragment>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </>
    </>
  );
}

Calendar.getLayout = function (page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
