"use client"
import { Badge, Box, Button, Card, HStack, Image, Text, Stack } from "@chakra-ui/react"
import Link from "next/link"
import { Car } from "../data/cars"

interface CarCardProps {
    car: Car
}

export const CarCard = ({ car }: CarCardProps) => {
    return (
        <Card.Root overflow="hidden" variant="elevated" _hover={{ transform: "translateY(-4px)", shadow: "lg", transition: "all 0.2s" }}>
            <Image
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                h="200px"
                w="full"
                objectFit="cover"
            />
            <Card.Body>
                <HStack justify="space-between" mb="2">
                    <Badge colorPalette="blue">{car.category}</Badge>
                    <Text fontSize="sm" color="gray.500">{car.location}</Text>
                </HStack>
                <Card.Title mb="2">{car.brand} {car.model}</Card.Title>
                <Stack gap="1" fontSize="sm" color="gray.600" mb="4">
                    <HStack justify="space-between">
                        <Text>Transmission</Text>
                        <Text fontWeight="medium">{car.specs.transmission}</Text>
                    </HStack>
                    <HStack justify="space-between">
                        <Text>Seats</Text>
                        <Text fontWeight="medium">{car.specs.seats}</Text>
                    </HStack>
                    <HStack justify="space-between">
                        <Text>Fuel</Text>
                        <Text fontWeight="medium">{car.specs.fuel}</Text>
                    </HStack>
                </Stack>
                <HStack justify="space-between" align="center" mt="auto">
                    <Box>
                        <Text fontSize="xl" fontWeight="bold" color="blue.600">${car.pricePerDay}</Text>
                        <Text fontSize="xs" color="gray.500">/ day</Text>
                    </Box>
                    <Link href={`/cars/${car.id}`}>
                        <Button colorPalette="blue" size="sm">Rent Now</Button>
                    </Link>
                </HStack>
            </Card.Body>
        </Card.Root>
    )
}
