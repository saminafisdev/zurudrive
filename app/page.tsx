"use client"
import { Box, Button, Container, Flex, Heading, Input, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { cars } from "./data/cars"
import { CarCard } from "./components/CarCard"
import Link from "next/link"

export default function Home() {
  const featuredCars = cars.slice(0, 3)

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="blue.600" color="white" py={{ base: "20", md: "32" }} position="relative" overflow="hidden">
        <Container maxW="8xl" position="relative" zIndex="1">
          <Stack gap="6" maxW="2xl">
            <Heading size="4xl" fontWeight="bold" lineHeight="1.2">
              Find Your Perfect <br />
              <Text as="span" color="blue.200">Drive Today</Text>
            </Heading>
            <Text fontSize="xl" color="blue.100">
              Premium car rentals at affordable prices. Choose from our wide range of luxury and economy vehicles.
            </Text>

            {/* Search Box */}
            <Box bg="white" p="6" borderRadius="xl" shadow="xl" color="gray.800" mt="8">
              <Stack direction={{ base: "column", md: "row" }} gap="4">
                <Input placeholder="Pickup Location" size="lg" variant="outline" />
                <Input placeholder="Pickup Date" type="date" size="lg" variant="outline" />
                <Input placeholder="Return Date" type="date" size="lg" variant="outline" />
                <Button size="lg" colorPalette="blue" px="8">Search</Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Featured Cars */}
      <Container maxW="8xl" py="20">
        <Flex justify="space-between" align="center" mb="10">
          <Heading size="2xl">Featured Vehicles</Heading>
          <Link href="/cars">
            <Button variant="ghost" colorPalette="blue">View All Cars</Button>
          </Link>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="8">
          {featuredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </SimpleGrid>
      </Container>

      {/* How it Works */}
      <Box bg="gray.50" py="20">
        <Container maxW="8xl">
          <Heading size="2xl" textAlign="center" mb="16">How It Works</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="12">
            {[
              { title: "Choose Car", desc: "Browse our extensive fleet and pick the perfect car for your trip." },
              { title: "Book Dates", desc: "Select your pickup and return dates with our easy booking system." },
              { title: "Hit the Road", desc: "Pick up your car from one of our convenient locations and enjoy." }
            ].map((step, i) => (
              <Stack key={i} align="center" textAlign="center" gap="4">
                <Box w="16" h="16" bg="blue.100" color="blue.600" borderRadius="full" display="flex" alignItems="center" justifyContent="center" fontSize="2xl" fontWeight="bold">
                  {i + 1}
                </Box>
                <Heading size="lg">{step.title}</Heading>
                <Text color="gray.600">{step.desc}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}
