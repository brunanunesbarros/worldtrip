import {
    Img,
    Text,
    Grid,
    GridItem,
    useBreakpointValue,
    Box,
    Center,
    Icon,
    Flex,
} from "@chakra-ui/react";

import { VscCircleFilled } from "react-icons/vsc";

export function Services() {
    const isMediumVersion = useBreakpointValue({
        base: false,
        md: true,
    });

    return (
        <>
            {isMediumVersion && (
                <Grid
                    w="100%"
                    templateColumns="repeat(5, 1fr)"
                    align="center"
                    mt="5rem"
                    color="dark.headingsAndText"
                    fontWeight="600"
                >
                    <GridItem
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Img src="/images/cocktail.png" alt="drink" />
                        <Text paddingTop="1rem">vida noturna</Text>
                    </GridItem>

                    <GridItem
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Img src="/images/beach.png" alt="beach" />
                        <Text paddingTop="1rem">praia</Text>
                    </GridItem>

                    <GridItem
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Img src="/images/building.png" alt="building" />
                        <Text paddingTop="1rem">moderno</Text>
                    </GridItem>

                    <GridItem
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Img src="/images/museum.png" alt="museum" />
                        <Text paddingTop="1rem">clássico</Text>
                    </GridItem>

                    <GridItem
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Img src="/images/earth.png" alt="earth" />
                        <Text paddingTop="1rem">e mais...</Text>
                    </GridItem>
                </Grid>
            )}

            {!isMediumVersion && (
                <Flex
                    flexDir="column"
                    align="center"
                    gap={4}
                    mt="2rem"
                    w="100%"
                    fontWeight="500"
                    fontSize="18px"
                    color="dark.headingsAndText"
                >
                    <Box
                        display="flex"
                        gap="1rem"
                        w="100%"
                        justifyContent="space-around"
                    >
                        <Box>
                            <Icon
                                mr="0.5rem"
                                as={VscCircleFilled}
                                color="yellow.highlight"
                            />
                            vida noturna
                        </Box>
                        <Box>
                            <Icon
                                mr="0.5rem"
                                as={VscCircleFilled}
                                color="yellow.highlight"
                            />
                            praia
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        gap="1rem"
                        w="100%"
                        justifyContent="space-around"
                    >
                        <Box>
                            <Icon
                                mr="0.5rem"
                                as={VscCircleFilled}
                                color="yellow.highlight"
                            />
                            moderno
                        </Box>
                        <Box>
                            <Icon
                                mr="0.5rem"
                                as={VscCircleFilled}
                                color="yellow.highlight"
                            />
                            clássico
                        </Box>
                    </Box>
                    <Box>
                        <Icon
                            mr="1rem"
                            as={VscCircleFilled}
                            color="yellow.highlight"
                        />
                        e mais...
                    </Box>
                </Flex>
            )}
        </>
    );
}
