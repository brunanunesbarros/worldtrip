import { Container, Flex, Text,Box } from "@chakra-ui/react";

type DescriptionContinentProps = {
  description: string,
  count_country: number,
  count_language: number,
  count_cities: number
} 

export function DescriptionContinent(props: DescriptionContinentProps) {
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
                        {props.description}
                    </Container>
                </Flex>

                <Flex gap="2rem" fontWeight={["400","600"]} fontSize={["24px", "28px"]} textAlign={["left","center"]}>
                  <Box>
                    <Text color="yellow.highlight" fontWeight="600">{props.count_country}</Text>
                    <Text color="dark.headingsAndText">países</Text>
                  </Box>

                  <Box>
                    <Text color="yellow.highlight" fontWeight="600">{props.count_language}</Text>
                    <Text color="dark.headingsAndText">línguas</Text>
                  </Box>

                  <Box>
                    <Text color="yellow.highlight" fontWeight="600">{props.count_cities}</Text>
                    <Text color="dark.headingsAndText">cidades +100</Text>
                  </Box>
                </Flex>
            </Box>
        </>
    );
}
