"use client"
import { Box, Container, Heading, Tabs, Text, Card, Badge, Stack, HStack, Button } from "@chakra-ui/react"

export default function DashboardPage() {
    return (
        <Container maxW="8xl" py="10">
            <Heading size="2xl" mb="8">My Dashboard</Heading>

            <Tabs.Root defaultValue="bookings">
                <Tabs.List>
                    <Tabs.Trigger value="bookings">My Bookings</Tabs.Trigger>
                    <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
                    <Tabs.Trigger value="wallet">Wallet</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="bookings" mt="6">
                    <Stack gap="4">
                        {/* Mock Booking */}
                        <Card.Root variant="elevated">
                            <Card.Body>
                                <HStack justify="space-between" align="start">
                                    <Box>
                                        <Heading size="md" mb="1">Tesla Model 3</Heading>
                                        <Text color="gray.500" fontSize="sm">Booking ID: #12345</Text>
                                        <Text mt="2">Pickup: Oct 24, 2025</Text>
                                        <Text>Return: Oct 27, 2025</Text>
                                    </Box>
                                    <Stack align="end">
                                        <Badge colorPalette="green">Confirmed</Badge>
                                        <Text fontWeight="bold">$240.00</Text>
                                        <Button size="sm" variant="outline">View Details</Button>
                                    </Stack>
                                </HStack>
                            </Card.Body>
                        </Card.Root>
                    </Stack>
                </Tabs.Content>

                <Tabs.Content value="profile" mt="6">
                    <Text>Profile Settings (Coming Soon)</Text>
                </Tabs.Content>

                <Tabs.Content value="wallet" mt="6">
                    <Text>Wallet Balance: $0.00</Text>
                </Tabs.Content>
            </Tabs.Root>
        </Container>
    )
}
