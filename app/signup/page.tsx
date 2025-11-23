"use client"
import { Box, Button, Container, Heading, Input, Stack, Text, Card } from "@chakra-ui/react"
import Link from "next/link"

export default function SignupPage() {
    return (
        <Container maxW="md" py="20">
            <Card.Root>
                <Card.Body>
                    <Heading size="xl" textAlign="center" mb="6">Create Account</Heading>
                    <Stack gap="4">
                        <Box>
                            <Text mb="1" fontWeight="medium">Full Name</Text>
                            <Input placeholder="Enter your name" />
                        </Box>
                        <Box>
                            <Text mb="1" fontWeight="medium">Email</Text>
                            <Input placeholder="Enter your email" />
                        </Box>
                        <Box>
                            <Text mb="1" fontWeight="medium">Password</Text>
                            <Input type="password" placeholder="Create a password" />
                        </Box>
                        <Button colorPalette="blue" w="full" mt="2">Sign Up</Button>
                        <Text textAlign="center" fontSize="sm">
                            Already have an account? <Link href="/login" style={{ color: 'blue' }}>Log in</Link>
                        </Text>
                    </Stack>
                </Card.Body>
            </Card.Root>
        </Container>
    )
}
