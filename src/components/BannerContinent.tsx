import { Text, Flex, Container, Box } from "@chakra-ui/react";

type BannerContinentProps = {
    bannerUrl: string;
    name: string;
}

export function BannerContinent(props: BannerContinentProps) {
    return (
        <Box
          w={["375px","100%"]}
          h={["150px","500px"]}
          bgImage={props.bannerUrl}
          bgRepeat="repeat-y"
          bgPosition="top"
          bgSize="cover"
          display="flex"
          alignItems={["center","end"]}
        >
            <Container display="flex" justifyContent={["center","start"]}  my="4rem" maxW="container.lg" fontWeight="600" fontSize={["28px","36px"]} color="light.headingsAndText">
                {props.name}
            </Container>
        </Box>
    );
}
