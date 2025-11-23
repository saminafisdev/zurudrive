"use client"
import { Box, Flex, HStack, Button, Text, Container } from "@chakra-ui/react"
import Link from "next/link"

export const Navbar = () => {
    return (
        <Box borderBottomWidth="1px" bg="bg.panel" position="sticky" top="0" zIndex="sticky" backdropFilter="blur(10px)">
            <Container maxW="8xl">
                <Flex justify="space-between" align="center" h="16">
                    {/* Logo */}
                    <Link href="/">
                        <Text textStyle="2xl" fontWeight="bold" color="blue.600">
                            ZuruDrive
                        </Text>
                    </Link>

                    {/* Desktop Nav */}
                    <HStack gap="8" display={{ base: "none", md: "flex" }}>
                        <Link href="/cars"><Text fontWeight="medium" _hover={{ color: "blue.500" }}>Browse Cars</Text></Link>
                        <Link href="/dashboard"><Text fontWeight="medium" _hover={{ color: "blue.500" }}>Dashboard</Text></Link>
                        <Link href="/admin"><Text fontWeight="medium" _hover={{ color: "blue.500" }}>Admin</Text></Link>
                    </HStack>

                    {/* Auth Buttons */}
                    <HStack gap="4">
                        <Link href="/login">
                            <Button variant="ghost" size="sm">Log In</Button>
                        </Link>
                        <Link href="/signup">
                            <Button colorPalette="blue" size="sm">Sign Up</Button>
                        </Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}
