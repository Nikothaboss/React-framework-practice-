import React from 'react'
import { Flex, Box, Spacer, Heading, HStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const Header = () => {
    return (
        <HStack
        p="25"
        bg="blackAlpha.700"
        spacing="24px"
        >
            <Box>
                <Heading size="lg" color="white">Chackra app</Heading>
            </Box>
            <Spacer />
            <HStack 
            spacing="24px"
            >
                <Button>This is a button</Button>
                <Button>This is a button</Button>
            </HStack>
        </HStack>
    )
}

export default Header
