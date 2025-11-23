import { cars } from "../../data/cars"
import { notFound } from "next/navigation"
import { Box, Container, Grid, Heading, Text, Image, Stack, Badge, Button, Flex, Separator } from "@chakra-ui/react"

// Server Component
export default async function CarDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const car = cars.find(c => c.id === id)

    if (!car) {
        notFound()
    }

    return (
        <Container maxW="8xl" py="10">
            <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap="10">
                {/* Left Column: Images & Info */}
                <Box>
                    <Image src={car.image} alt={car.model} w="full" h={{ base: "300px", md: "500px" }} objectFit="cover" borderRadius="xl" mb="8" />

                    <Heading size="2xl" mb="2">{car.brand} {car.model}</Heading>
                    <Flex gap="4" mb="6">
                        <Badge size="lg" colorPalette="blue">{car.category}</Badge>
                        <Badge size="lg" variant="outline">{car.location}</Badge>
                    </Flex>

                    <Separator mb="8" />

                    <Heading size="lg" mb="4">Vehicle Specifications</Heading>
                    <Grid templateColumns="repeat(2, 1fr)" gap="6" mb="8">
                        <Box p="4" bg="gray.50" borderRadius="md">
                            <Text color="gray.500" fontSize="sm">Transmission</Text>
                            <Text fontWeight="bold">{car.specs.transmission}</Text>
                        </Box>
                        <Box p="4" bg="gray.50" borderRadius="md">
                            <Text color="gray.500" fontSize="sm">Fuel Type</Text>
                            <Text fontWeight="bold">{car.specs.fuel}</Text>
                        </Box>
                        <Box p="4" bg="gray.50" borderRadius="md">
                            <Text color="gray.500" fontSize="sm">Seats</Text>
                            <Text fontWeight="bold">{car.specs.seats} Persons</Text>
                        </Box>
                        <Box p="4" bg="gray.50" borderRadius="md">
                            <Text color="gray.500" fontSize="sm">Mileage</Text>
                            <Text fontWeight="bold">{car.specs.mileage}</Text>
                        </Box>
                    </Grid>

                    <Heading size="lg" mb="4">Description</Heading>
                    <Text color="gray.600" lineHeight="tall">
                        Experience the ultimate driving pleasure with this {car.brand} {car.model}.
                        Perfect for both city driving and long road trips, this {car.category.toLowerCase()} offers
                        exceptional comfort and performance. Book now to secure your ride.
                    </Text>
                </Box>

                {/* Right Column: Booking Card */}
                <Box>
                    <Box position="sticky" top="24" p="6" border="1px solid" borderColor="gray.200" borderRadius="xl" shadow="sm">
                        <Heading size="lg" mb="2">${car.pricePerDay} <Text as="span" fontSize="md" color="gray.500" fontWeight="normal">/ day</Text></Heading>
                        <Text color="green.600" fontSize="sm" fontWeight="medium" mb="6">Available for pickup</Text>

                        <Stack gap="4">
                            <Box>
                                <Text fontSize="sm" fontWeight="medium" mb="1">Pickup Date</Text>
                                <input type="date" style={{ width: '100%', padding: '8px', border: '1px solid #e2e8f0', borderRadius: '6px' }} />
                            </Box>
                            <Box>
                                <Text fontSize="sm" fontWeight="medium" mb="1">Return Date</Text>
                                <input type="date" style={{ width: '100%', padding: '8px', border: '1px solid #e2e8f0', borderRadius: '6px' }} />
                            </Box>

                            <Separator />

                            <Flex justify="space-between" fontWeight="bold">
                                <Text>Total</Text>
                                <Text>$0.00</Text>
                            </Flex>

                            <Button size="lg" colorPalette="blue" w="full">Book This Car</Button>
                            <Text fontSize="xs" color="gray.500" textAlign="center">You won't be charged yet</Text>
                        </Stack>
                    </Box>
                </Box>
            </Grid>
        </Container>
    )
}
