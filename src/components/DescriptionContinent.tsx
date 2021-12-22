import { Container, Flex, Text,Box } from "@chakra-ui/react";

export function DescriptionContinent() {
    return (
        <>
            <Box
              textAlign="justify"
              w="100%"
              display="flex"
              flexDirection={["column", "row"]}
              alignItems="center"
              justifyContent="space-between"
              gap="2rem"
            >
                <Flex>
                    <Container w="100%" padding="0" color="dark.headingsAndText" mt="2rem" mb={["1rem","2rem"]}>
                        A Europa é, por convenção, um dos seis continentes do
                        mundo. Compreendendo a península ocidental da Eurásia, a
                        Europa geralmente divide-se da Ásia a leste pela
                        divisória de águas dos montes Urais, o rio Ural, o mar
                        Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </Container>
                </Flex>

                <Flex gap="2rem" fontWeight={["400","600"]} fontSize={["24px", "28px"]} textAlign={["left","center"]}>
                  <Box>
                    <Text color="yellow.highlight" fontWeight="600">50</Text>
                    <Text color="dark.headingsAndText">países</Text>
                  </Box>

                  <Box>
                    <Text color="yellow.highlight" fontWeight="600">60</Text>
                    <Text color="dark.headingsAndText">línguas</Text>
                  </Box>

                  <Box>
                    <Text color="yellow.highlight" fontWeight="600">27</Text>
                    <Text color="dark.headingsAndText">cidades +100</Text>
                  </Box>
                </Flex>
            </Box>
        </>
    );
}
