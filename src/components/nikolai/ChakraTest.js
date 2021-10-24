import { Box, Text, Flex, Spacer, Grid, HStack } from "@chakra-ui/layout"

const ChakraTest = () => {
    return (
    <Box p="10">
        <Text fontSize="24px">Flex and Spacer: Full width, equal Spacing</Text>
        <Flex mb="10" mt="10">
            <Box w="33%" h="10" bg="red.500" />
            <Spacer />
            <Box w="33%" h="10" bg="red.500" />
            <Spacer />
            <Box w="33%" h="10" bg="red.500" />
        </Flex>

        <Text fontSize="24px">
            Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
        </Text>
        
        <Grid templateColumns="repeat(auto-fit, minmax(260px, 1fr))" gap={6} mb="10" mt="10">
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
        </Grid>

        <Text fontSize="24px">
            HStack: The children have equal spacing but don't span the whole container
        </Text>
        <HStack spacing="24px" mb="10" mt="10">
            <Box w="70px" h="10" bg="teal.500" />
            <Box w="170px" h="10" bg="teal.500" />
            <Box w="180px" h="10" bg="teal.500" />
        </HStack>
    </Box>
    )
}

export default ChakraTest
