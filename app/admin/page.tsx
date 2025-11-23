"use client"
import { Box, Container, Heading, SimpleGrid, Card, Text, Stack, Table } from "@chakra-ui/react"

export default function AdminPage() {
    return (
        <Container maxW="8xl" py="10">
            <Heading size="2xl" mb="8">Admin Dashboard</Heading>

            <SimpleGrid columns={{ base: 1, md: 4 }} gap="6" mb="10">
                {[
                    { label: "Total Cars", value: "12" },
                    { label: "Active Bookings", value: "5" },
                    { label: "Total Revenue", value: "$12,450" },
                    { label: "Pending Approvals", value: "2" }
                ].map((stat, i) => (
                    <Card.Root key={i}>
                        <Card.Body>
                            <Text color="gray.500" fontSize="sm">{stat.label}</Text>
                            <Heading size="xl">{stat.value}</Heading>
                        </Card.Body>
                    </Card.Root>
                ))}
            </SimpleGrid>

            <Heading size="lg" mb="6">Recent Bookings</Heading>
            <Card.Root>
                <Card.Body>
                    <Table.Root>
                        <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>Booking ID</Table.ColumnHeader>
                                <Table.ColumnHeader>Customer</Table.ColumnHeader>
                                <Table.ColumnHeader>Car</Table.ColumnHeader>
                                <Table.ColumnHeader>Status</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign="end">Amount</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>#12345</Table.Cell>
                                <Table.Cell>John Doe</Table.Cell>
                                <Table.Cell>Tesla Model 3</Table.Cell>
                                <Table.Cell>Confirmed</Table.Cell>
                                <Table.Cell textAlign="end">$240.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>#12346</Table.Cell>
                                <Table.Cell>Jane Smith</Table.Cell>
                                <Table.Cell>BMW X5</Table.Cell>
                                <Table.Cell>Pending</Table.Cell>
                                <Table.Cell textAlign="end">$360.00</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Card.Body>
            </Card.Root>
        </Container>
    )
}
