import { Container, Flex, Img, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
    const isMediumVersion = useBreakpointValue({
        base: false,
        md: true
    })

    return (
        <Flex
            backgroundImage="/images/Background.png"
            h={["160px","300px"]}
            color="light.headingsAndText"
            alignItems="center"
            justifyContent="space-between"
        >
            <Container>
                <Text fontWeight="400" fontSize={["20px","36px"]} lineHeight={["21px", "54px"]} color="light.headingsAndText">
                    5 continentes, infinitas possibilidades.
                </Text>
                <Text fontWeight="400" marginTop="1rem" fontSize={["14px","20px"]} lineHeight={["21px", "54px"]} color="light.info">
                    Chegou a hora de tirar do papel a viagem que você sempre
                    sonhou.
                </Text>
            </Container>

            { isMediumVersion && 
                <Container boxSize="sm">
                    <Img
                        src="/images/Airplane.png"
                        alt="avião"
                        transform="rotate(3deg) translateY(80px)"
                    />
                </Container> }
            
        </Flex>
    );
}
