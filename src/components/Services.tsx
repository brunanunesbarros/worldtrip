import {
    Flex,
    HStack,
    Img,
    Text,
    Stack,
    Grid,
    GridItem,
} from "@chakra-ui/react";

export function Services() {
    return (
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
    );
}
