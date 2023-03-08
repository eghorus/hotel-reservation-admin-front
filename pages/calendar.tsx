import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Heading,
  Select,
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
import { CalendarIcon } from "@chakra-ui/icons";
import Layout from "../components/layout/layout";
import { getDaysInRange, weekDays } from "../utils/date.utils";

import roomTypes from "../data/room-types";
import reservations from "../data/reservations";

export default function Calendar() {
  const rangeCount = 100;
  const today = new Date();
  const startDateInRange = new Date(today.getFullYear(), today.getMonth(), today.getDate() - rangeCount / 2);
  const dates = getDaysInRange(startDateInRange, rangeCount);
  const dateToColumnMap = new Map<string, number>();
  dates.map((date, index) => dateToColumnMap.set(date.toLocaleDateString("en-GB"), index + 1));
  const [selectedDate, setSelectedDate] = useState<number>(rangeCount / 2);

  return (
    <>
      <Head>
        <title>Concierge - Calendar</title>
      </Head>

      <Heading as="h2" size="lg" mb="5">
        Reservations Calendar
      </Heading>
      <Select
        value={selectedDate}
        icon={<CalendarIcon fontSize="md" />}
        maxW="60"
        mb="5"
        borderColor="gray.400"
        onChange={(e) => setSelectedDate(Number(e.target.value))}
      >
        {dates.map((date, index) => (
          <option key={date.toDateString()} value={index}>
            {date.toDateString()}
          </option>
        ))}
      </Select>
      <TableContainer overflowY="auto" h="100vh" borderRadius="lg">
        <Table
          sx={{
            "& tr > *:first-child": { position: "sticky", left: 0, zIndex: "1" },
            "& th, & td": { borderBottomColor: "gray.200" },
          }}
        >
          <TableCaption w="sm">
            <VisuallyHidden>Reservations Calendar</VisuallyHidden>
          </TableCaption>
          <Thead position="sticky" top="0" zIndex="2">
            <Tr>
              <Th bgColor="gray.50"></Th>
              {dates.map((date, index) => (
                <Th key={index} bgColor="gray.50" py="2">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    rowGap="1"
                    w="10"
                    border="1px"
                    borderColor="gray.400"
                    borderRadius="md"
                    px="6"
                    py="2"
                    cursor="pointer"
                    transitionProperty="all"
                    transitionDuration="fast"
                    transitionTimingFunction="ease"
                    {...(date.getDate() === dates[selectedDate].getDate() &&
                    date.getMonth() === dates[selectedDate].getMonth()
                      ? { boxShadow: "md", bgColor: "messenger.500", color: "white" }
                      : { _hover: { bgColor: "gray.200", color: "initial" } })}
                    onClick={() => setSelectedDate(index)}
                  >
                    <Text as="span" fontWeight="normal">
                      {weekDays[date.getDay()].slice(0, 3)}
                    </Text>
                    <Text as="span" fontSize="sm">
                      {date.getDate()}
                    </Text>
                  </Box>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {roomTypes.map((roomType) => (
              <React.Fragment key={roomType._id}>
                <Tr>
                  <Th borderColor="pink.200 !important" py="2" bgColor="pink.50" color="pink.400">
                    {roomType.type.replace("_", " ")}
                  </Th>
                  {dates.map((_, index) => (
                    <Td key={index}></Td>
                  ))}
                </Tr>
                {roomType.units.map((unit) => (
                  <Tr key={unit}>
                    <Th bgColor="gray.50">
                      {roomType.type
                        .split("_")
                        .map((title, index) => (index === 0 ? title.slice(0, 3) : title.slice(0, 2)))}
                      -{unit}
                    </Th>
                    {reservations[unit]
                      ? reservations[unit].reduce((result: React.ReactNode[], reservation, index) => {
                          const currReservationStartColIndex = dateToColumnMap.get(reservation.dates.start) as number;
                          let lastReservationEndColIndex = (
                            reservations[unit][index - 1]
                              ? dateToColumnMap.get(reservations[unit][index - 1].dates.end)
                              : 1
                          ) as number;
                          const colSpan =
                            Number(reservation.dates.end.slice(0, 2)) - Number(reservation.dates.start.slice(0, 2));
                          if (currReservationStartColIndex - lastReservationEndColIndex < 0) {
                            result[result.length - 1] = (
                              <Td
                                key="error"
                                colSpan={colSpan}
                                border="2px"
                                borderColor="red.400"
                                borderBottomColor="red.400 !important"
                                color="red.400"
                                fontSize="sm"
                                fontWeight="semibold"
                              >
                                Error: Invalid reservation dates!
                              </Td>
                            );
                            return [...result];
                          }
                          const prevCells = new Array(currReservationStartColIndex - lastReservationEndColIndex)
                            .fill("")
                            .map((_, index) => (
                              <Td
                                key={`${lastReservationEndColIndex + index}-${currReservationStartColIndex}`}
                                borderRight="1px"
                                borderColor="gray.200"
                              ></Td>
                            ));
                          const currentCell = (
                            <Td key={reservation._id} colSpan={colSpan} pl="2" py="1">
                              <Box
                                mr="-6"
                                borderRadius="sm"
                                px="2"
                                py="1"
                                bgColor="teal.400"
                                color="gray.100"
                                fontSize="xs"
                                transform="skew(-15deg)"
                              >
                                {reservation.guest.name}
                              </Box>
                            </Td>
                          );
                          result = [...result, ...prevCells, currentCell];
                          if (index === reservations[unit].length - 1) {
                            lastReservationEndColIndex = dateToColumnMap.get(reservations[unit][index].dates.end)!;
                            const nextCells = new Array(dates.length - lastReservationEndColIndex + 1)
                              .fill("")
                              .map((_, index) => (
                                <Td
                                  key={`${lastReservationEndColIndex + index}-${dates.length}`}
                                  borderRight="1px"
                                  borderColor="gray.200"
                                ></Td>
                              ));
                            result = [...result, ...nextCells];
                          }
                          return result;
                        }, [])
                      : dates.map((_, index) => <Td key={index} borderRight="1px" borderColor="gray.200"></Td>)}
                  </Tr>
                ))}
              </React.Fragment>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

Calendar.getLayout = function (page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
