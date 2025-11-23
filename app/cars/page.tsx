"use client"
import { Box, Container, Flex, Heading, SimpleGrid, Stack, Text, Separator } from "@chakra-ui/react"
import { Checkbox } from "@chakra-ui/react"
import { cars } from "../data/cars"
import { CarCard } from "../components/CarCard"

export default function CarsPage() {
    return (
        <Container maxW="8xl" py="10">
            <Heading size="2xl" mb="8">Browse Cars</Heading>

            <Flex gap="10" direction={{ base: "column", lg: "row" }}>
                {/* Sidebar Filters */}
                <Box w={{ base: "full", lg: "250px" }} flexShrink={0}>
                    <Stack gap="6">
                        <Box>
                            <Text fontWeight="bold" mb="3">Category</Text>
                            <Stack gap="2">
                                {["SUV", "Sedan", "Luxury", "Electric"].map(cat => (
                                    <Checkbox.Root key={cat}>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control>
                                            <Checkbox.Indicator />
                                        </Checkbox.Control>
                                        <Checkbox.Label>{cat}</Checkbox.Label>
                                    </Checkbox.Root>
                                ))}
                            </Stack>
                        </Box>
                        <Separator />
                        <Box>
                            <Text fontWeight="bold" mb="3">Price Range</Text>
                            <Stack gap="2">
                                {["Under $50", "$50 - $100", "$100+"].map(price => (
                                    <Checkbox.Root key={price}>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control>
                                            <Checkbox.Indicator />
                                        </Checkbox.Control>
                                        <Checkbox.Label>{price}</Checkbox.Label>
                                    </Checkbox.Root>
                                ))}
                            </Stack>
                        </Box>
                    </Stack>
                </Box>

                {/* Car Grid */}
                <Box flex="1">
                    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="6">
                        {cars.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </SimpleGrid>
                </Box>
            </Flex>
        </Container>
    )
}
