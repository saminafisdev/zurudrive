"use client"
import { Box, Container, Text, Stack, Flex } from "@chakra-ui/react"
import Link from "next/link"

export const Footer = () => {
    return (
        <Box bg="gray.50" color="gray.600" py="10" mt="auto">
            <Container maxW="8xl">
                <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "start", md: "center" }} gap="8">
                    <Stack gap="4">
                        <Text textStyle="xl" fontWeight="bold" color="blue.600">ZuruDrive</Text>
                        <Text fontSize="sm">Premium car rental service for your journey.</Text>
                    </Stack>

                    <Stack direction={{ base: "column", md: "row" }} gap="8" fontSize="sm">
                        <Link href="/about">About Us</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/contact">Contact</Link>
                    </Stack>
                </Flex>
                <Text fontSize="xs" mt="10" textAlign="center">© 2025 ZuruDrive. All rights reserved.</Text>
            </Container>
        </Box>
    )
}
