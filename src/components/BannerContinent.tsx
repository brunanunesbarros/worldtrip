import { Text, Flex, Container, Box } from "@chakra-ui/react";

export function BannerContinent() {
    return (
        <Box
          w={["375px","100%"]}
          h={["150px","500px"]}
          bgImage="/images/europeBanner.png"
          bgRepeat="repeat-y"
          bgPosition="top"
          bgSize="cover"
          display="flex"
          alignItems={["center","end"]}
        >
            <Container display="flex" justifyContent={["center","start"]}  my="6rem" maxW="container.lg" fontWeight="600" fontSize="28px" color="light.headingsAndText">
                Europa
            </Container>
        </Box>
    );
}
