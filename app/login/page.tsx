"use client"
import { Box, Button, Container, Heading, Input, Stack, Text, Card } from "@chakra-ui/react"
import Link from "next/link"

export default function LoginPage() {
    return (
        <Container maxW="md" py="20">
            <Card.Root>
                <Card.Body>
                    <Heading size="xl" textAlign="center" mb="6">Welcome Back</Heading>
                    <Stack gap="4">
                        <Box>
                            <Text mb="1" fontWeight="medium">Email</Text>
                            <Input placeholder="Enter your email" />
                        </Box>
                        <Box>
                            <Text mb="1" fontWeight="medium">Password</Text>
                            <Input type="password" placeholder="Enter your password" />
                        </Box>
                        <Button colorPalette="blue" w="full" mt="2">Log In</Button>
                        <Text textAlign="center" fontSize="sm">
                            Don't have an account? <Link href="/signup" style={{ color: 'blue' }}>Sign up</Link>
                        </Text>
                    </Stack>
                </Card.Body>
            </Card.Root>
        </Container>
    )
}
