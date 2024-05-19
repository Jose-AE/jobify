import {
  Card,
  Button,
  HStack,
  CardHeader,
  CardBody,
  Container,
  Heading,
  SimpleGrid,
  CardFooter,
  Flex,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { ViewIcon, EditIcon, CalendarIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch(
          "http://localhost:3000/test/runpy?location=Dallas,%20TX&search_term=software%20engineer"
        );
        const data = await response.json();
        console.log(data);

        setTasks(data.result.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }

    fetchTasks();
  }, []);

  return (
    <SimpleGrid columns={4} spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task, i) => (
          <Card key={i} borderTop="8px" borderColor="teal.400" bg="white">
            <CardHeader>
              <Flex alignItems="center" justifyItems="stretch">
                <Heading as="h3" size="sm">
                  {task.max_amount}
                  {task.curreny}
                </Heading>
                <Text paddingLeft="5px">by {task.company}</Text>
              </Flex>
            </CardHeader>

            <CardBody color="black">
              <Heading as="h4">{task.title}</Heading>
              <Text textOverflow="elipsis">{task.description}</Text>
            </CardBody>

            <Divider borderColor="black"></Divider>

            <CardFooter>
              <HStack>
                <Button leftIcon={<ViewIcon />}>Watch</Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
